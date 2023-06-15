import { Drawer } from 'expo-router/drawer'
import { AuthContext } from '../contexts/AuthContext'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { UsarioContext } from '../contexts/UsuarioContext'
import { getUsuarioByUsuarioId } from '../core/services/UsuarioService'
import { useEffect } from 'react'
import { Text, View } from 'react-native'


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const {usuario} = getUsuarioByUsuarioId("3b700ecc-cec9-4be4-8c00-48bced543861");
  const UsuarioLogado : boolean = true;
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


  //3b700ecc-cec9-4be4-8c00-48bced543861
  return (
    <>
    {UsuarioLogado 
    ? <UsarioContext.Provider value={usuario}>
        <AuthContext.Provider value="3b700ecc-cec9-4be4-8c00-48bced543861">
          <StatusBar style="light" />
          <Drawer screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="(_tabs)" options={{ drawerLabel: 'Home' }} />
            <Drawer.Screen name="(forum)" options={{ drawerLabel: 'Fórum' }} />
            <Drawer.Screen name="(mensagens)" options={{ drawerLabel: 'Mensagens' }} />
            <Drawer.Screen name="Configuracoes" options={{ drawerLabel: 'Configurações' }}/>
          </Drawer>
        </AuthContext.Provider>
      </UsarioContext.Provider>
    : <View><Text>Faça o login</Text></View>}
    </>
  )
}