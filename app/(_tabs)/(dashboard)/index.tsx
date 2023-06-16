import { View, Text, StyleSheet } from 'react-native'
import { FlashList } from '@shopify/flash-list';
import { getGruposByEstudanteIdByPeriodoIdWithFrequency } from '../../../core/services/GrupoService';
import ListaGrupo from '../../../components/ListaGrupo';
import ProfileScreen from '../../../components/Dashboard/ProfileScreen';
import Colors from '../../../common/constants/Colors';

export default function ListaUC() {

  const idPeriodo = 2;
  const idEstudante = 1;

  const {grupos, isLoaded} = getGruposByEstudanteIdByPeriodoIdWithFrequency(idEstudante, idPeriodo)

  return (
    <>
    {isLoaded
    ? <View style={styles.container}>
        <FlashList
          ListHeaderComponent={<HeaderCursos/>}
          data={grupos}
          estimatedItemSize={8}
          numColumns={1}
          renderItem = { ({item}) => <ListaGrupo {...item}/>}
          keyExtractor={(item) => item.id.toString()}
          />
        <ProfileScreen />
      </View>
    :<Text>Carregando..</Text>}
    </>
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