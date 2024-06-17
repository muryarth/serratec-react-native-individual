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
      <Text>{post.titulo}</Text>
      <Text>{post.autor}</Text>
      <Image source={{ uri: post.url }} style={{ width: 100, height: 100 }} />
    </>
  );
};
