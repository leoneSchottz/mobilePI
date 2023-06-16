import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import CardEncontro from '../../../components/Cards/CardEncontro';
import { API } from '../../../http/API';

export default function Encontros({grupoId}) {
    const navigation = useNavigation();
    const [encontros, setEncontros] = useState([])
    const estudanteId = 1

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await API.get(`Encontro/FilterByGrupoIdByEstudanteId/${grupoId}/${estudanteId}`);
            setEncontros(data);

            } catch (error) {
                alert(error)
            }
        }

        fetchData();

    },[])

    return (
        <View>
            <FlatList
                numColumns={3}
                horizontal={false}
                data={encontros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardEncontro encontro={item} />}
            />
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})