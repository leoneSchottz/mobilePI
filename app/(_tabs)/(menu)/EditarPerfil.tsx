import { Dimensions, StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { getUsuarioByUsuarioId } from '../../../core/services/UsuarioService'

const { width } = Dimensions.get('screen')
const EditarPerfil = () => {

  const { usuarioId } = useAuth().authState.userData
  const { usuario } = getUsuarioByUsuarioId(usuarioId)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)

  type editProfileForm = {
    id: string,
    cpf: string,
    foto: string,
    apelido: string,
    email: string,
    password: string
  }

  const [profileForm, setProfileForm] = useState<editProfileForm>(null)

  useEffect(() => {
    if(usuario){
      setProfileForm({...profileForm, id: usuarioId, cpf: usuario.cpf, foto: usuario.foto, apelido: usuario.apelido, email: usuario.email, password: usuario.passwordHash})
      setLoading(false)
    }
  },[usuario])

  const handleUpdate = () => {
    console.log('send post with form')
  }
  const handleUpdateFoto = () => {
    console.log('send post with photo')
  }



  return (
    <View style={styles.container}>
      {!loading &&
      <View style={styles.formContainer}>
        <View style={styles.picContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: 'data:image/png;base64,' + usuario.foto }}
            />
          <TouchableOpacity onPress={() => handleUpdateFoto()}>
            <Text>Alterar foto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>

          <TouchableOpacity onPress={() => setEditing(!editing)}>
            <Text>EDITAR</Text>
          </TouchableOpacity>
          <View style={styles.editContainer}>
            <Text style={styles.editLabel}>Apelido</Text>
            <TextInput
              editable={editing}
              style={[styles.input, !editing ? styles.inputDisabled : null]}
              value={profileForm.apelido}
              onChangeText={(value) => setProfileForm({...profileForm, apelido: value})}
            />
          </View>
          <View style={styles.editContainer}>
            <Text style={styles.editLabel}>E-mail</Text>
            <TextInput
              editable={editing}
              style={[styles.input, !editing ? styles.inputDisabled : null]}
              value={profileForm.email}
              onChangeText={(value) => setProfileForm({...profileForm, email: value})}
            />
          </View>
          <View style={styles.editContainer}>
            <Text style={styles.editLabel}>Senha</Text>
            <TextInput
              editable={editing}
              secureTextEntry
              style={[styles.input, !editing ? styles.inputDisabled : null]}
              value={profileForm.password}
              onChangeText={(value) => setProfileForm({...profileForm, password: value})}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => handleUpdate()}
          style={[styles.button, (!editing) ? styles.buttonDisabled : styles.button]}
          disabled={!editing}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
        }
    </View>
  )
}

export default EditarPerfil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width*0.04
  },
  formContainer:{
    gap: 10
  },
   picContainer: {
    gap: 10,
    alignItems: 'center'
   },
   avatar: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  infoContainer: {
    gap: 10,
    alignItems: 'center'
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  inputDisabled: {
    backgroundColor: 'gray',
  },
  editLabel: {
    width: 60
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


})