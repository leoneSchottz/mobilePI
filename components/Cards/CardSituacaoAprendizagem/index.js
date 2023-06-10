import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Avatar, Card, IconButton } from 'react-native-paper';

export function CardSituacaoAprendizagem({ data }) {
    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    const id = data.id;
    const descricao = data.descricao;

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ObjetoAprendizagenScreem", { id, descricao })}>
            <View style={styles.start}>
    
            <Card.Title
                title={data.descricao}
                left={(props) => <Avatar.Icon backgroundColor='#205395'{...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
            />

                
  
                {/* <Text style={styles.text}>
                    {data.descricao}
                </Text> */}
            </View>

        </TouchableOpacity>









    )
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: '#205395',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // marginBottom: 4,
            marginTop: 4,
            paddingVertical: 12,
            paddingHorizontal: 12,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#8a8a8a',
            width: '95%',
            alignSelf: 'center'
        },
        card: {
            width: '95%',
            height: 70,
            marginTop: 8,
            elevation: 10,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 4,
            borderWidth: 0.25,
            borderColor: 'black',
        },
        text: {
            color: '#FFF',
            elevation: 10,
            // fontSize: 15,
            // fontWeight: 'bold'
        },
        start: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        },
        end: {
            width: 40,
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
        },
        checkBox: {
            width: 15,
            height: 15,
            borderWidth: 1,
            borderColor: '#FFF',
            backgroundColor: '#FFF'
        },
        cardImage: {
            width: 30,
            height: 30,
            marginRight: 15,
        }
});