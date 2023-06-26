import { useLocalSearchParams, useRouter } from 'expo-router';
import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getAtividade } from '../../../../core/services/ativade/AtividadeService';

export default function Atividade({ navigation, route }) {
  type atividadeParam = {
    id: string;
  };
  moment.locale("pt-br");
  const idEstudante = 1;
  const router = useRouter();
  const { id } = useLocalSearchParams<atividadeParam>();
  const { atividade } = getAtividade(id);
  const descricao = atividade?.descricao;
  const dataInicio = atividade?.dataInicio;
  const dataFim = atividade?.dataFim;
  const titulo = atividade?.situacaoAprendizagem.titulo;

  return (
    <View style={styles.container}>
      <View style={styles.atividade}>
        <Text style={styles.text}>Situação de aprendizagem: </Text>
        <Text style={styles.textContent}>{titulo}</Text>
        <Text style={styles.text}>Atividade:</Text>
        <Text style={styles.textContent}>{descricao}</Text>
        <Text style={styles.text}>Início:</Text>
        <Text style={styles.textContent}>
          {moment(dataInicio).format("LLLL")}
        </Text>
        <Text style={styles.text}>Término:</Text>
        <Text style={styles.textContent}>{moment(dataFim).format("LLLL")}</Text>
        {/* <Box alignItems="center">
          <Button>Enviar</Button>
        </Box> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  atividade: {
    flexDirection: "column",
    margin: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    paddingTop: 0,
    elevation: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
  },
  textContent: {
    fontSize: 18,
  },
  botao: {},
});
