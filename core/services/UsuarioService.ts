import { useEffect, useState } from 'react';
import { API } from '../../http/API';
import { AxiosError, AxiosResponse } from 'axios';
import { Usuario } from '../../models/Usuario';

export function getUsuarioByUsuarioId(idUsuario: string) {

  const [usuario, setUsuario] = useState<Usuario>();

  useEffect(() => {
    API.get<Usuario>(`/Usuario/${idUsuario}`)
    .then((response: AxiosResponse) => {
      setUsuario(response.data);
    })
    .catch((error: AxiosError<Usuario>) => {
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
  
  return { usuario }
}

