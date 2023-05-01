import Periodo from "./Periodo";
import Professor from "./Professor";
import Turno from "./Turno";
import { UnidadeCurricular } from "./UnidadeCurricular";


export type Grupo = {
  id: number;
  descricao: string
  dataInicio: string
  dataFim: string
  status: number
  turnoId: number
  turno: Turno
  unidadeCurricularId: number
  unidadeCurricular: UnidadeCurricular
  periodoId: number
  periodo: Periodo
  professorI: number
  professor: Professor
  frequencia?: string

}