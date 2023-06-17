import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


import { API } from '../../../http/API';
import { Usuario } from '../../../models/Usuario';

export default function Participantes({grupoId}) {

    const [participantes, setParticipantes] = useState<Usuario[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await API.get<Usuario[]>(`/Estudante/FiltrarEstudanteByGrupoId/${grupoId}`);
            setParticipantes(data);
        };

        fetchData();
    }, []);

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.main}>
                <Text style={{ fontSize: 18, margin: 2 }}>{item.usuario?.nomeCompleto}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Participantes</Text>
            <FlatList
                data={participantes}
                renderItem={({item}) => <RenderItem key={item.id} item={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        padding: 5,
        margin: 10
    }
})