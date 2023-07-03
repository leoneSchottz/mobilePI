import { Stack } from 'expo-router';

const forumLayout = () => {
    return(
        <Stack initialRouteName='Forum' screenOptions={{headerShown: true}}>
                <Stack.Screen name='Comunidades' options={{ headerTitle: 'Fórum'}}/>
                <Stack.Screen name='[chapterAssuntoId]' options={{ headerTitle: 'Tópico'}}/>
                <Stack.Screen name='Forum' />
                <Stack.Screen name='Topico' />
                <Stack.Screen name='Perguntar'/>
                <Stack.Screen name='NovaPergunta'options={{ headerTitle: 'Nova Pergunta'}}/>
        </Stack>
    )
}

export default forumLayout