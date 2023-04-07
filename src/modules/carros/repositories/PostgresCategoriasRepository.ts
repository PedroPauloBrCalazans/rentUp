import { Categoria } from "../model/categoria";
import { ICategoriasRepository, ICreateCategoriaDTO } from "./ICategoriasRepository";


class PostgresCategoriasRepository implements ICategoriasRepository {
    verificarCategoriaDuplicada(nome: string): Categoria {
        throw new Error("Method not implemented.");
    }
    listCategoria(): Categoria[] {
        throw new Error("Method not implemented.");
    }
    createCategoria({ nome, descricao }: ICreateCategoriaDTO): void {
        throw new Error("Method not implemented.");
    }

}

export { PostgresCategoriasRepository }