import { View, Text } from 'react-native'
import { Agenda } from 'react-native-calendars'
import { API } from '../../../http/api'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import events from '../../../assets/data/events.json'
import { Center } from 'native-base'

const Calendario = () => {
  // const idUsuarioLogado = useContext(AuthContext)
  // const [diasLetivos, setDiasLetivos] = useState([])
  // const dias = []
  // useEffect(() => {
  //   API.get('DiaLetivo/FiltrarDiasLetivosByUsuarioId/' + idUsuarioLogado).then(
  //     response => setDiasLetivos(response.data)
  //   )
  // }, [])

  // const RenderDiaLetivo = event => {
  //   return <Text>{event.name}</Text>
  // }

  // return (
  //   <View style={{ flex: 1 }}>
  //     <Agenda items={events} renderItem={RenderDiaLetivo} />
  //   </View>
  // )

  return (
    <Center>
      <Text>Calendário</Text>
    </Center>
  )
}

export default Calendario
