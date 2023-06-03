import { Drawer } from 'expo-router/drawer'
import { AuthContext } from '../contexts/AuthContext'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { UsarioContext } from '../contexts/UsuarioContext'
import { getUsuarioByUsuarioId } from '../core/services/UsuarioService'

const RootLayout = () => {
  const {usuario} = getUsuarioByUsuarioId("3b700ecc-cec9-4be4-8c00-48bced543861");
  
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf')
  })

  if (!fontsLoaded) {
    return undefined
  }
  //3b700ecc-cec9-4be4-8c00-48bced543861
  return (
    <UsarioContext.Provider value={usuario}>
      <AuthContext.Provider value="3b700ecc-cec9-4be4-8c00-48bced543861">
        <StatusBar style="auto" />
        <Drawer screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="(_tabs)" options={{ drawerLabel: 'Home' }} />
          <Drawer.Screen name="Forum" options={{ drawerLabel: 'Fórum' }} />
          <Drawer.Screen name="Configuracoes" options={{ drawerLabel: 'Configurações' }}/>
        </Drawer>
      </AuthContext.Provider>
    </UsarioContext.Provider>
  )
}
export default RootLayout