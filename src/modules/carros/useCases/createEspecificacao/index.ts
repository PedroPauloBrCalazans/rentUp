import { EspecificacoesRepository } from "../../repositories/implementations/EspecificacoesRepository";
import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase";
import { CreateEspecificacaoController } from "./createEspecificacaoController";

const especificacoesRepository = new EspecificacoesRepository();
const createEspecificacaoUseCase = new CreateEspecificacaoUseCase(especificacoesRepository);
const createEspecificacaoController = new CreateEspecificacaoController(createEspecificacaoUseCase);

export {createEspecificacaoController};