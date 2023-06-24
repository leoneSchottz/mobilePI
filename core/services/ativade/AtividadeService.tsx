import {useEffect, useState} from 'react';

import {AxiosError, AxiosResponse} from 'axios';
import { Atividade } from '../../../models/Atividade';
import { Badge } from '../../../models/Badge';
import { API, handleError } from '../../../http/API';


export function getAllAtividades() {

    const [atividades, setAtividades] = useState<Atividade[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        API.get<Atividade[]>('/Atividade')
            .then((response: AxiosResponse) => {
                setAtividades(response.data);
            })
            .catch((error: AxiosError<Atividade[]>) => {
                handleError(error)
            })
            .finally(() => setIsLoading(true));
    }, []);

    return {atividades, isLoading};
}
