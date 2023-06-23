import { View, Text  } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../../../contexts/AuthContext'


const Configuracoes = () => {

  const {onLogout} = useAuth()
  return (
    <View>
      <TouchableOpacity onPress={() => {onLogout()}}>
        <Text>Sair</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

export default Configuracoes
