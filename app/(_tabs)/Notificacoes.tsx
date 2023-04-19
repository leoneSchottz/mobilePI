import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Notificacoes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}}
            />
          <View style={styles.info}>
            <Text style={{ alignSelf: 'center'}}>INFO</Text>
          </View>
        </View>

        <View>
          <Text >Introducao a programacao</Text>
          
        </View>
      </View>
    </View>

  )
}

export default Notificacoes


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgContainer:{ 
    height: '50%'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  card: {
    height: 200,
    width: 200,
    backgroundColor: 'orange',
    borderRadius: 12,
    overflow:'hidden'
  },
  info: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'red',
    height: 30,
    width: 100,
    justifyContent: 'center'
  }
})