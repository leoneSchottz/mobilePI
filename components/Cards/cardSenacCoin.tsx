import * as React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text, Image } from 'react-native';

import { useLocalSearchParams } from 'expo-router/src/navigationStore';
import { SenacCoinMovimentacao } from '../../models/SenacCoinMovimentacao';


export default function CardSenacCoin({...data} : SenacCoinMovimentacao) {
    return(
        <Card.Title
            style={styles.card}

            title={data.data}
            subtitle= {data.observacao}
            subtitleStyle={{
                fontWeight: 'bold'
             }}
            left={() => <Image style={styles.image} source={require('../../assets/images/chinese-coin.png')} />}
            right={() => <Text style={styles.coin}>{data.valor}</Text>}

        />
    )
            };

const styles = StyleSheet.create({
    card: {
        borderWidth: 0.22,
        width: 350,
        marginTop: 20
    },
    image: {
        width: 25,
        height: 25
    },
    titulo: {

    },
    subtitle: {

    },
    coin: {
        marginRight: 30,
        marginTop: 34,
        fontWeight: 'bold',
        color: 'green'
    },
    box: {
        // ...
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
      },
});