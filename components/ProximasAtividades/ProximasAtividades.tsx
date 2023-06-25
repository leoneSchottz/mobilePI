import { Feather, Entypo } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import Moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getAllAtividades } from '../../core/services/ativade/AtividadeService';

const { width } = Dimensions.get("window");

const ProximasAtividades = () => {
  Moment.locale('pt-br');
  const router = useRouter();
  const { atividades } = getAllAtividades();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push(`/${item.id}`)} style={styles.container}>
      <View style={styles.start}>
        <View>
          <Feather
            name="book-open"
            color="orange"
            size={30}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Término:</Text>
          <Text style={styles.title}>{Moment(item.dataFim).format('LLLL')}</Text>
          <Text style={styles.text}>{item.descricao}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.headerAtividadesPendentes}>
        <HeaderProximasAtividades />
        <Link href={'/atividades/atividades'} style={{backgroundColor: '#235395', padding: 5, borderRadius: 10}}> 
          <Entypo name="list" size={30} color="orange" />
        </Link>
      </View>
      <View style={styles.atividadesDashboard}>
        <FlatList
          data={atividades}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          snapToAlignment="start"
        />
      </View>
    </View>
  );
};

export default ProximasAtividades;

const styles = StyleSheet.create({
  headerAtividadesPendentes: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  atividadesDashboard: {
    paddingTop: 1,
    paddingBottom: 1,
  },
  container: {
    // backgroundColor: "#205395",
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    flexDirection: "column",
    // marginBottom: 4,
    marginTop: 10,
    margin: 10,
    paddingTop: 12,
    borderRadius: 6,
    alignSelf: "center",
    height: width * 0.42,
    width: width/1.2,
    elevation: 10,
  },
  title:{
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    // color: "#ffffff",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    // fontSize: 15,
    // fontWeight: 'bold'
  },
  start: {
    justifyContent: "space-between",
    alignItems: 'flex-start',
    flexDirection: "row",
    width: 320,
    marginHorizontal: 10,
  },
  cardImage: {
    width: 30,
    height: 30,
    marginRight: 15,
    elevation: 10,
  },
  content: {
    justifyContent: "center",
    flex: 2,
  },
});

const HeaderProximasAtividades = () => {
  return (
    <Text
      style={{
        fontSize: 28,
        fontWeight: "600",
        letterSpacing: -0.5,
      }}
    >
      Atividades Pendentes
    </Text>
  );
};

