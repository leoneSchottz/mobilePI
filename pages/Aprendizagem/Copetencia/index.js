import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { API } from '../../../http/API';

export default function Competencia({unidadeCurricularId}) {
    const navigation = useNavigation();
    const [competencias, setCompetencias] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const {data} = await API.get(`Competencia/filterByUnidadeCurricular/${unidadeCurricularId}`)
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