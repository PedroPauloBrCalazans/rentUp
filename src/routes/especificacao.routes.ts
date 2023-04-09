import { Router } from "express";

import { createEspecificacaoController } from "../modules/carros/useCases/createEspecificacao";

const especificacoesRoutes = Router();

especificacoesRoutes.post("/", (request, response) => {
    return createEspecificacaoController.handle(request, response);
});

export { especificacoesRoutes };