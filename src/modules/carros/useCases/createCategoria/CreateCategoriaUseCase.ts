import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";

interface IRequest {
    nome: string;
    descricao: string;
}

class CreateCategoriaUseCase {
    constructor(private categoriasRepository: ICategoriasRepository) {}

    execute({ nome, descricao }: IRequest): void {
        const categoriaExiste = this.categoriasRepository.verificarCategoriaDuplicada(nome);

        if(categoriaExiste) {
            throw new Error("Categoria já existente!") 
        }
    
        this.categoriasRepository.createCategoria({ nome, descricao });
    }
}

export { CreateCategoriaUseCase };