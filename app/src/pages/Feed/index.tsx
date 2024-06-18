// import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FeedPostContent } from "./FeedPostContent";
import { styles } from "./style";
import { FeedHeader } from "./FeedHeader";
import { Post } from "./types";
import axios from "axios";

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
      <FlatList
        ListHeaderComponent={FeedHeader}
        data={posts}
        renderItem={({ item }) => <FeedPostContent post={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
