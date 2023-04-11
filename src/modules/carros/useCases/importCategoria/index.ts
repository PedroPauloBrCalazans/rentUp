import { ImportCategoriaController } from "./ImportCategoriaController";
import { ImportCategoriaUseCase } from "./ImportCategoriaUseCase";


const importCategoriaUseCase = new ImportCategoriaUseCase()
const importCategoriaController = new ImportCategoriaController(importCategoriaUseCase);

export {importCategoriaController}