import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../contexts/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../common/constants/Colors';
import * as LocalAuthentication from 'expo-local-authentication'

const UserLogin = () => {
  const { onLogin } = useAuth()
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  },[]);

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário com o email e senha fornecidos
    // por exemplo, fazendo uma chamada para a API ou validando localmente.
    console.log('logando..')
    onLogin(cpf, senha);
    // Resetar os campos de email e senha
    setCpf('');
    setSenha('');
  };

  const handleForgotPassword = () => {
    // Aqui você pode adicionar a lógica para lidar com a recuperação de senha.
    // Isso pode incluir a exibição de um modal, redirecionamento para outra tela, envio de um email de recuperação, etc.
    console.log('Esqueci a senha');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <StatusBar style='dark'/>
        <Image
          source={require('../assets/images/senac-logo.png')}
          style={{width: 200, height: 200}}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
          keyboardType='numeric'
          autoFocus
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Button title="Login" onPress={handleLogin} />

        <Button
          title="Esqueci a senha"
          onPress={handleForgotPassword}
          color="#888"
        />
        <Text> {isBiometricSupported
          ? 'Your device is compatible with Biometrics'
          : 'Face or Fingerprint scanner is available on this device'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 10
  },
});