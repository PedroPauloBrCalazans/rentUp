import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";

//array para todas as informações da categorias
interface IImportCategoria {
    nome: string;
    descricao: string;
}

class ImportCategoriaUseCase {
    constructor(private categoriasRepository: ICategoriasRepository) {}

    loadCategorias(file: Express.Multer.File): Promise<IImportCategoria[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categorias: IImportCategoria[] = [];
    
            const parseFile = csvParse();
    
            stream.pipe(parseFile);
    
            parseFile.on("data", async (line) => {
                const [nome, descricao] = line
                categorias.push({
                    nome,
                    descricao,
                });
            })
            .on("end", () => {
                resolve(categorias);
            })
            .on("error", (err) => {
                reject(err);
            });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categorias = await this.loadCategorias(file);
        
        categorias.map(async (categoria) => {
            const { nome, descricao } = categoria;

            const existeCategoria = this.categoriasRepository.verificarCategoriaDuplicada(nome);

            if(!existeCategoria) {
                this.categoriasRepository.createCategoria({
                    nome,
                    descricao,
                });
            }
         });
    }
}

export { ImportCategoriaUseCase };