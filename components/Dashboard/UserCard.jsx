import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import { Card } from 'react-native-elements'

const UserCard = props => {
  const navigation = useNavigation()
  var user = props.user
  var senacCoin = props.senacCoin
  var level = props.level
  return (
    <Card containerStyle={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: 'data:image/png;base64,' + user.foto }}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.nomeCompleto}</Text>
          <Text style={styles.infoText}>
            Senac Coins: <Text style={styles.infoValue}>{senacCoin.saldo}</Text>
          </Text>
          <Text style={styles.infoText}>
            Nível: <Text style={styles.infoValue}>{level}</Text>
          </Text>
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004A8D',
    borderRadius: 18
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  userInfo: {
    marginLeft: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  infoText: {
    color: '#fff',
    fontSize: 16
  },
  infoValue: {
    fontWeight: 'bold',
    color: '#F7941D'
  }
})

export default UserCard
