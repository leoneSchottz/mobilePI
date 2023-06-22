import { useEffect, useState } from "react";
import { API, handleError } from "../../http/API"
import { Encontro } from "../../models/Encontro";
import { AxiosError } from "axios";

export async function getEnconstrosByGrupoIdByEstudanteId(idGrupo: number | string, idEstudante: number) {

    const [encontros, setEncontros] = useState<Encontro[]>([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data} = await API.get(`Encontro/FilterByGrupoIdByEstudanteId/${idGrupo}/${idEstudante}`)
          setEncontros(data)
        } catch (error) {
          handleError(error)
        }
      }
      fetchData()
    },[])
      return {encontros}
  }