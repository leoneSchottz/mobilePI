import { Ionicons} from '@expo/vector-icons'
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  return (
      <View style={styles.container}>
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="#828282"
          style={ styles.icon }
        />
        {/* Input field */}
        <TextInput
          style= {styles.input}
          placeholder="Search"
        />
      </View>
  );
};
export default SearchBar


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 10
  },
  icon: {
    position: 'absolute',
    left: 5,
    bottom: 5
  },
  input: {
    height: 30,
    width: '100%',
    textAlign: 'left',
    marginLeft: 65
  }
})