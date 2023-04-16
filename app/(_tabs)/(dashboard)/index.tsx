import { View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { useRouter } from 'expo-router'
import { useEffect, useState } from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, Button, Spinner, Spacer, FlatList, Card } from "native-base";
import { Grupo } from "../../../models/Grupo";
import { API } from '../../../http/api';

export default function ListaUC({ navigation }) {
  const router = useRouter()
  const idUsuarioLogado = useContext(AuthContext)
  const idUsuario = '3b700ecc-cec9-4be4-8c00-48bced543861'
  const [listaUC, setListaUC] = useState<Grupo[]>([]);
  console.log(listaUC);

  useEffect (() => {
    API.get<Grupo[]>('Grupo').then((response) => setListaUC(response.data));
  }, [])

  type RenderCardProps = {
    item : Grupo;
  }
  const RenderCard = ({ item }: RenderCardProps) => {
    return (
      <Box alignItems="center" margin="1">
        <Button
          maxW="80" 
          rounded="lg" 
          overflow="hidden" 
          borderColor="coolGray.200" 
          borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }} _web={{
            borderWidth: 0
          }} _light={{
            backgroundColor: "gray.50"
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16/9}>
              <Image source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" />
            </AspectRatio>
            <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              UC
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {item.unidadeCurricular.nome}
              </Heading>
              <Text fontSize="xs" _light={{
                color: "violet.500"
                }} _dark={{
                  color: "violet.400"
                }} fontWeight="500" ml="-0.5" mt="-1"
              >
                { item.descricao }
              </Text>
            </Stack>
            {/* <Text fontWeight="400">
              {item.descricao}
            </Text> */}
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  Frequência: 95%
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Button>
        <Spacer/>
      </Box>)
  };

  return (
    <View>
        <FlatList
          ListHeaderComponent={() => (
            <Heading fontFamily={'Poppins'} fontSize="20" p="2" marginLeft="4">
              Meus Cursos
            </Heading>
          )}
          width="100%"
          data={listaUC}
          renderItem = { RenderCard }
          keyExtractor={(item) => item.id.toString()}
          />
    </View>
  )
}
