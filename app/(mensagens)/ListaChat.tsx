import chats from "../../assets/data/chats.json";
import {View,Text,FlatList} from "react-native";
import ChatListItem from "../../components/mensagens/ChatListItem";
import { FlashList } from "@shopify/flash-list";


const ChatsScreen = () => {
    return (

            <FlashList
                data={chats}
                renderItem={({item}) => <ChatListItem chat={item}/>}
                estimatedItemSize={70}
            />

    );
};

export default ChatsScreen;