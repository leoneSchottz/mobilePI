import { Stack, useRouter } from "expo-router";
import { Text } from "react-native";

import { Octicons } from '@expo/vector-icons';

const ChatNav = () => {

  const router = useRouter();

  return (<Stack screenOptions={{headerShown: true}}>
    <Stack.Screen name="ListaChat" options={{
      headerLeft: () => <Octicons name="chevron-left" size={24} color="black" onPress={() => router.back()}/>,
      headerTitle: 'Mensagens'
    }}/>
    <Stack.Screen name="Chat" />
  </Stack>)
}

export default ChatNav