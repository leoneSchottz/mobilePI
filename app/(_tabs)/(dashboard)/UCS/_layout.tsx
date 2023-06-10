import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';


import Notificacao from '../../../../pages/Notificacao';
import SituacoesAprendizagens from '../../../../pages/Aprendizagem/SituacoesAprendizagem';
import ObjetoAprendizagem from '../../../../pages/Aprendizagem/ObjetoAprendizagem';
import ObjetoAprendizagemDetails from '../../../../pages/Aprendizagem/ObjetoAprendizagemDetails';
import UcDetails from '../../../../pages/Aprendizagem/UCDetails';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="UcDetailScreem" component={UcDetails} options={{ title: 'UC' }} />
            <Stack.Screen name="SituacoesAprendizagensScreem" component={SituacoesAprendizagens} options={{ title: 'Aprendizagens' }} />
            <Stack.Screen name="ObjetoAprendizagenScreem" component={ObjetoAprendizagem} options={{ title: 'Aprendizagens' }} />
            <Stack.Screen name="NotificacaoScreem" component={Notificacao} options={{ headerShown: true, title: 'Notificações' }} />
            <Stack.Screen name="ObjetoDetailsScreem" component={ObjetoAprendizagemDetails} options={{ title: 'Objeto Details' }} />
        </Stack.Navigator>
    );
}

export default StackRoutes;