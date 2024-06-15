import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Feed = () => {
  const handleRedirect = () => {
    console.log("Teste!");
  };

  return (
    <View>
      <Text>
        <TouchableOpacity onPress={() => handleRedirect()}>
          <Text>Ir para usuário</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Feed;
