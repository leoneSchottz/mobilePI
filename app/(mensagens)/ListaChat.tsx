import chats from "../../assets/data/chats.json";
import {View,Text,FlatList} from "react-native";
import ChatListItem from "../../components/mensagens/ChatListItem";


const ChatsScreen = () => {
    return (
        <View>
            <FlatList
                data={chats}
                renderItem={({item}) => <ChatListItem chat={item}/>}
            />
        </View>
    );
};

export default ChatsScreen;