import { Router, request, response } from "express";
import multer from "multer";

import { createCategoriaController } from "../modules/carros/useCases/createCategoria";
import { listCategoriasController } from "../modules/carros/useCases/listCategorias";
import { importCategoriaController } from "../modules/carros/useCases/importCategoria";



const categoriasRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriasRoutes.post("/", (request, response) => {
    return createCategoriaController.handle(request, response);
});

categoriasRoutes.get("/", (request, response) => {
    return listCategoriasController.handle(request, response);
});

categoriasRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoriaController.handle(request, response);
});

export { categoriasRoutes };