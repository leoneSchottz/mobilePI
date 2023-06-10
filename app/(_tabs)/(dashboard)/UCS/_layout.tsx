import React from 'react';
import { Stack } from 'expo-router'


export default () => (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="[id]" options={{ title: 'UC' }} />
        <Stack.Screen name="SituacoesAprendizagens" options={{ title: 'Aprendizagens' }} />
        <Stack.Screen name="ObjetoAprendizagem" options={{ title: 'Aprendizagens' }} />
        <Stack.Screen name="ObjetoAprendizagemDetails" options={{ title: 'Objeto Details' }} />
    </Stack>
)