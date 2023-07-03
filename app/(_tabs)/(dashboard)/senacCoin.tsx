import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { API } from '../../../http/API';
import HeaderSenacCoin from '../../../components/headerSenacCoin';
import CardSenacCoin from '../../../components/Cards/cardSenacCoin';
import { SenacCoinMovimentacao } from '../../../models/SenacCoinMovimentacao';
import { useAuth } from '../../../contexts/AuthContext';


export default function SenacCoin() {
  const [movimentacoes, setMovimentacoes] = useState<SenacCoinMovimentacao[]>([]);

  const idUsuario = useAuth().authState.userData.usuarioId
  useEffect(() => {
    async function getMovimentacaoSenacCoin() {
        const {data} = await API.get<SenacCoinMovimentacao[]>(`SenacCoinMovimentacao/FilterByUsuarioId/${idUsuario}`);
        setMovimentacoes(data);
    }

    getMovimentacaoSenacCoin();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {movimentacoes &&
      <>
        <HeaderSenacCoin saldo={movimentacoes[0]?.senacCoin?.saldo} />
        <FlatList
          numColumns={1}
          data={movimentacoes}
          renderItem={({ item }) => <CardSenacCoin key={item.id} {...item} />}
        />
      </>
      }
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
