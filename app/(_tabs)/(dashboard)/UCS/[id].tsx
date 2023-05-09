import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import { Grupo } from '../../../../models/Grupo'
import { API } from '../../../../http/API'
import { getEnconstrosByGrupoIdByEstudanteId } from '../../../../core/services/EncontroService'

const UcDetail = () => {
  const idEstudante = 1;
  const router = useRouter()
  const {id} = useSearchParams()
  const [grupo, setGrupo] = useState<Grupo>()
  const { encontros } = getEnconstrosByGrupoIdByEstudanteId(Number(id), idEstudante)

  console.log(encontros)
  useEffect(() => {
    if(id){
      API.get(`Grupo/${id}`).then((response) => setGrupo(response.data))
    }
  },[id])


  return (
    <View>
      <Button title='voltar' onPress={() => router.back()}/>
      <Text>id {id}</Text>
      {grupo && <Text>{grupo.unidadeCurricular.nome}</Text>}
      {encontros && <Text>{encontros[0].horaInicio}</Text>}
    </View>
  )
}

export default UcDetail

const styles = StyleSheet.create({})