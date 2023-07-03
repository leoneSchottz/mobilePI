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
    <TouchableOpacity onPress={() => push(route)}>
      <View style={styles.container}>
        <View style={[styles.linkContainer, Platform.OS === "android" ? styles.shadowAndroid : styles.shadowIos]}>
          <Text>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MenuLink

const styles = StyleSheet.create({
  container: {
    width: width*0.4,
    height: width*0.2,
    justifyContent: 'center',
    padding: 10
  },
  linkContainer: {
    flex:1 ,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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