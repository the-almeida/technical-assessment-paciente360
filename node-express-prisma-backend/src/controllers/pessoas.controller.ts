import { Request, Response } from "express";
import { prisma } from "../services/prisma";

export const pessoasController = {
    async listAll(req: Request, res: Response) {
        const pessoas = await prisma.pessoa.findMany()

        return res.json(pessoas)
    }
}