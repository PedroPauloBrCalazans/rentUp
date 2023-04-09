import { IEspecificacoesRepository } from "../../repositories/IEspecificacoesRepository";

interface IRequest {
    nome: string;
    descricao: string;
}

class CreateEspecificacaoUseCase {

    constructor(private especificacoesRepository: IEspecificacoesRepository) {}

    execute({ nome, descricao }: IRequest): void {
        const especificacaoExiste = this.especificacoesRepository.verificarEspecificacaoDuplicada(nome);

        if(especificacaoExiste) {
            throw new Error("Especidicação já existe!")
        }

        this.especificacoesRepository.create({
            nome,
            descricao,
        });
    }
}

export { CreateEspecificacaoUseCase };