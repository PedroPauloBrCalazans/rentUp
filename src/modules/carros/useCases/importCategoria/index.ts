import { CategoriasRepository } from "../../repositories/implementations/CategoriasRepository";
import { ImportCategoriaController } from "./ImportCategoriaController";
import { ImportCategoriaUseCase } from "./ImportCategoriaUseCase";

const categoriasRepository = CategoriasRepository.getInstance();
const importCategoriaUseCase = new ImportCategoriaUseCase(categoriasRepository);
const importCategoriaController = new ImportCategoriaController(importCategoriaUseCase);

export {importCategoriaController};