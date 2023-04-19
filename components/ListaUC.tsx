import { FlatList, Image, ListRenderItem, StyleSheet, View } from 'react-native'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Grupo } from '../models/Grupo'
import { AspectRatio, Box, Text,Button, Center, HStack, Heading, Spacer, Stack } from 'native-base';
import { API } from '../http/API';
import { useRouter } from 'expo-router';
import { assertDuplicateRoutes } from 'expo-router/src/getRoutes';

const ListaUC: FunctionComponent = () => {

  const router = useRouter();
  const [grupoList, setGrupoList] = useState<Grupo[]>([]);

  useEffect (() => {
    API.get<Grupo[]>('Grupo').then((response) => setGrupoList(response.data));
  }, [])

  const RenderCard: ListRenderItem<Grupo> = ({item}) => {
    return (
      <Box alignItems="center" margin="1">
        <Button
        onPress={() => alert('uc clicked')}
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
    <View style={styles.container}>
      <FlatList
          data={grupoList}
          renderItem = { RenderCard }

          />
    </View>
  )
}

export default ListaUC

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})