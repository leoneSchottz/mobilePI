import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useEffect, useState } from "react";
import { FlashList } from '@shopify/flash-list';
import { Grupo } from "../../../models/Grupo";
import { getFrequenciaByEstudanteIdByPeriodoId } from '../../../core/services/FrequenciaService';
import { getAllGrupos, getGruposByEstudanteIdByPeriodoId } from '../../../core/services/GrupoService';
import ListaGrupo from '../../../components/ListaGrupo';
import { Header } from 'react-native/Libraries/NewAppScreen';
import ProfileScreen from '../../../components/Dashboard/ProfileScreen';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../../common/constants/Colors';

export default function ListaUC() {

  const idPeriodo = 2;
  const idEstudante = 1;
  const {frequencias} = getFrequenciaByEstudanteIdByPeriodoId(idEstudante,idPeriodo);
  //const {grupos} = getAllGrupos();
  const {grupos} = getGruposByEstudanteIdByPeriodoId(idEstudante, idPeriodo)
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    grupos.forEach(
      (g) => {
          var freq = frequencias.filter((f) =>(f.grupoId == g.id));
          if(freq.length != 0){
            g.frequencia = freq[0].frequencia;
            console.log(g.unidadeCurricular.nome + '   ' + freq[0].frequencia)
          }
          else {
            g.frequencia = '0'
          }
      }
    )
    setIsLoaded(true)
  },[grupos, frequencias])


  return (
    <View style={styles.container}>
      {isLoaded && <FlashList
        ListHeaderComponent={<HeaderCursos/>}
        data={grupos}
        estimatedItemSize={8}
        numColumns={1}
        renderItem = { ({item}) => <ListaGrupo {...item}/>}
        keyExtractor={(item) => item.id.toString()}
        />}
      <ProfileScreen />
    </View>
  )
}

  const HeaderCursos = () => {
    return (
      <Text style={{paddingHorizontal: 10, marginTop: 20, fontSize: 28, fontWeight: '600', letterSpacing: -0.5}}>Meus Cursos</Text>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background
  },

})