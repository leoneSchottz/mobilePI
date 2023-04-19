import { Curso } from "./Curso"
import { Modulo } from "./Modulo"



export type Oferta = {
  id:	number
  descricao:	string

  codigo:	string

  inicioOperacao:	string
  status:	number

  cursoId:	number
  curso:	Curso
  modulos: Modulo[]
  }