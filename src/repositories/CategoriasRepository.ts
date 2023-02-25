import { Categoria } from "../model/categoria";



interface ICreateCategoriaDTO {
    nome: string;
    descricao: string;
}

class CategoriasRepository {

    private categorias: Categoria[];

    constructor() {
        this.categorias = [];
    }

    createCategoria({ nome, descricao } : ICreateCategoriaDTO): void {
        const categoria = new Categoria();
    
        Object.assign(categoria, {
            nome,
            descricao,
            criado_em: new Date()
        });
    
        this.categorias.push(categoria);
    }

    listCategoria(): Categoria[] {
        return this.categorias;
    }

    verificarCategoriaDuplicada(nome: string): Categoria {
        const categoria = this.categorias.find(categoria => categoria.nome === nome);
        return categoria;
    }
}

export { CategoriasRepository }