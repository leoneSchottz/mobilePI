import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';


import { useNavigation } from '@react-navigation/native';

export default function Participantes({grupoId}) {
    const navigation = useNavigation();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://academico3.rj.senac.br/api/Estudante/FiltrarEstudanteByGrupoId/${grupoId}`);
            const data = await resp.json();
            setData(data);
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
                data={data}
                renderItem={({item}) => <RenderItem item={item}/>}
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