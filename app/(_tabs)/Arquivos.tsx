import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RecursoService from '../core/services/RecursoService'
import { Recurso } from '../../models/Recurso'
import * as nativeBase from "native-base";


export default function listaRecursos() {

  const { listaRecursos } = RecursoService()

  type RenderRecursoProps = {
    item: Recurso
  }

  const RenderRecurso = ({ item }: RenderRecursoProps) => {
    return (<Text>
      {item.nomeArquivo}
    </Text>)
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <nativeBase.Heading fontFamily={'Poppins'} fontSize="20" p="2" marginLeft="4">
            Meus Recursos
          </nativeBase.Heading>
        )}
        data={listaRecursos}
        renderItem={RenderRecurso}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Arquivos</Text>
    </View>
  )
}
