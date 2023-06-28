import { View, Text, FlatList, StyleSheet, Platform, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Card, IconButton, AnimatedFAB, TextInput } from 'react-native-paper';
import { NativeBaseProvider, Modal, Input, Toast, Divider, Center, Button, Box, Stack, Heading } from 'native-base';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Recurso } from '../../../models/Recurso';
import RecursoService from '../../../core/services/RecursoService';
import uuid from 'uuid-random';
import { useAuth } from '../../../contexts/AuthContext';



export default function listaRecursos() {

  const { listaRecursos, originalData, setListaRecursos, getListaRecursoPorUsuarioId, deleteRecurso, saveRecurso } = RecursoService()

  const [showModal, setShowModal] = useState(false);
  const [showDesc, setShowDesc] = useState(true);

  const [fileResponse, setFileResponse] = useState([]);
  const [recurso, setRecurso] = useState<Recurso>()
  const [nomeArquivo, setNomeArquivo] = useState<string>('');
  const [desc, setText] = useState('');
  const usuarioId = useAuth().authState.userData.usuarioId;
  const id = uuid();




  type RenderRecursoProps = {
    item: Recurso
  };

  const RenderRecurso = ({ item }: RenderRecursoProps) => {
    return (
      <View>
        <Card.Title
          title={item.nomeArquivo}
          subtitle={item.descricao}
          left={(props) => <Avatar.Icon {...props} style={styles.button} icon="content-save" />}
          right={(props) => <IconButton {...props} icon="close" onPress={() =>
            Alert.alert("",
              "Tem certeza que deseja apagar o arquivo?",
              [
                {
                  text: 'Sim',
                  onPress: () => {
                    deleteRecurso(item.id).catch((error) => {
                      Toast.show({
                        title: "Erro ao apagar arquivo!",
                        placement: "top",
                        backgroundColor: "amber.500",
                      });
                      console.log(error);
                    }).
                      then(() => {
                        getListaRecursoPorUsuarioId(usuarioId),
                          Toast.show({
                            title: "Arquivo apagado com sucesso!",
                            placement: "top",
                            backgroundColor: "green.500",
                          });
                      });
                  },
                  style: 'destructive',
                },
                {
                  text: 'Não',
                  onPress: () => {
                    // Lógica a ser executada ao pressionar o Botão 2
                    return null;
                  },
                  style: 'cancel',
                },

              ],
            )} />}
        />
          <Divider />
      </View>



    )
  }

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type == "success") {
      let data = result.uri;

      Platform.OS == 'android' ? data = data.replace('file://', '') : data;
      console.log(desc)
      let base64 = await FileSystem.readAsStringAsync(data, { encoding: FileSystem.EncodingType.Base64 });
      // utilize o valor de base64 aqui
      const Recurso = {
        id: 7,
        descricao: desc,
        nomeArquivo: result.name,
        arquivo: base64,
        dataCadastro: new Date().toISOString(),
        status: 1,
        usuarioId: usuarioId,
      };
      setRecurso(Recurso)
      console.log(recurso)

      setNomeArquivo(result.name)
    }

  };

  const ModalUpload = () => {

    return <Center>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>Upload de Recursos</Modal.Header>
          <Modal.Body>
            <UploadBox />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setShowModal(false);
              }}>
                Cancel
              </Button>
              <Button colorScheme='blue' onPress={
                () => {

                  saveRecurso(recurso).catch((error) => {
                    Toast.show({
                      title: "Erro ao salvar arquivo!",
                      placement: "top",
                      backgroundColor: "amber.500",
                    });
                    console.log(error);
                  }).
                    then(() => {
                      getListaRecursoPorUsuarioId(usuarioId),
                        Toast.show({
                          title: "Arquivo salvo com sucesso!",
                          placement: "top",
                          backgroundColor: "green.500",
                        });
                      setShowModal(false);
                    });

                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>;
  };

  const UploadBox = () => {
    return <Box alignItems="center">
      <Box w="250" maxW="250" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              <Button colorScheme='blue' onPress={() => { pickDocument(), setShowDesc(false) }}>
                Escolher arquivo
              </Button>
            </Heading>
            <Text>Nome: {nomeArquivo}</Text>
            <Input size="lg" placeholder="Descrição" isDisabled={showDesc} value={desc} onChangeText={text => setText(text)} />
          </Stack>
          {fileResponse.map((file, index) => (
            <Text
              key={index.toString()}
              numberOfLines={1}
              ellipsizeMode={'middle'}>
              {file?.uri}
            </Text>
          ))}
        </Stack>
      </Box>
    </Box>;
  };


  function search(s) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setListaRecursos(arr.filter((item) =>
      item.nomeArquivo.toUpperCase().includes(s.toUpperCase()) || item.descricao.toUpperCase().includes(s.toUpperCase())))
  }

  // const searchFilterFunction = (text) => {
  //   if (text) {
  //     const newData = listaRecursos.filter((item) => {
  //       const itemData = item.nomeArquivo
  //         ? item.nomeArquivo.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //   } else {
  //     setListaRecursos(listaRecursos)
  //   }
  // };


  return (
    <NativeBaseProvider>
      {usuarioId &&
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Heading fontFamily={'Poppins'} fontSize="20" p="2" marginLeft="4">
            Arquivos
          </Heading>

          <TextInput
            placeholder='Pesquisar'
            style={styles.input}
            placeholderTextColor={'#999'}
            onChangeText={(s) => { search(s) }}
          />

          <FlatList
            // ListHeaderComponent={() => (
            //   <nativeBase.Heading fontFamily={'Poppins'} fontSize="20" p="2" marginLeft="4">
            //     Arquivos
            //   </nativeBase.Heading>
            // )}
            data={listaRecursos}
            renderItem={RenderRecurso}
            key={id}
            style={styles.listaRecursos}
          />
          <AnimatedFAB
            icon={'plus'}
            extended={false}
            label={'Label'}
            onPress={() => setShowModal(true)}
            visible={true}
            animateFrom={'right'}
            iconMode={'static'}
            color='#F2994A'
            style={[styles.fabStyle, styles.button]}
          />

          <ModalUpload />
        </View>
      </TouchableWithoutFeedback>}
    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    right: 16,
    top: 460,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#2563ea',
  },
  listaRecursos: {
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#2563ea',
    color: '#2563ea',
  },
});


