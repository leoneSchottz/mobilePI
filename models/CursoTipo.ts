import { Curso } from "./Curso"

export type CursoTipo = {
  id:	number
  descricao:	string
  
  status:	number
  cursos: Curso[]
  }