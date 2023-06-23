import { View, Text, Image,StyleSheet,Pressable } from "react-native";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "expo-router";
dayjs.extend(relativeTime);



const ChatListItem = ({ chat }) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push({pathname: './Chat', params: {id:chat.id,name: chat.user.name}})}
      style={styles.container}>
      <Image source={{ uri: chat.user.image }} style={styles.image} />

      <View style={styles.content}>
		<View style={styles.row}>
	        <Text style={styles.name}numberOfLines={1}>{chat.user.name}</Text>
		    <Text style={styles.subTitle}>{dayjs(chat.lastMessage.time).fromNow()}</Text>
	    </View>

        <Text numberOfLines={2}style={styles.subTitle}>{chat.lastMessage.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "stretch",
      marginHorizontal: 10,
      marginVertical: 5,
      height: 70,
      flex: 1
    },
    image: {
      width: 60,
      aspectRatio: 1,
      borderRadius: 30,
      marginRight: 10,
    },
    content: {
      flex: 1,
      borderBottomColor: "lightgray",
      borderBottomWidth: 0.5,
      
    },
    row: {
      flexDirection: "row",
      marginBottom: 5,
    },
    name: {
      fontWeight: "bold",
      flex: 1,
    },
    subTitle: {
      color: "grey",
    },
  });


export default ChatListItem;