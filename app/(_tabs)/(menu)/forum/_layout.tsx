import { Stack } from 'expo-router';

const forumLayout = () => {
    return(
        <Stack initialRouteName='Forum' screenOptions={{headerShown: true}}>
                <Stack.Screen name='Forum' />
                <Stack.Screen name='Topico' />
                <Stack.Screen name='Perguntar'/>
        </Stack>
    )
}

export default forumLayout