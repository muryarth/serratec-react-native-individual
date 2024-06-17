// import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

const Feed = () => {
  const findAllPosts = async () => {

    const url = "http://127.0.0.1:8080/posts";
    // const url = "https://narutodb.xyz/api/akatsuki";

    axios.get(url)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    findAllPosts();
  }, []);

  return (
    <SafeAreaView>
      <Text>Feed</Text>
    </SafeAreaView>
  );
};

export default Feed;
