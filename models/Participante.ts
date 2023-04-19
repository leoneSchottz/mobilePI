import { Estudante } from './Estudante';
import { Grupo } from './Grupo';



export type Participante = {
  id:	number
  dataMatricula:	string
  status:	number
  grupoId:	number
  grupo:	Grupo
  estudanteId:	number
  estudante: Estudante
}