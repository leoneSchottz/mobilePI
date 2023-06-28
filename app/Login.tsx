import { Alert, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../contexts/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../common/constants/Colors';
import * as LocalAuthentication from 'expo-local-authentication'
import { Formik } from 'formik'
import * as yup from 'yup'
const { width } = Dimensions.get('screen')


const loginValidationSchema = yup.object().shape({
  cpf: yup
    .string()
    .length(11, "CPF deve ter 11 números")
    .required('Digite o CPF'),
  senha: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required('Digite a senha'),
})

const UserLogin = () => {
  const { onLogin } = useAuth()
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [ LoggingIn, setLoggingIn ] = useState(false)

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  },[]);

  type loginProps = {cpf: string, senha: string }

  const handleLogin = async ({cpf, senha}: loginProps) => {
    setLoggingIn(true);
    await onLogin(cpf, senha);
    setLoggingIn(false);
  };

  const handleForgotPassword = () => {
    Alert.alert(':(','Resetar senha');
  };

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style='dark'/>
       <Image
          source={require('../assets/images/senac-logo.png')}
          style={{width: 200, height: 200, alignSelf: 'center'}}
        />
      <View style={styles.loginContainer}>
        <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{ cpf: '', senha: '' }}
            onSubmit={(values) => handleLogin(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
              <>
                <TextInput
                  placeholder="CPF"
                  style={styles.input}
                  onChangeText={handleChange('cpf')}
                  onBlur={handleBlur('cpf')}
                  value={values.cpf}
                  keyboardType="numeric"
                  maxLength={11}
                />
                {(errors.cpf && touched.cpf) &&
                  <Text style={{ fontSize: 10, color: 'red', position: 'absolute', top: 45, left: 50 }}>{errors.cpf}</Text>
                }
                <TextInput
                  placeholder="senha"
                  style={styles.input}
                  onChangeText={handleChange('senha')}
                  onBlur={handleBlur('senha')}
                  value={values.senha}
                  secureTextEntry
                />
                {(errors.senha && touched.senha) &&
                  <Text style={{ fontSize: 10, color: 'red', position: 'absolute', top: 105, left: 50 }}>{errors.senha}</Text>
                }
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonForgotPassword]}
                    onPress={handleForgotPassword}
                  >
                    <Text style={styles.buttonTextForgotPassword}>Esqueceu a senha?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={[styles.button, !isValid? styles.buttonLoginDisabled : styles.buttonLogin]}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={styles.buttonText}>Entrar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
        </Formik>

        {LoggingIn && <ActivityIndicator size={'large'} />}
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
    paddingHorizontal: width*0.1,
    gap: 20
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  inputFocus: {
    borderColor: '#004A90'
  },
  inputBlur: {
    borderColor: 'lightgray'
  },
  buttonContainer:{
    width: '100%',
    gap: 20
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 12
  },
  buttonLogin: {
    backgroundColor: '#004A90'
  },
  buttonLoginDisabled: {
    backgroundColor: 'lightgray'
  },
  buttonForgotPassword: {
    alignSelf: 'flex-end',
  },
  buttonTextForgotPassword: {
    color: '#004A90'
  },
  buttonText: {
    color: '#fff'
  }

  

});