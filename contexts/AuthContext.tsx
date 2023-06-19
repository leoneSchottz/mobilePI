import { createContext, useContext, useState } from 'react'

interface AuthProps {
  authState?: {token: string | null, authenticated: boolean | null},
  // onLogin?: (cpf: string, senha: string) => Promise<any>,
  // onLogout?: () => Promise<any>,
}

export const AuthContext = createContext<AuthProps>({})

export function useAuth() {
  return useContext(AuthContext);
}

const login = () => {

}

const logout = () => {

}


export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState<{
    token: string | null,
    authenticated: boolean | null
  }>({
    token: null,
    authenticated: null
  })

  return (
    <AuthContext.Provider
    value={{
      authState,
      // onLogin: login,
      // onLogout: logout,
      // user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}