import { Router } from "express";
import { pessoasController } from "../controllers/pessoas.controller";

const routes = Router();

routes.get("/", pessoasController.listAll)
routes.post("/create", pessoasController.createPessoa)
routes.put("/:id", pessoasController.updatePessoa)

export default routes