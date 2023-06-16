import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

import { API } from '../../../http/API';
import HeaderSenacCoin from '../../../components/headerSenacCoin';
import CardSenacCoin from '../../../components/Cards/cardSenacCoin';

export default function SenacCoin() {
  const [movimentacoes, setMovimentacoes] = useState([]);
  useEffect(() => {
    async function getSenacCoin() {
        const response = await API.get('/SenacCoinMovimentacao');

        setMovimentacoes(response.data);
    }

    getSenacCoin();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderSenacCoin />
      <FlatList
        numColumns={1}
        data={movimentacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardSenacCoin data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
