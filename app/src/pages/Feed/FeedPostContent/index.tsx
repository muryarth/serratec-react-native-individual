import { Image } from "react-native";
import { styles } from "./style";
import { Post } from "../types";
import { FeedPostHeader } from "../FeedPostHeader";
import { FeedPostFooter } from "../FeedPostFooter";

interface FeedPostContentProps {
  post: Post;
}

export const FeedPostContent = ({ post }: FeedPostContentProps) => {
  return (
    <>
      <FeedPostHeader displayName={post.autor} extraInfo={post.titulo} />
      <Image source={{ uri: post.url }} style={styles.feedImage} />
      <FeedPostFooter post={post} />
    </>
  );
};
