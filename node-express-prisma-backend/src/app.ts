import express from 'express'
import cors from 'cors'
import { pessoasRoutes } from './routes'

class App {
    public server;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json())
    }

    routes() {
        this.server.use("/api/pessoas", pessoasRoutes)
    }
}

export default new App().server;