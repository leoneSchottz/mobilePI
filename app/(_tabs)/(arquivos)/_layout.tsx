import { Stack } from 'expo-router'
import { Button } from 'react-native'
import { event } from 'react-native-reanimated'
import listaRecursos from '.'

export default () => {
  return (
    <Stack screenOptions={{
      // headerSearchBarOptions: { placeholder: "Pesquisar" },
      headerShown: false,
      // headerTitle: "Arquivos",
      // headerTitleStyle: { fontSize: 20 },
      // headerSearchBarOptions: { placeholder: "Pesquisar", textColor: "white", tintColor: "black", hintTextColor: "white", hideWhenScrolling: true, barTintColor: "#2563EA" , onChangeText(event) { listaRecursos} },
    }} />
  )
}
