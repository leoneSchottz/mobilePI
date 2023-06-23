import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const Menu = () => {
  const router = useRouter()
  return (
    <View>
      <StatusBar style='auto'/>
      <Text>Menu</Text>
      <TouchableOpacity onPress={() => { router.push('/forum')} }>
        <Text>Fórum</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { router.push('/mensagens')} }>
        <Text>Mensagens</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { router.push('/Configuracoes')} }>
        <Text>Configurações</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

//const styles = StyleSheet.create({})
