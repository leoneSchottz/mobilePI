import { DiaLetivo } from "./DiaLetivo"
import { Grupo } from "./Grupo"


export type Encontro = {
  id:	number
  observacao:	string
  horaInicio:	string
  horaFim:	string
  local:	string
  status:	number
  diaLetivoId:	number
  diaLetivo:	DiaLetivo
  grupoId:	number
  grupo:	Grupo
  encontroTipoId:	number
  encontroTipo:	EncontroTipo
  encontroStatus:	EncontroStatus
  }