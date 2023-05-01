import { useState, useEffect } from "react";
import { API } from "../../http/API";
import { Recurso } from "../../models/Recurso";

export default function RecursoService() {

    const [listaRecursos, setListaRecursos] = useState<Recurso[]>([]);

    useEffect(() => {
        API.get<Recurso[]>('Recurso').then((response) => {
            //console.log(response.data);
            setListaRecursos(response.data);
        })
    }, []);

    return { listaRecursos };

}