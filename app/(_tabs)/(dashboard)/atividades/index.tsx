import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CardAtividade } from "../../../../components/Cards/CardAtividade";
import { Atividade } from "../../../../models/Atividade";
import { API } from "../../../../http/API";

export default function Atividades(){
  const route = useRouter();
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const params = useLocalSearchParams();
  const { id, descricao } = useLocalSearchParams();
  
  useEffect(() => {
    API.get(`Atividade`).then(({data}) => {
      setAtividades(data)
    })
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={atividades}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <CardAtividade data={item} />}
      />
    </View>
  );
};

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
