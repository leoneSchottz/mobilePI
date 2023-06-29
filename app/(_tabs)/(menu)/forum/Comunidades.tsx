import { Dimensions, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAllChaptersAssunto } from '../../../../core/services/chapter/ChapterAssuntoService'
import { ChapterAssunto } from '../../../../models/ChapterAssunto';
import { ChapterTag } from '../../../../models/ChapterTag';
import { getAllChapterTags } from '../../../../core/services/chapter/ChapterTagService';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('screen')
const Comunidades = () => {

  const { chaptersAssunto } = getAllChaptersAssunto();
  const { chapterTags } = getAllChapterTags();

  const { push } = useRouter()

  return (
    <View style={styles.container}>
      {(chapterTags && chaptersAssunto) &&
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.Buttoncontainer}>
              <View style={[styles.askButtoncontainer, Platform.OS === "android" ? styles.shadowAndroid : styles.shadowIos]}>
                <TouchableOpacity onPress={() => push('/forum/NovaPergunta')}>
                  <Text>Nova Pergunta</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TagsCard tags={chapterTags}/>
          </>
        }
        data={chaptersAssunto}
        renderItem={({item}) => <TopicoCard {...item}/>}
        keyExtractor={(item) => (item.id.toString())}
      />}
    </View>
  )
}


const TopicoCard = (topico: ChapterAssunto) => {

  const { push } = useRouter()
  return (
    <View style={styles.topicosContainer}>
      <TouchableOpacity onPress={() => push(`/forum/${topico.id}`)}>
        <View style={styles.cardContainer}>
          <Text numberOfLines={2} style={styles.cardTitle}>{topico.descricao}</Text>
          <Text>{topico.chapter.nome}</Text>
          <Text>{topico.usuario.nomeCompleto}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

type tagsCardProp = {
  tags: ChapterTag[]
}
const TagsCard = ({tags} : tagsCardProp) => {
  return (
    <View style={styles.TagsCardContainer}>
      <FlatList
        data={tags}
        renderItem={({item}) => 
          (
            <>
              <TouchableOpacity style={styles.tagButton}>
                <Text style={styles.tagName}>{item.descricao}</Text>
              </TouchableOpacity>
            </>
          )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Comunidades

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  topicosContainer:{
    alignItems: 'center',
  },
  cardContainer:{
    margin: 5,
    width: width * 0.9,
    padding: width * 0.03,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  cardTitle: {
    fontWeight: '600'
  },
  TagsCardContainer: {
    flex:1,
    padding: 20,
  },
  tagButton: {
    backgroundColor: '#02408d',
    borderRadius: 10,
    marginHorizontal: 3,
    padding:3
  },
  tagName: {
    color: '#fff',
    textTransform: 'lowercase'
  },
  Buttoncontainer: {
    width: width*0.4,
    height: width*0.15,
    justifyContent: 'center',
    padding: 10,
    alignSelf: 'center'
  },
  askButtoncontainer: {
    flex:1 ,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 5
  },
  shadowIos: {
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowAndroid: {
    elevation: 5
  },
})