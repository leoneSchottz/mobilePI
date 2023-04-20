import { ControleExecucao } from '../../models/ControleExecucao';
import { useEffect, useState } from 'react';
import { API } from '../../http/API';
import { AxiosError, AxiosResponse } from 'axios';

export function getAllFrequenciasPorEstudanteId(idEstudante: string) {

  const idPeriodo = 2;
  const [frequencias, setFrequencias] = useState<ControleExecucao[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    API.get<ControleExecucao[]>(`/ControleExecucao/FilterByPeriodoIdByEstudanteId/${idPeriodo}/${idEstudante}`)
      .then((response: AxiosResponse) => {
        setFrequencias(response.data);
      })
      .catch((error: AxiosError<ControleExecucao[]>) => {
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
      .finally(() => setIsFetching(false));
  }, []);

  // if (badges === null) {
  //   const mock: Badge[] = require('../../../common/utils/mock/Badges.json');

  //   useEffect(() => {
  //     setBadges(mock);
  //     setMasterData(mock);
  //     setFilteredData(mock);
  //   }, []);
  // }
  return { frequencias, isFetching };
}
