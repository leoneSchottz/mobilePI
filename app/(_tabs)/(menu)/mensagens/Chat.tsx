import { View, Text, ImageBackground,StyleSheet,FlatList} from "react-native";
import messages from "../../../../assets/data/messages.json";

import { useRoute,useNavigation } from "@react-navigation/native";
import{useEffect} from "react";
import InputBox from "../../../../components/mensagens/InputBox";
import Message from "../../../../components/mensagens/Message";
import { Stack, useLocalSearchParams, useSearchParams } from "expo-router";

type chatParams = {
  name: string;
}

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const props = useLocalSearchParams<chatParams>()


  // useEffect(() => {

  //     navigation.setOptions({title: route.params.name});
  //   }, [route.params.name]);

  return (
    <ImageBackground source={require('../../../../assets/images/BG.png')} style={styles.bg}>
      <Stack.Screen
        options={{
          title: props.name,
        }}
      />
        <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
        />
        <InputBox/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  
    bg: {
      flex: 1,
    },
    list: {
        padding: 10,
    },
  });
  
  

export default ChatScreen;

