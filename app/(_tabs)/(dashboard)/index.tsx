import { View, Image, ScrollView, Button, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { useRouter } from 'expo-router'
import { useEffect, useState } from "react";
import { FlashList } from '@shopify/flash-list';
import { Grupo } from "../../../models/Grupo";
import { API } from '../../../http/API';
import { ControleExecucao } from '../../../models/ControleExecucao';
import { Usuario } from '../../../models/Usuario';
import { StyleSheet } from 'react-native';

export default function ListaUC({ navigation }) {
  const router = useRouter()
  const idUsuario = useContext(AuthContext)
  const [listaUC, setListaUC] = useState<Grupo[]>([]);
  
  const [listaControleExecucao, setListaControleExecucao] = useState<ControleExecucao[]>([])
  const idPeriodo = 2;

  useEffect (() => {
    
    // /ObterGruposByPeriodoAtivoByUsuarioId/${idUsuario}
    API.get<Grupo[]>(`Grupo`).then((response) => setListaUC(response.data));

    listaUC.map((grupo)=>
      API.get<ControleExecucao[]>(`ControleExecucao/FilterByPeriodoIdByGrupoId/${idPeriodo}/${grupo.id}`).then((response) => setListaControleExecucao(response.data))
    )
  }, [])

  type RenderCardProps = {
    item : Grupo;
  }
  const RenderCard = ({ item }: RenderCardProps) => {
    return (
      <View style={{ margin: 5, borderRadius:12, backgroundColor:'white', width: '50%', overflow: 'hidden'}} >
        <TouchableOpacity>
        <View style={{flexDirection: 'row', height: 80, width: 250}}>
          <View style={{width: '30%'}}>
              <Image 
              style={{height:'100%', width: '100%'}}
              resizeMode='cover'
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
              }} 
              alt="image" />

            <View style={{position:'absolute', bottom: 0, padding:3, paddingTop:1.5, backgroundColor: 'red'}}>
              <Text>UC</Text>
            </View>
          </View>
          <View style={{width: '60%', marginLeft: 10}}>
              <Text style={{fontFamily:'PoppinsBold', fontSize: 12}}>
                {item.unidadeCurricular.nomeCurto}
              </Text>
              <Text style={{fontFamily:'Poppins', fontSize: 10}}>
                { item.unidadeCurricular.nomeCurto }
              </Text>
              <Text>
                Frequência: 95%
              </Text>
           </View>
        </View>
        </TouchableOpacity>
      </View>
      )
  };

  return (

      <FlashList
      StickyHeaderComponent={() => (
        <Text style={{fontFamily: 'Poppins', marginLeft: 4}}>
          Meus Cursos
        </Text>)}
      
        data={listaUC}
        estimatedItemSize={8}
        renderItem = { RenderCard }
        keyExtractor={(item) => item.id.toString()}
        
      />
  
    //   <>
    //   <ScrollView>
    //     {listaUC.map((grupo) => (
    //       <View key={grupo.id}>
    //           <Text style={{alignSelf: 'center'}} >
    //             {grupo.unidadeCurricular.nomeCurto}
    //           </Text>
    //           <Text style={{alignSelf: 'center'}} >
    //             {grupo.unidadeCurricular.horas}
    //           </Text>
    //       </View>
    //         )
    //       )
    //     }

    //   <View  style={{alignSelf: 'center'}}>
    //     <Text>TESTE</Text>
    //     {listaControleExecucao.map((controle) => (<Text key={controle.id}>{controle.data} {controle.status}</Text>))}
    //   </View>
      
    // </ScrollView>
    // </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})