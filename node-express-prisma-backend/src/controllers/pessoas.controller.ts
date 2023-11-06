import { Request, Response } from "express";
import { prisma } from "../services/prisma";

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
    }
}