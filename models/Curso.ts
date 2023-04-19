import { CursoTipo } from "./CursoTipo"
import { Oferta } from "./Oferta"


export type Curso = {
  id:	number
  nome:	string
  codigo:	string
  horas:	number
  cursoTipoId:	number
  cursoTipo:	CursoTipo
  status:	number
  ofertas: Oferta[]
  }