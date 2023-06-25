import { SituacaoAprendizagem } from "./SituacaoAprendizagem";

export class Atividade {
    id: number = 0;
    descricao: string = "";
    // dataInicio: Date = new Date();
    dataInicio: string = "";
    duracao: number = 0;
    // dataFim: Date = new Date();
    dataFim: string = "";
    ordem: number = 0;
    status: number = 0;
    situacaoAprendizagem: SituacaoAprendizagem;
}
