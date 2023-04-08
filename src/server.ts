import express, { request, response } from "express";
import { categoriasRoutes } from "./routes/categoria.routes";
import { especificacoesRoutes } from "./routes/especificacao.routes";

const app = express();

app.use(express.json());

app.use("/categorias", categoriasRoutes);
app.use("/especificacoes", especificacoesRoutes);


app.listen(7474, () => console.log("Subiu!"));