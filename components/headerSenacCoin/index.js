import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';

function HeaderSenacCoin({saldo}) {
    const router = useRouter()
    var saldoFormatado = ""
    if(saldo) {
        saldoFormatado = saldo.toLocaleString('pt-br', {minimumFractionDigits: 2});
    }
    return (
        <View style={styles.header}>
            <View style={styles.logo}>
                <TouchableOpacity style={styles.buttonIcon} onPress={() => router.back()}>
                    <FontAwesome
                        name="arrow-left"
                        size={20}
                        color="#205395"
                    />
                </TouchableOpacity>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>
                        Senac Coin
                    </Text>
                </View>
            </View>

            <View style={{paddingHorizontal: 20}}>
                <Text style={{ fontSize: 14, color: '#FFF' }}>
                    Saldo Senac Coin
                </Text>
                <View style={styles.saldo}>
                    <Image style={styles.image} source={require('../../assets/images/chinese-coin.png')} />
                    <Text style={{ fontSize: 15, color: '#FFF', marginLeft:10, fontWeight: 'bold' }}>{saldoFormatado}</Text>
                </View>
            </View>


            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom:10 }}>Extrato</Text>
            </View>

        </View>
    );
}

export default HeaderSenacCoin;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#205395',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: Constants.statusBarHeight,
        height: 150,
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#EF8F2F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10,
        elevation: 10
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        elevation: 10
    },
    icon: {
        marginRight: 17,
        elevation: 10
    },
    saldo:{
        flexDirection: 'row'
    },
    image:{
        width:20,
        height:20
    }
});