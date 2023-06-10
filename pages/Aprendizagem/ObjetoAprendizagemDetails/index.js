import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList,Button } from 'react-native';
import HeaderUc from '../../../components/Header/HeaderUc';
import { useNavigation } from '@react-navigation/native';


export default function ObjetoAprendizagemDetails(props) {
    const navigation = useNavigation();
    const id = props.route.params.id;
    const descricao = props.route.params.descricao;
    return (
    <>  
        <HeaderUc data={props.route.params.descricao} />  
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Descrição do Objeto</Text>
        </View>
            <Text style={styles.text}>
                Tipo: PDF
            </Text>
            <Text style={styles.text}>
                Tamanho: 1,5 MB
            </Text>
            <Text style={styles.text}>
                Criado: 16/05/2021
            </Text>
            <Text style={styles.text}>
                Última modificação: 25/06/2021
            </Text>
         
        </View>

        <Button title="Baixar Arquivo"/>
    </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentTitle: {
        width: '95%',
        borderRadius: 50,
        backgroundColor: '#EF8F2F',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 3,
        marginTop: 5,
        elevation: 10,
        alignSelf: 'center'
      },
      text:{
        fontSize: 16,
        color: '#000',
        textAlign: 'justify',
        margin: 10,
        },
        title: {
            color: 'white',
            fontSize: 15,

            },
    
})