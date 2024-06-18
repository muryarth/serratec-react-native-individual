import { Text, Image } from "react-native";
import { styles } from "./style";

interface Post {
  id: number;
  autor: string;
  titulo: string;
  legenda: string;
  url: string;
  createdAt: Date;
}

interface FeedPostProps {
  post: Post;
}

export const FeedPost = ({ post }: FeedPostProps) => {
  return (
    <>
      <Text>{post.autor}</Text>
      <Image source={{ uri: post.url }} style={styles.feedImage} />
      <Text>
        <Text style={styles.feedBoldText}>{post.autor}</Text> {post.legenda}
      </Text>
    </>
  );
};
