import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

const Badges = ({ badges }) => {
  const lastThreeBadges = badges.slice(-3)

  return (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.title}>Últimas 3 Badges</Card.Title>
      <View style={styles.badgesContainer}>
        {lastThreeBadges.map(badge => (
          <View key={badge.id} style={styles.badge}>
            <Image
              style={styles.badgeImage}
              source={{ uri: 'data:image/png;base64,' + badge.imagem }}
            />
            <Text style={styles.badgeDescription}>{badge.descricao}</Text>
          </View>
        ))}
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#004A8D',
    borderRadius: 18,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  badge: {
    alignItems: 'center'
  },
  badgeImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  badgeDescription: {
    width: 100,
    marginTop: 5,
    textAlign: 'center',
    overflow: 'hidden',
    color: 'white'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Badges
