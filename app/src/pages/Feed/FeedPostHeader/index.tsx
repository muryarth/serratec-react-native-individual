import { View, Text } from "react-native";
import { styles } from "./style";
import { UserImage } from "../../../components/UserImage";

interface UserProps {
  displayName: string;
  extraInfo?: string;
  imageUrl?: string;
}

const FeedPostHeader = ({ displayName, extraInfo, imageUrl }: UserProps) => {
  return (
    <View style={styles.feedUserSection}>
      <UserImage userImageUrl={imageUrl} size={44} />
      <View>
        <Text style={styles.userNameText}>{displayName}</Text>
        {extraInfo && <Text style={styles.userExtraText}>{extraInfo}</Text>}
      </View>
    </View>
  );
};

export { FeedPostHeader };
