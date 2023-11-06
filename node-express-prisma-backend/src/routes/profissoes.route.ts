import { Router } from "express";
import { profissoesController } from "../controllers/profissoes.controller";

const routes = Router();

routes.get("/", profissoesController.listAll)

export default routes