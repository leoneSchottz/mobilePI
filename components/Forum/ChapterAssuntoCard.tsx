import { Alert, Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ChapterAssunto } from '../../models/ChapterAssunto'
import { useRouter } from 'expo-router'
import Moment from 'moment';
import 'moment/locale/pt-br';
const { width } = Dimensions.get('screen')
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { deleteChapterAssunto } from '../../core/services/chapter/ChapterAssuntoService';

type TopicoProps = {
  topico: ChapterAssunto,
  usuarioId: string,
  usuarioRole: string
}

const ChapterAssuntoCard = ({topico, usuarioId, usuarioRole}: TopicoProps) => {
  const { push, replace } = useRouter()

  const showConfirmDeleteDialog = (id: string | number) => {
    return Alert.alert(
      "Remover pergunta",
      "Tem certeza que quer remover essa pergunta?",
      [
        {
          text: "Sim",
          onPress: async () => {
            const response = await deleteChapterAssunto(id)
            if( response.response.status == 200 ) {
              replace('forum/Comunidades')
            }
          },
        },
        {
          text: "Não",
        },
      ]
    );
  };

  return (
    <View style={styles.topicosContainer}>
      <TouchableOpacity onPress={() => push(`/forum/${topico.id}`)}>
        <View style={styles.cardContainer}>
          <View  style={styles.cardHeaderContainer}>
            <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
              <View style={{borderRadius: 50, backgroundColor: 'gray', width: 18, alignItems:'center', justifyContent:'center', paddingBottom: 2}}>
                <Text style={{color: 'white'}}>{topico.usuario.nomeCompleto[0].toLowerCase()}</Text>
              </View>
              <View>
              <Text style={styles.cardHeaderInfo}>{topico.chapter.nome}</Text>
              <Text style={styles.cardHeaderInfo}>{topico.usuario.nomeCompleto} - {Moment(topico.dataCadastro).startOf('minute').fromNow()}</Text>
              </View>
            </View>
            <Text numberOfLines={2} style={styles.cardTitle}>{topico.titulo}</Text>
          </View>
          <Text numberOfLines={2} style={styles.cardDescription}>{topico.descricao}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <View  style={styles.cardIconsContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="heart-outline" size={20} color="black" />
              <Text>5</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="eye-outline" size={20} color="black" />
              <Text>{topico.contadorVisualizacao}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="chatbox-ellipses-outline" size={20} color="black" />
              <Text>{topico.totalComentarios}</Text>
            </View>
          </View>
            {(usuarioId === topico.usuarioId || usuarioRole === 'Administrador') &&
              <>
              <TouchableOpacity onPress={() => console.log("opcoes: editar ou deletar")}>
                <View>
                <MaterialCommunityIcons name="dots-horizontal" size={20} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => showConfirmDeleteDialog(topico.id)}>
                <View>
                <AntDesign name="delete" size={20} color="red" />
                </View>
              </TouchableOpacity>
              </>
            }
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}



export default ChapterAssuntoCard

const styles = StyleSheet.create({
  topicosContainer:{
    alignItems: 'center',
  },
  cardContainer:{
    margin: 5,
    width: width * 0.9,
    padding: width * 0.03,
    backgroundColor: '#fff',
    borderRadius: 15,
    gap: 5,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5
      }
    })
  },
  cardHeaderContainer: {
    gap: 5
  },

  cardHeaderInfo: {
    textTransform: 'capitalize', color: 'gray', fontSize: 12
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 18
  },
  cardDescription: {
    marginVertical: 5,
    color: 'black',
  },
  cardIconsContainer: {
    flex: 1,
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3
  }
})