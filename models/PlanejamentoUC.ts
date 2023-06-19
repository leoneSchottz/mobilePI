import { Grupo } from "./Grupo";
import { SituacaoAprendizagem } from "./SituacaoAprendizagem";

export type PlanejamentoUC = {
  id:                    number;
  descricao:             string;
  status:                string;
  grupoId:               number;
  grupo:                 Grupo;
  situacaoAprendizagens?: SituacaoAprendizagem[];
}