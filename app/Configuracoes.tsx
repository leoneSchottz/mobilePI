import { View, Text  } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Configuracoes = () => {
  return (
    <SafeAreaView>
      <Text>Configuracoes</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Configuracoes
