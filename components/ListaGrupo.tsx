import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Grupo } from '../models/Grupo'
import { ProgressBar } from 'react-native-paper'
import { Link, useRouter } from 'expo-router'

const ListaGrupo = (grupo: Grupo) => {
  const router = useRouter()

  return (
    <View style={styles.mainCardContainer} >
        <TouchableOpacity onPress={() => router.push(`/ucs/${grupo.id}`)}>

          <View style={styles.cardContainer}>
            <Image
              style={{height:50, width: 50, borderRadius: 50}}
              resizeMode='contain'
              source={
                require('../assets/images/UCimage.png')
              } 
              alt="image"
            />
            <View style={styles.cardInfoContainer}>
                <Text style={styles.cardTitle} numberOfLines={1} adjustsFontSizeToFit={true}>
                  {grupo.unidadeCurricular.nomeCurto}
                </Text>
                <ProgressBar progress={parseInt(grupo.frequencia)/100} color='blue'/>
                <Text style={styles.cardInfo}>
                  Frequência: { grupo.frequencia }%
                </Text>
            </View>
          </View>

        </TouchableOpacity>
      </View>
  )
}

export default ListaGrupo

const styles = StyleSheet.create({
  mainCardContainer: {
  },
  cardContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    flexDirection: 'row'
  },
  cardInfoContainer :{
    flex:1,
    marginLeft: 10,
    justifyContent: 'space-around'
  },
  cardTitle: {
    fontWeight:'400', fontSize: 18, textTransform: 'capitalize', marginBottom: 5,
  },
  cardInfo: {
    marginTop: 5,
    fontSize: 15
  },
})