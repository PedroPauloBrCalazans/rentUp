import { Categoria } from "../model/categoria";

interface ICreateCategoriaDTO {
    nome: string;
    descricao: string;
}

interface ICategoriasRepository {
    verificarCategoriaDuplicada(nome: string): Categoria;
    listCategoria(): Categoria[];
    createCategoria({ nome, descricao }: ICreateCategoriaDTO): void;
}

export { ICategoriasRepository, ICreateCategoriaDTO };