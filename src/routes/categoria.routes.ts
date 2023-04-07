import { request, response, Router } from "express";
import { CategoriasRepository } from "../modules/carros/repositories/CategoriasRepository";
import { CreateCategoriaService } from "../modules/carros/services/CreateCategoriaService";

const categoriasRoutes = Router();
const categoriasRepository = new CategoriasRepository();

categoriasRoutes.post("/", (request, response) => {
    const { nome, descricao } = request.body;

    const createCategoriaService = new CreateCategoriaService(categoriasRepository);
   
    createCategoriaService.execute({ nome, descricao });

    return response.status(201).send();
});

categoriasRoutes.get("/", (request, response) => {
    const all = categoriasRepository.listCategoria();

    return response.json(all);
});

export { categoriasRoutes };