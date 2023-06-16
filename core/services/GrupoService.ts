import { ControleExecucao } from '../../models/ControleExecucao';
import { useEffect, useState } from 'react';
import { API } from '../../http/API';
import { AxiosError, AxiosResponse } from 'axios';
import { Grupo } from '../../models/Grupo';
import { FrequenciaViewModel } from '../../models/FrequenciaViewModel';


export function getAllGrupos() {

  const [grupos, setGrupos] = useState<Grupo[]>([]);

  useEffect(() => {
    API.get<Grupo[]>(`/Grupo`)
      .then((response: AxiosResponse) => {
        setGrupos(response.data);
      })
      .catch((error: AxiosError<Grupo[]>) => {
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
  }, []);

  return {grupos};
}


export function getGruposByEstudanteIdByPeriodoId(idEstudante: number, idPeriodo: number) {

  const [grupos, setGrupos] = useState<Grupo[]>([])

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data} = await API.get<Grupo[]>(`/Grupo/ObterGruposByEstudanteIdByPeriodoId/${idEstudante}/${idPeriodo}`)
        setGrupos(data);
      } catch (error) {
        switch (error.message) {
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
    }
    fetchData()
  },[])

  return { grupos }
}

export function ObterGruposByPeriodoAtivoByEstudanteId(idEstudante: number) {

  const [grupos, setGrupos] = useState<Grupo[]>([])

  useEffect(() => {
    API.get<Grupo[]>(`/Grupo/ObterGruposByPeriodoAtivoByEstudanteId/${idEstudante}`)
    .then((response: AxiosResponse) => {
      setGrupos(response.data);
    })
    .catch((error: AxiosError<Grupo[]>) => {
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

  return { grupos }
}

export function getGrupo(idGrupo: number | string) {
  const [grupo, setGrupo] = useState<Grupo>()

  useEffect(() => {
    const fetchGrupo = async () => {
      try {
        const {data} = await API.get<Grupo>(`/Grupo/${idGrupo}`)
        setGrupo(data)
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
            alert('Erro de servidor');
          }
        }
      }
    }

    fetchGrupo()
  },[])

  return { grupo }
}

export function getGruposByEstudanteIdByPeriodoIdWithFrequency(idEstudante: number, idPeriodo: number) {

  const [grupos, setGrupos] = useState<Grupo[]>([])
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: grupoData} = await API.get<Grupo[]>(`/Grupo/ObterGruposByEstudanteIdByPeriodoId/${idEstudante}/${idPeriodo}`)
        const {data: freqData} = await API.get<FrequenciaViewModel[]>(`/Frequencia/obterFrequenciaByEstudanteIdByPeriodoId/${idEstudante}/${idPeriodo}`)

        grupoData.forEach(
          (g) => {
              var freq = freqData.filter((f) =>(f.grupoId == g.id));
              if(freq.length != 0){
                g.frequencia = freq[0].frequencia;
              }
              else {
                g.frequencia = '0'
              }
          }
        )
        setGrupos(grupoData)
        setIsLoaded(true)

      } catch (error) {
        switch (error.message) {
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
    }
    fetchData()

  },[])

  return { grupos, isLoaded }
}