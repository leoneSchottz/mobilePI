import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { getAllChapters } from '../../../../core/services/chapter/ChapterService';
import { Chapter } from '../../../../models/Chapter';
import DropDownPicker from 'react-native-dropdown-picker'
import RNPickerSelect from "react-native-picker-select";
import MultiSelect from 'react-native-multiple-select';
import { useAuth } from '../../../../contexts/AuthContext';
import { createChaptersAssunto } from '../../../../core/services/chapter/ChapterAssuntoService';
import { ChapterAssunto } from '../../../../models/ChapterAssunto';
import { useRouter } from 'expo-router';

const {width} = Dimensions.get('screen')

const loginValidationSchema = yup.object().shape({
  titulo: yup
    .string()
    .required('Digite um título'),
  descricao: yup
    .string()
    .required('Digite a descrição'),
})

type formProps = {
  dataCadastro: string,
  titulo: string,
  descricao: string,
  contadorVisualizacao: number,
  status: number,
  verificacao: 0;
  chapterId: number,
  usuarioId: string,
  usuarioIdVerificacao: string,
}

type ChapterLabels = {
  label: string,
  value: number
}

const NovaPergunta = () => {
  

  const usuarioId = useAuth().authState.userData?.usuarioId ;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [chapterIdSelected, setChapterIdSelected] = useState()

  const [chapterList, setChapterList] = useState([
    {"label": "Banco de dados", "value": 1},
    {"label": "Projeto Integrador", "value": 3},
    {"label": "Criação de persona", "value": 2}])

  const [form, setForm] = useState<formProps>({
    dataCadastro: "",
    titulo: "",
    descricao: "",
    contadorVisualizacao: 0,
    status: 1,
    verificacao: 0,
    chapterId: value,
    usuarioId: usuarioId,
    usuarioIdVerificacao: usuarioId
  })

  const { replace } = useRouter()

  useEffect(() => {
    setForm({...form, chapterId: value})
  },[value])

  const updateDate = () => {
    var date = new Date()
    setForm({...form, dataCadastro: date.getFullYear() + '-' +
    ('00' + (date.getMonth()+1)).slice(-2) + '-' +
    ('00' + date.getDate()).slice(-2) + ' ' +
    ('00' + date.getHours()).slice(-2) + ':' +
    ('00' + date.getMinutes()).slice(-2) + ':' +
    ('00' + date.getSeconds()).slice(-2)})
  }
  const handleSubmit = async () => {

    
    await createChaptersAssunto(form)
      .then(() => {
        replace('/forum/Comunidades')
      })
      .catch(e => console.log(e))

  }
  return (
    <View style={styles.container}>
      <Text>Selecione um Chapter</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={chapterList}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setChapterList}
      />
      <View style={styles.inputContainer}>
        <Text>Título</Text>
        <TextInput
          style={styles.input}
          value={form.titulo}
          onChangeText={(value) => setForm({...form, titulo: value})}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Descrição</Text>
        <TextInput
          multiline
          numberOfLines={10}
          style={[styles.input, styles.inputDescription]}
          value={form.descricao}
          onChangeText={(value) => setForm({...form, descricao: value})}
        />
      </View>
      <TouchableOpacity
        onPressIn={() => updateDate()}
        style={[styles.button, ((form.titulo.length < 1) || (form.descricao.length < 1)) ? styles.buttonDisabled : styles.button]}
        onPressOut={() => handleSubmit()}
        disabled={((form.titulo.length < 1) || (form.descricao.length < 1))}
      >
        <Text style={styles.buttonText}>Criar Pergunta</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NovaPergunta

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
    gap: 10
  },
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    color: 'black',
  },
  inputContainer: {
    gap: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 12,
    backgroundColor: '#004A90'
  },
  buttonText: {
    color: '#fff'
  },
  buttonDisabled: {
    backgroundColor: 'lightgray'
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  inputDescription: {
    height: 100
  }
})

