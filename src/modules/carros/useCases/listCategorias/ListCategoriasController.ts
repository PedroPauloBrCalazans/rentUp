import { Request, Response, response } from "express";
import { ListCategoriasUseCase } from "./ListCategoriasUseCase";

class ListCategoriasController {
    constructor(private listCategoriasUseCase: ListCategoriasUseCase) {}

    handle(request: Request, response: Response): Response {
        
        const all = this.listCategoriasUseCase.execute()

        return response.json(all)
    }
}

export {ListCategoriasController};