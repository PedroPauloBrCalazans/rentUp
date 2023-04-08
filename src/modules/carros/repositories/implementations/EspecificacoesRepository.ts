import { Especificacao } from "../../model/Especificacao";
import { IEspecificacoesRepository, ICreateEspecificacoesDTO } from "../IEspecificacoesRepository";

class EspecificacoesRepository implements IEspecificacoesRepository {
    private especificacoes: Especificacao[];

    constructor() {
        this.especificacoes = []
    }

    create({ nome, descricao }: ICreateEspecificacoesDTO): void {
        const especificacao = new Especificacao();

        Object.assign(especificacao, {
            nome,
            descricao,
            criado_em: new Date(),
        });

        this.especificacoes.push(especificacao);
    }

    verificarEspecificacaoDuplicada(nome: string): Especificacao {
        const especificacao = this.especificacoes.find(espe => espe.nome === nome);

        return especificacao;
    }
}

export { EspecificacoesRepository };