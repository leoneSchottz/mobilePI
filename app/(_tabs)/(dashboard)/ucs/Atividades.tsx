import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CardAtividade } from "../../../../components/Cards/CardAtividade";
import { Atividade } from "../../../../models/Atividade";
import { API } from "../../../../http/API";

const Atividades = () => {
  const route = useRouter();

  const [atividades, setAtividades] = useState<Atividade[]>([]);
  // const params = useLocalSearchParams();
  const { id, descricao } = useLocalSearchParams();
  
  useEffect(() => {
    // async function getAtividades() {
    //   try {
    //     const data: Atividade[] = await API.get(`Atividade`);
    //     setAtividades(data);
    //   } catch (err) {
    //     alert(err);
    //   }
    // }
    // getAtividades();
    API.get(`Atividade`).then(({data}) => {
      setAtividades(data)
    })
  }, []);

  const renderItem = ({ item }) => (
    <CardAtividade data={item} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={atividades}
        keyExtractor={(index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Atividades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: "center",
  },
});
