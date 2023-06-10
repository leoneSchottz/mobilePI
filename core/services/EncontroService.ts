import { useEffect, useState } from "react";
import { API } from "../../http/API"
import { Encontro } from "../../models/Encontro";
import { AxiosError } from "axios";

export function getEnconstrosByGrupoIdByEstudanteId(idGrupo: number | string, idEstudante: number) {

    const [encontros, setEncontros] = useState<Encontro[]>([])

    useEffect(() => {
      API.get(`Encontro/FilterByGrupoIdByEstudanteId/${idGrupo}/${idEstudante}`)
      .then( (response) => {
        setEncontros(response.data);
      })
      .catch((error: AxiosError<Encontro[]>) => {
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
      return {encontros}
  }