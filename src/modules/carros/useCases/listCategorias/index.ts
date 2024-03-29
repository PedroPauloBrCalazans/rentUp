import { CategoriasRepository } from "../../repositories/implementations/CategoriasRepository"
import { ListCategoriasController } from "./ListCategoriasController";
import { ListCategoriasUseCase } from "./ListCategoriasUseCase";


const categoriasRepository = CategoriasRepository.getInstance();
const listCategoriasUseCase = new ListCategoriasUseCase(categoriasRepository);
const listCategoriasController = new ListCategoriasController(listCategoriasUseCase);

export {listCategoriasController};