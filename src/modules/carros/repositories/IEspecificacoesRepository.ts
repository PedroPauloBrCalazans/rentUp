import { Especificacao } from "../model/Especificacao";

interface ICreateEspecificacoesDTO {
    nome: string;
    descricao: string;
}

interface IEspecificacoesRepository { 
    create({ nome, descricao }: ICreateEspecificacoesDTO): void;
    verificarEspecificacaoDuplicada(nome: string): Especificacao
}

export { IEspecificacoesRepository, ICreateEspecificacoesDTO };