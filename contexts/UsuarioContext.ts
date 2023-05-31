import { createContext } from 'react'
import { Usuario } from '../models/Usuario'

export const UsarioContext = createContext<Usuario>({ 
    id:	undefined,
    userName: undefined,
    normalizedUserName:	undefined,
    normalizedEmail: undefined,
    emailConfirmed:	undefined,
    passwordHash: undefined,
    securityStamp: undefined,
    concurrencyStamp: undefined,
    phoneNumber: undefined,
    phoneNumberConfirmed: undefined,
    twoFactorEnabled: undefined,
    lockoutEnd: undefined,
    lockoutEnabled:	undefined,
    accessFailedCount: undefined,
    cpf: undefined,
    foto: undefined,
    nomeCompleto: undefined,
    apelido: undefined,
    email: undefined,
    dataNascimento:	undefined,
    telefone: undefined,
    dataCadastro: undefined,
    status:	1,
    senacCoin: undefined
})