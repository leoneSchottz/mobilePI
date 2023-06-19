import { createContext, useContext, useState } from 'react'
import { API } from '../http/API';

interface AuthProps {
  authState?: {token: string | null, authenticated: boolean | null},
  onLogin?: (cpf: string, senha: string) => Promise<any>,
  onLogout?: () => Promise<any>,
}

export const AuthContext = createContext<AuthProps>({})

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState<{
    token: string | null,
    authenticated: boolean | null
  }>({
    token: null,
    authenticated: null
  })

  const login = async (cpf: string, senha: string) => {
    const { data } = await API.post('Usuario/LogarUsuario', {cpf, senha});
    setAuthState({ token: data.token, authenticated: true})
  }

  const logout = async () => {
    setAuthState({token: null, authenticated: false})
  }

  return (
    <AuthContext.Provider
    value={{
      authState,
      onLogin: login,
      onLogout: logout,
      // user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}