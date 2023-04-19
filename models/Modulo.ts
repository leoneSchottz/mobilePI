import { Oferta } from "./Oferta"

export type Modulo = {
  id:	number
  descricao: string
  cargaHoraria:	number
  ofertaId:	number
  oferta:	Oferta
}