import { Oferta } from "./Oferta"
import { Usuario } from "./Usuario"



export type Estudante = {
  id:	number
  dataCadastro:	string
  dataTrancamento:	string
  dataFormatura:	string
  status:	number
  usuarioId:	string
  usuario:	Usuario
  ofertaId:	number
  oferta:	Oferta
  }