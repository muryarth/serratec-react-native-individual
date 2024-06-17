import { Text, Image } from "react-native";

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
      <Image
        source={{ uri: post.url }}
        style={{ width: "100%", height: 300 }}
      />
      <Text>
        {post.autor} <Text>{post.legenda}</Text>
      </Text>
    </>
  );
};
