import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router/src/navigationStore'
import { getChaptersAssuntoById } from '../../../../core/services/chapter/ChapterAssuntoService'
import { getChapterAssuntoComentariosFilterByChapterAssuntoId } from '../../../../core/services/chapter/ChapterAssuntoComentarioService'

const ChapterAssuntoDetails = () => {

  type ChapterAssuntoParam = {
    id: string
  }

  const { id } = useLocalSearchParams<ChapterAssuntoParam>()
  const { chapterAssunto } = getChaptersAssuntoById(id)
  const { chapterAssuntoComentarios } = getChapterAssuntoComentariosFilterByChapterAssuntoId(id)

  return (
    <View style={styles.container}>
      { (chapterAssunto && chapterAssuntoComentarios) &&
      <>
        <Text>{ chapterAssunto.descricao} por </Text>
        <Text>{ chapterAssunto.usuario.nomeCompleto }</Text>
        {chapterAssuntoComentarios.map((comentario) => (

            <Text key={comentario.id}>{comentario.texto} = id: {comentario.id} : por {comentario.usuario.nomeCompleto}</Text>

        ))}
      </>
      }
    </View>
  )
}

export default ChapterAssuntoDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})