import { Router } from "express";

import { especificacoesRoutes } from "./especificacao.routes";
import { categoriasRoutes } from "./categoria.routes";

const router = Router();

router.use("/categorias", categoriasRoutes);
router.use("/especificacoes", especificacoesRoutes);

export { router };