import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

const UCList = ({ ucs }) => {
  const renderItem = ({ item }) => (
    <ScrollView>
      <ListItem bottomDivider>
        <Icon name="book" type="font-awesome" color="#517fa4" />
        <ListItem.Content>
          <ListItem.Title>{item.unidadeCurricular.nome}</ListItem.Title>
          <ListItem.Subtitle>
            Situação de aprendizagem mais recente: {item.situacaoAprendizagem}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </ScrollView>
  )

  return (
    <View>
      <FlatList
        data={ucs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default UCList
