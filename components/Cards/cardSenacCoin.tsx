import * as React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native';

import { SenacCoinMovimentacao } from '../../models/SenacCoinMovimentacao';
import moment from 'moment';
const { width } = Dimensions.get('screen')
export default function CardSenacCoin({...data} : SenacCoinMovimentacao) {
    const formatData = moment(data.data).format('ll')
    return(
        <View style={styles.container}>
            <Card.Title
                style={styles.card}
                title={formatData}
                subtitle= {data.observacao}
                subtitleStyle={{
                    fontWeight: 'bold'
                 }}
                left={() => <Image style={styles.image} source={require('../../assets/images/chinese-coin.png')} />}
                right={() => <Text style={styles.coin}>{data.valor}</Text>}
            />
        </View>
    )
            };

const styles = StyleSheet.create({
    container: {
        padding: width * 0.04,
        width: width
    },
    card: {
        borderWidth: 0.22,
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
        alignSelf: 'center',
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