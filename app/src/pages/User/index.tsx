import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const User = () => {
  const navigator = useNavigation();

  const handleRedirect = () => {
    navigator.navigate("StackFeed");
  };

  return (
    <View>
      <Text>User</Text>
      <TouchableOpacity onPress={handleRedirect}>
        <Text>Ir para o Feed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;
