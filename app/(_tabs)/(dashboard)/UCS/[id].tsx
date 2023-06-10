import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter, useSearchParams } from 'expo-router'
import { Grupo } from '../../../../models/Grupo'
import { API } from '../../../../http/API'
import { getEnconstrosByGrupoIdByEstudanteId } from '../../../../core/services/EncontroService'
import { getGrupo } from '../../../../core/services/GrupoService'
import { AxiosResponse } from 'axios'

const UcDetail = () => {

  type ucParam = {
    id: string
  }
  const idEstudante = 1;
  const router = useRouter();
  const {id} = useLocalSearchParams<ucParam>()
  //const { encontros } = getEnconstrosByGrupoIdByEstudanteId(Number(id[0]), idEstudante)
  const {grupo} = getGrupo(id)

  return (
    <View>
      <Button title='voltar' onPress={() => router.back()}/>
      <Text>id {id}</Text>
      {grupo && <Text>{grupo.unidadeCurricular.nome}</Text>}
      {/* {encontros && <Text>{encontros[0].horaInicio}</Text>} */}
    </View>
  )
}

export default UcDetail

const styles = StyleSheet.create({})