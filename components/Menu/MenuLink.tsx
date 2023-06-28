import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

type menuLinksProps = {
  name: string,
  route: string
}

const {width} = Dimensions.get('window')

const MenuLink = ({name, route}: menuLinksProps) => {
  const {push} = useRouter()

  return(
    <View style={styles.container}>
      <View style={[styles.linkContainer, Platform.OS === "android" ? styles.shadowAndroid : styles.shadowIos]}>
        <TouchableOpacity onPress={() => push(route)}>
          <Text>{name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MenuLink

const styles = StyleSheet.create({
  container: {
    width: width*0.4,
    height: width*0.15,
    justifyContent: 'center',
    padding: 10
  },
  linkContainer: {
    flex:1 ,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 5
  },
  shadowIos: {
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowAndroid: {
    elevation: 5
  },
})