import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useRouter } from 'expo-router';

function CardEncontro({ encontro }) {

    const router = useRouter();

    const id = encontro.id;
    const name = encontro.observacao;

    return (
        <TouchableOpacity onPress={() => router.push({pathname: '/ucs/SituacoesAprendizagens', params: { id: id , name: name} })} >
            <View style={styles.container}>
                <Text style={styles.cardText}>{encontro.observacao}</Text>
                <Text style={styles.cardText}>{encontro.encontroStatus.statusCursada}</Text>
                <Text style={styles.cardText}>{encontro.diaLetivo.dia}/{encontro.diaLetivo.mes}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 130,
        backgroundColor: '#fff',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 4,
    },
    card: {
        alignItems: 'center',
    },
    cardImage: {
        width: '90%',
        height: 110,
        borderRadius: 4,
        marginBottom: 0,
    },
    cardText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        elevation: 10
    },
    cursada: {
        backgroundColor: '#fff'
    },
    naoCursada: {
        backgroundColor: '#000'
    }
})

export default CardEncontro;



