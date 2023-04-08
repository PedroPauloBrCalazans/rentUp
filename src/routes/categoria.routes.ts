import { Router } from "express";

import { createCategoriaController } from "../modules/carros/useCases/createCategoria";
import { listCategoriasController } from "../modules/carros/useCases/listCategorias";

const categoriasRoutes = Router();

categoriasRoutes.post("/", (request, response) => {
    return createCategoriaController.handle(request, response);
});

categoriasRoutes.get("/", (request, response) => {
    return listCategoriasController.handle(request, response);
});

export { categoriasRoutes };