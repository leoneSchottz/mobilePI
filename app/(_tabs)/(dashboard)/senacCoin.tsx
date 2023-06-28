import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { API } from '../../../http/API';
import HeaderSenacCoin from '../../../components/headerSenacCoin';
import CardSenacCoin from '../../../components/Cards/cardSenacCoin';
import { SenacCoinMovimentacao } from '../../../models/SenacCoinMovimentacao';
import { useAuth } from '../../../contexts/AuthContext';


export default function SenacCoin() {
  const [movimentacoes, setMovimentacoes] = useState<SenacCoinMovimentacao[]>([]);

  const idUsuario = useAuth().authState.userData.usuarioId
  console.log(idUsuario)
  useEffect(() => {
    async function getSenacCoin() {
        const {data} = await API.get<SenacCoinMovimentacao[]>(`SenacCoinMovimentacao/FilterByUsuarioId/${idUsuario}`);

        setMovimentacoes(data);
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
        renderItem={({ item }) => <CardSenacCoin key={item.id} {...item} />}
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
