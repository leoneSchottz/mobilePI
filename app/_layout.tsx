import { Drawer } from 'expo-router/drawer'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { UsarioContext } from '../contexts/UsuarioContext'
import { getUsuarioByUsuarioId } from '../core/services/UsuarioService'
import { useEffect } from 'react'


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {


  const [fontsLoaded, error] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf')
  })

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!fontsLoaded) {
    return undefined
  }

  const Layout = () => {
    const { authState } = useAuth();

    return (
          <Drawer screenOptions={{ headerShown: false }} >
            <Drawer.Screen name="(_tabs)" options={{ drawerLabel: 'Home' }} redirect={!authState.authenticated}/>
            <Drawer.Screen name="(forum)" options={{ drawerLabel: 'Fórum' }} redirect={!authState.authenticated}/>
            <Drawer.Screen name="(mensagens)" options={{ drawerLabel: 'Mensagens' }} redirect={!authState.authenticated}/>
            <Drawer.Screen name="Configuracoes" options={{ drawerLabel: 'Configurações'}} redirect={!authState.authenticated} />
            <Drawer.Screen name="Login" redirect={authState.authenticated}/>
          </Drawer>)
  }


  return (
    <AuthProvider>
      <StatusBar style="light" />
      <Layout/>
    </AuthProvider>
  )
}