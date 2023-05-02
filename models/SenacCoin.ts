import { Usuario } from './Usuario';

export type SenacCoin = {
    id:	number
    saldo:	number
    status:	number
    usuarioId: string
    usuario:	Usuario
}