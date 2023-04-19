export type Usuario = {
  id:	string
  userName:	string
  normalizedUserName:	string
  normalizedEmail:	string
  emailConfirmed:	boolean
  passwordHash:	string
  securityStamp:	string
  concurrencyStamp:	string
  phoneNumber:	string
  phoneNumberConfirmed:	boolean
  twoFactorEnabled:	boolean
  lockoutEnd:	string
  lockoutEnabled:	boolean
  accessFailedCount:	number
  cpf:	string
  foto:	string
  nomeCompleto:	string
  apelido:	string
  email:	string
  dataNascimento:	string
  telefone:	string
  dataCadastro:	string
  status:	number
 // senacCoin:	SenacCoin
}
