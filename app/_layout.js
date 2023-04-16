import { Drawer } from 'expo-router/drawer'
import { AuthContext } from '../contexts/AuthContext'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf')
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (
    <AuthContext.Provider value="3b700ecc-cec9-4be4-8c00-48bced543861">
      <StatusBar style="auto" />
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="(_tabs)" options={{ drawerLabel: 'Home' }} />
        <Drawer.Screen name="(forum)" options={{ drawerLabel: 'Fórum' }} />
        <Drawer.Screen
          name="(configuracoes)"
          options={{ drawerLabel: 'Configurações' }}
        />
      </Drawer>
    </AuthContext.Provider>
  )
}
