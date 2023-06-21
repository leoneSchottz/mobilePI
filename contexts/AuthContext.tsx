import { createContext, useContext, useEffect, useState } from 'react'
import { API } from '../http/API';
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

interface AuthResponse {
  authenticated: boolean | null,
  token: string | null,
  userData: UserData
}

interface UserData {
  usuarioId: string | null,
  usuarioNome: string | null,
  estudanteId: string | null,
  usuarioRole: string | null
}

interface AuthProps {
  authState?: AuthResponse,
  onLogin?: (cpf: string, senha: string) => Promise<any>,
  onLogout?: () => Promise<any>,
}

const TOKEN_KEY: string = 'my-jwt'

const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState<AuthResponse>({
    authenticated: null,
    token: null,
    userData: null
  })

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      if (token) {
        defineUserData(token)
      }
    }
    checkToken();
  },[])

  const login = async (cpf: string, senha: string) => {
    try {
      const { data } = await API.post('Usuario/LogarUsuario/', {cpf, senha});
      defineUserData(data.tokenUsuarioLogado)
      await SecureStore.setItemAsync(TOKEN_KEY, data.tokenUsuarioLogado)

    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    setAuthState({
      authenticated: null,
      token: null,
      userData: null
    })
  }

  const defineUserData = async (token: string) => {

    API.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    const decodedTokenPayload = jwt_decode(token)
    const decodedUsuarioId = decodedTokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    const decodedRole = decodedTokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    const decodedNomeUsuario = decodedTokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname']
    const decodedEstudanteId = decodedTokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn']

    setAuthState({
      authenticated: true,
      token: token,
      userData: {
        estudanteId: decodedEstudanteId,
        usuarioId: decodedUsuarioId,
        usuarioNome: decodedNomeUsuario,
        usuarioRole: decodedRole
      }
    })
  }

  return (
    <AuthContext.Provider value={{authState, onLogin: login, onLogout: logout,}}>
      {children}
    </AuthContext.Provider>
  )
}