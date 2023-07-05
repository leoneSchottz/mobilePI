import { Oferta } from "./Oferta"
import { UnidadeCurricular } from "./UnidadeCurricular"

export type Modulo = {
  id:	number
  descricao: string
  cargaHoraria:	number
  ofertaId:	number
  oferta:	Oferta
  unidadesCurriculares: UnidadeCurricular[]
}