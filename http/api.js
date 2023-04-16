import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://academico3.rj.senac.br/api/'
})
