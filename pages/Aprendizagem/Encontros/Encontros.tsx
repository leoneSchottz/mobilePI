import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';


import CardEncontro from '../../../components/Cards/CardEncontro';
import { API } from '../../../http/API';
import { Encontro } from '../../../models/Encontro';

export default function Encontros({grupoId}) {
    const [encontros, setEncontros] = useState<Encontro[]>([])
    const estudanteId = 1

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await API.get<Encontro[]>(`Encontro/FilterByGrupoIdByEstudanteId/${grupoId}/${estudanteId}`);
            setEncontros(data);

            } catch (error) {
                alert(error)
            }
        }

        fetchData();

    },[])

    return (
        <View>
            <FlatList
                numColumns={3}
                horizontal={false}
                data={encontros}
                renderItem={({ item }) => <CardEncontro key={item.id} encontro={item} />}
            />
            {/* </ScrollView> */}
        </View>
    );
}

