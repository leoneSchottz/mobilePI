import axios, { AxiosError } from 'axios'

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
    case 400: {
      alert('Erro de servidor');
    }
  }
}