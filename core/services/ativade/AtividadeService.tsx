import {useEffect, useState} from 'react';

import {AxiosError, AxiosResponse} from 'axios';
import { Atividade } from '../../../models/Atividade';
import { Badge } from '../../../models/Badge';
import { API, handleError } from '../../../http/API';


export function getAllAtivades() {

    const [atividades, setAtividades] = useState<Atividade[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        API.get<Atividade[]>('/Atividade')
            .then((response: AxiosResponse) => {
                setAtividades(response.data);
            })
            .catch((error: AxiosError<Badge[]>) => {
                handleError(error)
            })
            .finally(() => setIsLoading(true));
    }, []);

    return {atividades, isLoading};
}
