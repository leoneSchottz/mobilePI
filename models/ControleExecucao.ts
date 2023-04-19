import { Encontro } from "./Encontro"
import { Participante } from "./Participante"
import { RegistroEncontroTipo } from "./RegistroEncontroTipo"



export type ControleExecucao = {
    id:	number
    data:	string
    status:	number
    registroEncontroTipoId:	number
    registroEncontroTipo:	RegistroEncontroTipo
    encontroId:	number
    encontro:	Encontro
    participanteId:	number
    participante:	Participante
}