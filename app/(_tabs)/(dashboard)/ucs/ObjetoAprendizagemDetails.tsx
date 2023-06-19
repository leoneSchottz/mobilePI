import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HeaderUc from '../../../../components/Header/HeaderUc';
import { useLocalSearchParams } from 'expo-router';
import { API } from '../../../../http/API';
import { ObjetoAprendizagem } from '../../../../models/ObjetoAprendizagem';


export default function ObjetoAprendizagemDetails() {

    const {id, descricao} = useLocalSearchParams();
    const [objeto, setObjeto] = useState<ObjetoAprendizagem>()

    useEffect(() => {
        async function getObjetoAprendizagem() {
            try {
                const {data} = await API.get(`ObjetoAprendizagem/${id}`);
                setObjeto(data);
            } catch (err) {
                alert(err);
            }
        }
        getObjetoAprendizagem();
    }, [id]);
    return (
    <>
        <HeaderUc data={descricao} />
       {objeto && <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Descrição do Objeto</Text>
            </View>
            <Text style={styles.text}>
                id do objeto: {objeto.id}
            </Text>
            <Text style={styles.text}>
                status do objeto: {objeto.status}
            </Text>
            <Text style={styles.text}>
                Grau de dificuldade: {objeto.grauDificuldade?.descricao}
            </Text>
            <Text style={styles.text}>
               --- este endpoint nao traz informaçoes sobre o tamanho do arquivo, quando foi criado, ultima modificacao, tipo de arquivo ---
            </Text>
        </View>}

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