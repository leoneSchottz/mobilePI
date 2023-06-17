import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlanejamentoUC } from '../../../models/PlanejamentoUC';
import { API } from '../../../http/API';
import { StatusBar } from 'expo-status-bar';



export default function DescricaoUC({grupoId}) {

    const [planejamentoUc, setPlanejamentoUc] = useState<PlanejamentoUC>();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await API.get<PlanejamentoUC>(`PlanejamentoUC/FiltrarPlanejamentoUCByGrupoId/${grupoId}`);
            setPlanejamentoUc(data);
        };

        fetchData();
    }, []);

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.main}>
                <Text style={{fontWeight:'bold', fontSize:24, marginBottom: 5}}>Descrição</Text>
                <Text style={{fontSize:18}}>{item?.descricao}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <RenderItem item={planejamentoUc} />
            <StatusBar style="auto" />
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