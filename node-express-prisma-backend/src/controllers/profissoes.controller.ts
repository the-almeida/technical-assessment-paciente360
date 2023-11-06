import { Request, Response } from "express";
import { prisma } from "../services/prisma";

export const profissoesController = {
    async listAll(req: Request, res: Response) {
        const profissoes = await prisma.profissao.findMany()
        const parsedProfissoes = profissoes.map(profissao => ({
            id: profissao.id,
            nome: profissao.profNome
        }));

        return res.json(parsedProfissoes)
    }
}