import express, { request, response } from "express";
import { categoriasRoutes } from "./routes/categoria.routes";

const app = express();

app.use(express.json());

app.use("/categorias", categoriasRoutes);


app.listen(3333, () => console.log("Subiu!"));