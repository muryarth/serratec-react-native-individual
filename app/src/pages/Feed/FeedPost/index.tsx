import { Text, Image, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faComment } from "@fortawesome/free-regular-svg-icons/faComment";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";

import { UserInfo } from "../FeedUserInfo";

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
  iconSize?: number;
}

export const FeedPost = ({ post, iconSize = 24 }: FeedPostProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleToggleShowAll = () => setShowAll(!showAll);

  return (
    <View>
      {/* Header */}
      <UserInfo displayName={post.autor} extraInfo={post.titulo} />

      {/* Imagem */}
      <Image source={{ uri: post.url }} style={styles.feedImage} />

      {/* Footer */}
      <View style={styles.feedFooter}>
        {/* Ícones */}
        <View style={styles.feedFooterInteractions}>
          <View style={styles.feedFooterInteractionsLeft}>
            <FontAwesomeIcon icon={faHeartRegular} size={iconSize} />
            <FontAwesomeIcon icon={faComment} size={iconSize} />
            <FontAwesomeIcon icon={faPaperPlane} size={iconSize} />
          </View>
          <FontAwesomeIcon icon={faBookmark} size={iconSize} />
        </View>

        {/* Legenda */}
        <View style={styles.feedFooterDescription}>
          <View style={{ height: showAll ? "auto" : 36 }}>
            <Text style={styles.feedFooterSimpleText}>
              <Text style={styles.boldText}>{post.autor}</Text> {post.legenda}
            </Text>
          </View>
          {post.autor.length + post.legenda.length > 170 && (
            <TouchableOpacity onPress={handleToggleShowAll}>
              <Text style={styles.boldText}>
                {!showAll ? "Ver tudo..." : "Recolher..."}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
