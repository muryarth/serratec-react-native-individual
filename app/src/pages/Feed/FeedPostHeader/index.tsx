import { View, Text } from "react-native";
import { styles } from "./style";
import { styles as globalStyle } from "../style";
import { UserImage } from "../../../components/UserImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

interface UserProps {
  displayName: string;
  extraInfo?: string;
  imageUrl?: string;
}

const FeedPostHeader = ({ displayName, extraInfo, imageUrl }: UserProps) => {
  return (
    <View style={styles.feedUserSection}>
      <View style={styles.feedUserInfo}>
        <UserImage userImageUrl={imageUrl} size={30} />
        <View>
          <Text style={[styles.userNameText, globalStyle.boldText]}>
            {displayName}
          </Text>
          {extraInfo && <Text style={styles.userExtraText}>{extraInfo}</Text>}
        </View>
      </View>
      <FontAwesomeIcon icon={faEllipsis} size={24} />
    </View>
  );
};

export { FeedPostHeader };
