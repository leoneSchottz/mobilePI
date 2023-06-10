import { View, Text,StyleSheet,TextInput} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";



const InputBox = () => {
    const [message, setMessage] = useState("");
    const onSendPress = () => {
        console.warn("Enviando a mensagem: ", message);
        setMessage("");
    };
  return (
    <View style={styles.container}>
        {/*Text Input*/}
        <TextInput value={message} onChangeText={setMessage}
        style={styles.input} placeholder="digite a sua mensagem"/>

        {/*Icon*/}
        <MaterialIcons onPress={onSendPress} style={styles.send} name="send" size={24} color="black" />



    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "whitesmoke",
      padding: 5,
      alignItems: "center",
    },
    input: {
      fontSize: 18,
  
      flex: 1,
      backgroundColor: "white",
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
  
      borderRadius: 50,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "lightgray",
    },
    send: {
      backgroundColor: "royalblue",
      padding: 7,
      borderRadius: 15,
      overflow: "hidden",
    },
  });

    

export default InputBox