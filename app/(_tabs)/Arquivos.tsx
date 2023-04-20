import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RecursoService from '../../core/services/RecursoService'
import { Recurso } from '../../models/Recurso'


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
          <Text style={{fontFamily:'Poppins', fontSize:20, padding:2, marginLeft:4}}>
            Meus Recursos
          </Text>
        )}
        data={listaRecursos}
        renderItem={RenderRecurso}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Arquivos</Text>
    </View>
  )
}
