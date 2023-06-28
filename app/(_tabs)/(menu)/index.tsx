import { Dimensions, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import MenuLink from '../../../components/Menu/MenuLink'


const {width} = Dimensions.get('window')

const Menu = () => {

  return (
    <View style={styles.container}>

      <MenuLink name='Comunidades' route='/forum'/>
      <MenuLink name='Badges' route='/badges'/>
      <MenuLink name='Senac Coin' route='/ucs/senacCoin'/>
      <MenuLink name='Perfil' route='/Configuracoes'/>
      <MenuLink name='Requerimento Web' route='/Configuracoes'/>
      <MenuLink name='Ajuda' route='/Configuracoes'/>
      <MenuLink name='Configurações' route='/Configuracoes'/>

    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    padding: width*0.1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },

})
