import { Categoria } from "../../model/categoria";
import { ICategoriasRepository, ICreateCategoriaDTO } from "../ICategoriasRepository";

class CategoriasRepository implements ICategoriasRepository {

    private categorias: Categoria[];

    private static INTANCE: CategoriasRepository;

    private constructor() { 
        this.categorias = [];
    } //deixando como private, não vamos querer que o new categoriasRepository seja possivel, somente essa class vai poder chamar o constuctor

    public static getInstance(): CategoriasRepository {
        if(!CategoriasRepository.INTANCE) {
            CategoriasRepository.INTANCE = new CategoriasRepository();
        }
        return CategoriasRepository.INTANCE; // se já tiver criada
    } //esse metodo que sera o responsavel por criar uma instacia, ou repassar uma instacia já existente

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