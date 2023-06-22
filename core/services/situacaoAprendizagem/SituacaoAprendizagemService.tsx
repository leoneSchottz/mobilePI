import {useEffect, useState} from 'react';

import {AxiosError, AxiosResponse} from 'axios';

import { API, handleError } from '../../../http/API';
import { SituacaoAprendizagem } from '../../../models/SituacaoAprendizagem';



export function getAllSituacoesAprendizagem() {

    const [situacaoAprendizagem, setSituacaoAprendizagem] = useState<SituacaoAprendizagem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        API.get<SituacaoAprendizagem[]>('/SituacaoAprendizagem')
            .then((response: AxiosResponse) => {
                setSituacaoAprendizagem(response.data);
            })
            .catch((error: AxiosError<SituacaoAprendizagem[]>) => {
                handleError(error)
            })
            .finally(() => setIsLoading(true));
    }, []);

    return {situacaoAprendizagem, isLoading};
}
