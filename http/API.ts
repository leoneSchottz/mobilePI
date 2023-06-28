import axios, { AxiosError } from 'axios'
import { Alert } from 'react-native'
export const API = axios.create({
  baseURL: 'http://academico3.rj.senac.br/api/'
})

export const handleError = ( error: AxiosError) => {
  switch (error.response?.status) {
    case 404: {
      alert('Erro de endereçamento');
      break;
    }
    case 400: {
      alert('Erro de cliente');
      break;
    }
    case 500: {
      alert('Erro de servidor');
    }
  }
}

export const handleLoginError = ( error: AxiosError) => {
  switch (error.response?.status) {
    case 404: {
      Alert.alert('Erro','CPF ou senha errados. Por favor tente outra vez.');
      break;
    }
    case 400: {
      Alert.alert('Erro de cliente');
      break;
    }
    case 500: {
      Alert.alert('Erro de servidor', 'Por favor, tente novamente.');
    }
  }
}

