import { ControleExecucao } from '../../models/ControleExecucao';
import { useEffect, useState } from 'react';
import { API } from '../../http/API';
import { AxiosError, AxiosResponse } from 'axios';
import { Grupo } from '../../models/Grupo';


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

