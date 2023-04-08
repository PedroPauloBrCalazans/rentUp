import { Router, request, response } from "express";
import { EspecificacoesRepository } from "../modules/carros/repositories/implementations/EspecificacoesRepository";
import { CreateEspecificacaoService } from "../modules/carros/services/CreateEspecificacaoService";

const especificacoesRoutes = Router();

const especificacoesRepository = new EspecificacoesRepository();

especificacoesRoutes.post("/", (request, response) => {
    const { nome, descricao } = request.body;
    const createEspecificacaoService = new CreateEspecificacaoService(especificacoesRepository);

    createEspecificacaoService.execute({ nome, descricao });

    return response.status(201).send();
});

export { especificacoesRoutes };