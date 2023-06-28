import { Stack } from "expo-router"

export default () => {
  return  (<Stack>
            <Stack.Screen name="index" options={{headerTitle: 'Menu'}}/>
            <Stack.Screen name="Configuracoes" options={{headerTitle: 'Configurações'}}/>
            <Stack.Screen name="forum" options={{headerTitle: 'Fórum'}}/>
          </Stack>)
}