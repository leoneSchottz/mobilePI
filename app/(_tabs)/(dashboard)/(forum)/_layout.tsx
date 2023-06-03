import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Forum from './Forum';
import Topico from './Topico';
import Perguntar from './Perguntar';

const Stack = createNativeStackNavigator();

const forumLayout = () => {
    return(
        <Stack.Navigator initialRouteName='Forum' screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen name='Forum' component={Forum}/>
                <Stack.Screen name='Topico' component={Topico}/>
                <Stack.Screen name='Perguntar' component={Perguntar}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default forumLayout