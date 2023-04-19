import Periodo from "./Periodo"
import { PeriodoDiaTipo } from "./PeriodoDiaTipo"

export type DiaLetivo = {
  id:	number
  dialetivo:	string
  dia:	number
  mes:	number
  ano:	number
  semana:	number
  status:	number
  periodoId:	number
  periodo:	Periodo
  periodoDiaTipoId:	number
  periodoDiaTipo:	PeriodoDiaTipo
  }