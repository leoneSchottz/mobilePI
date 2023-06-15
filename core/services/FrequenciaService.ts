import { ControleExecucao } from '../../models/ControleExecucao';
import { useEffect, useState } from 'react';
import { API } from '../../http/API';
import { Axios, AxiosError, AxiosResponse } from 'axios';
import { FrequenciaViewModel } from '../../models/FrequenciaViewModel';

export function getAllFrequenciasPorEstudanteId(idEstudante: number) {

  const idPeriodo = 2;
  const [frequencias, setFrequencias] = useState<ControleExecucao[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data} = await API.get<ControleExecucao[]>(`/ControleExecucao/FilterByPeriodoIdByEstudanteId/${idPeriodo}/${idEstudante}`)
          setFrequencias(data)
        } catch (error) {
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
              console.log('freq')
              alert('Erro de servidor');
            }
          }
        }
      }
      fetchData()
    },[])

  return frequencias;
}


export function getFrequenciaByEstudanteIdByPeriodoId(idEstudante: number, idPeriodo: number) {

  const [frequencias, setFrequencias] = useState<FrequenciaViewModel[]>([]);
  
  useEffect(() => {
    API.get<FrequenciaViewModel[]>(`/Frequencia/obterFrequenciaByEstudanteIdByPeriodoId/${idEstudante}/${idPeriodo}`)
    .then((response: AxiosResponse) => setFrequencias(response.data))
    .catch((error: AxiosError<FrequenciaViewModel[]>) => {
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
    })

  },[])
  
  return {frequencias};
}

