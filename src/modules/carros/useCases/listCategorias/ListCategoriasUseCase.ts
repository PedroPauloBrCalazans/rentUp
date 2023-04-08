import { Categoria } from "../../model/categoria";
import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";


class ListCategoriasUseCase {
    constructor(private categoriasRepository: ICategoriasRepository) {}

    execute(): Categoria[] {
        const categorias = this.categoriasRepository.listCategoria();
        
        return categorias;
    }
}

export {ListCategoriasUseCase};