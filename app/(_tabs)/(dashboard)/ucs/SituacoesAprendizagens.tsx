import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import HeaderUc from '../../../../components/Header/HeaderUc';
import { CardSituacaoAprendizagem } from '../../../../components/Cards/CardSituacaoAprendizagem';
import { API } from '../../../../http/API';
import { useSearchParams } from 'expo-router';
import { SituacaoAprendizagem } from '../../../../models/SituacaoAprendizagem';





export default function SituacoesAprendizagens() {

    const params = useSearchParams()
    const [situacaoAprendizagens, setSituacaoAprendizagens] = useState<SituacaoAprendizagem[]>([]);

    useEffect(() => {
        async function getSituacaoAprendizagen() {
            try {
                const response = await API.get(`/SituacaoAprendizagem/FiltrarSituacoesAprendizagemPorEncontroId/${params.id}`);
                setSituacaoAprendizagens(
                    response.data
                );
            } catch (err) {
                console.log(err);
            }
        }
         getSituacaoAprendizagen();
    }, [params]);
    return (
        <>
            <HeaderUc data={params.name} />
            <View style={styles.container}>
                {/* <Text>{props.route.params.id}</Text> */}
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={situacaoAprendizagens}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CardSituacaoAprendizagem data={item} />}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 10,
    }
})