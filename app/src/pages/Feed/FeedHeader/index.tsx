import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { UserImage } from "../../../components/UserImage";
import { styles } from "./style";

const FeedHeader = () => {
  const users = [
    { id: 1, name: "paula.andrade" },
    { id: 2, name: "arthur.mury" },
    { id: 3, name: "lucas.santos" },
    { id: 4, name: "ana.oliveira" },
    { id: 5, name: "gustavo.silva" },
    { id: 6, name: "carla.machado" },
    { id: 7, name: "pedro.rodrigues" },
    { id: 8, name: "marina.almeida" },
    { id: 9, name: "felipe.costa" },
    { id: 10, name: "julia.souza" },
    { id: 11, name: "bruno.nunes" },
    { id: 12, name: "camila.ferreira" },
    { id: 13, name: "thiago.pereira" },
    { id: 14, name: "rafaela.gomes" },
    { id: 15, name: "daniel.santana" },
    { id: 16, name: "isabela.cruz" },
    { id: 17, name: "ricardo.albuquerque" },
    { id: 18, name: "patricia.lopes" },
    { id: 19, name: "leonardo.mendes" },
    { id: 20, name: "andreia.ribeiro" },
    { id: 21, name: "rodrigo.cardoso" },
    { id: 22, name: "vanessa.monteiro" },
  ];

  return (
    <FlatList
      horizontal={true}
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.userInfoContainer}>
          <UserImage size={63} />
          <View style={styles.userInfoTextContainer}>
            <Text style={styles.userInfoNameText}>{item.name}</Text>
          </View>
        </View>
      )}
    />
  );
};

export { FeedHeader };
