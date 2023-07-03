import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import * as Linking from 'expo-linking';

const RequerimentoWeb = () => {

  const openLink = () => {
    Linking.openURL('https://reqsenacrj.agilsist.com.br/loginestudante.aspx')
  }
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => openLink()}>
        <Text style={styles.link}>Acesse a página do Requerimento Web</Text>

      </TouchableOpacity>
    </View>
  )
}

export default RequerimentoWeb

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    alignItems: 'center',
  },
  link: {
    color: 'blue',
    fontSize: 16
  }
})