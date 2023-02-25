import { request, response, Router } from "express";
import { CategoriasRepository } from "../repositories/CategoriasRepository";

const categoriasRoutes = Router();
const categoriasRepository = new CategoriasRepository();

categoriasRoutes.post("/", (request, response) => {
    const { nome, descricao } = request.body;

    const categoriaExiste = categoriasRepository.verificarCategoriaDuplicada(nome);

    if(categoriaExiste) {
        return response.status(400).json({error: "Categoria já existente!"})
    }

    categoriasRepository.createCategoria({ nome, descricao });

    return response.status(201).send();
});

categoriasRoutes.get("/", (request, response) => {
    const all = categoriasRepository.listCategoria();

    return response.json(all);
});

export { categoriasRoutes };