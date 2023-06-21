import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';


import { API } from '../../../http/API';
import { Competencia } from '../../../models/Competencia';

export default function Competencias({unidadeCurricularId}) {

    const [competencias, setCompetencias] = useState<Competencia[]>([])

    useEffect(() => {
        const fetch = async () => {
            const {data} = await API.get<Competencia[]>(`Competencia/filterByUnidadeCurricular/${unidadeCurricularId}`)
            setCompetencias(data)
        }
        fetch();
    },[unidadeCurricularId])

    return (
        <View style={styles.container}>
            <Text>Competências</Text>
            { competencias ?
                competencias.map((competencia) => (<Text key={competencia.id}>{competencia.descricao}</Text>))
                : <Text>Sem competencias</Text> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})