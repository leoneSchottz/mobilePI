import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CardAtividade } from "../../../../components/Cards/CardAtividade";
import { Atividade } from "../../../../models/Atividade";
import { API } from "../../../../http/API";
import { getAllAtividades } from "../../../../core/services/ativade/AtividadeService";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import Moment from 'moment';

const { width } = Dimensions.get("window");

const ProximasAtividades = () => {
  Moment.locale('pt');
  const route = useRouter();
  const { atividades } = getAllAtividades();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.container}>
      <View style={styles.start}>
        <TouchableOpacity>
          <Feather
            name="book-open"
            color="orange"
            size={30}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>{Moment(item.dataFim).format('dddd')} - {Moment(item.hora).format('L')}
            , {Moment(item.horaInicio).format('LTS')}</Text>
          <Text style={styles.text}>{item.descricao}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <HeaderProximasAtividades />
      <View style={styles.atividadesDashboard}>
        <FlatList
          data={atividades}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(index) => index.toString()}
          renderItem={renderItem}
          snapToAlignment="start"
          // ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default ProximasAtividades;

const styles = StyleSheet.create({
  atividadesDashboard: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#205395",
  },
  container: {
    // backgroundColor: "#205395",
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    // marginBottom: 4,
    marginTop: 10,
    margin: 10,
    paddingTop: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    alignSelf: "center",
    height: 150,
    width: width/1.2,

  },
  title:{
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
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
        paddingHorizontal: 30,
        marginTop: 20,
        fontSize: 28,
        fontWeight: "600",
        letterSpacing: -0.5,
      }}
    >
      Atividades Pendentes
    </Text>
  );
};

const renderSeparator = () => (
  <View
    style={{
      backgroundColor: "red",
      height: 0.5,
    }}
  />
);
