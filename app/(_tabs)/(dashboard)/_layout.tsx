import { Stack } from 'expo-router'

export default () => {
  return (
  <Stack screenOptions={{ headerShown: false, presentation: 'fullScreenModal' }}>
    <Stack.Screen name='index'/>
    <Stack.Screen name='senacCoin'/>
  </Stack>
  )
}
