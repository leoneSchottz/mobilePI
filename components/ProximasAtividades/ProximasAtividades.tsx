import { Feather, Entypo } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import Moment from 'moment';
import 'moment/locale/pt-br';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants'
import { getAllAtividades } from '../../core/services/ativade/AtividadeService';
import { Atividade } from '../../models/Atividade';

const  { width } = Dimensions.get('window');
const ProximasAtividades = () => {

  const router = useRouter();
  const { atividades } = getAllAtividades();

  const RenderAtividade = ( item: Atividade) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push(`/atividades/${item.id}`)}>
        <View style={styles.cardContainer}>
          <View style={styles.cardIconContainer}>
            <Feather
              name="book-open"
              color="orange"
              size={30}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardContentContainer}>
            <Text style={styles.title}>Término:</Text>
            <Text style={styles.title}>{Moment(item.dataFim).format('llll')}</Text>
            <Text style={styles.text}>{item.descricao}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={styles.headerAtividadesPendentes}>
        <Text style={styles.headerTitle}>
          Atividades Pendentes
        </Text>
        <Link href={'/atividades'} style={{backgroundColor: '#235395', padding: 5, borderRadius: 10}}>
          <Entypo name="list" size={30} color="orange" />
        </Link>
      </View>
      <View>
        <FlatList
          data={atividades}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RenderAtividade {...item} />}
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
  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardContainer: {
    // backgroundColor: "#205395",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    height: width * 0.5,
    width: width,
    padding: 20,
    justifyContent: 'space-around',
    gap: 5

  },
  title:{
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    // color: "#ffffff",
    color: "#000000",
    fontSize: 16,
    // fontSize: 15,
    // fontWeight: 'bold'
  },
  cardIconContainer: {
    width: '10%',
    alignItems: 'center'
  },
  cardImage: {

  },
  cardContentContainer: {
    flex : 1
  },
});


