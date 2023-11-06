import { Request, Response } from "express";
import { prisma } from "../services/prisma";

interface CreatePessoaRequest {
    nome: string;
    dataNascimento: Date;
    cpf: string;
    telefone?: string;
    observacoes?: string;
    idProfissao?: any;
}

export const pessoasController = {
    async listAll(req: Request, res: Response) {
        const pessoas = await prisma.pessoa.findMany({
            include: {
                pesProfissao: {
                    select: {
                        profNome: true
                    }
                }
            }
        })

        const parsedPessoas = pessoas.map(pessoa => ({
            id: pessoa.id,
            nome: pessoa.pesNome,
            dataNascimento: pessoa.pesDataNascimento,
            cpf: pessoa.pesCpf,
            telefone: pessoa.pesTelefone,
            observacoes: pessoa.pesObservacoes,
            idProfissao: pessoa.profId,
            profissao: pessoa.pesProfissao?.profNome || null
        }));

        return res.json(parsedPessoas)
    },
    async createPessoa(req: Request, res: Response) {
        const pessoaData: CreatePessoaRequest = req.body
        pessoaData.idProfissao = pessoaData.idProfissao !== '' ? Number(pessoaData.idProfissao) : null;

        const pessoa = await prisma.pessoa.create({
            data: {
                pesNome: pessoaData.nome,
                pesDataNascimento: pessoaData.dataNascimento,
                pesCpf: pessoaData.cpf,
                pesTelefone: pessoaData.telefone,
                pesObservacoes: pessoaData.observacoes,
                profId: pessoaData.idProfissao
            }
        })

        return res.json({pessoa})
    },
}