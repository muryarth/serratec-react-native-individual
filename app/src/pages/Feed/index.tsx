// import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FeedPost } from "./FeedPost";
import { styles } from "./style";
import axios from "axios";

interface Post {
  id: number;
  autor: string;
  titulo: string;
  legenda: string;
  url: string;
  createdAt: Date;
}

export const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const ip = "192.168.100.41";

  const findAllPosts = async (url: string) => {
    try {
      const response = await axios.get(`${url}/posts`);
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findAllPosts(`http://${ip}:8080`);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Teste</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
