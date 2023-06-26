import { Stack } from 'expo-router'

export default () => {
  return (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='index'/>
    <Stack.Screen name='senacCoin'/>
    <Stack.Screen name='ucs' options={{presentation: 'fullScreenModal'}}/>
    <Stack.Screen name='atividades'/>
  </Stack>
  )
}
