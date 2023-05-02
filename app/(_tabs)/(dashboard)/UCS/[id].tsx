import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'expo-router'
import { getGrupo } from '../../../../core/services/GrupoService'
import { Grupo } from '../../../../models/Grupo'
import { API } from '../../../../http/API'

const UcDetail = () => {
  const router = useRouter()
  const {id} = useSearchParams()
  const [grupo, setGrupo] = useState<Grupo>()

  useEffect(() => {
    API.get(`Grupo/${id}`).then((response) => setGrupo(response.data))
    
  },[])


  return (
    <View>
      <Button title='voltar' onPress={() => router.back()}/>
      <Text>id {id}</Text>
      {grupo && <Text>{grupo.unidadeCurricular.nome}</Text>}
    </View>
  )
}

export default UcDetail

const styles = StyleSheet.create({})