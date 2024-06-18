import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

interface UserImageProps {
  size?: number;
  userImageUrl?: string;
  recentActivity?: boolean;
}

const UserImage = ({
  size,
  userImageUrl,
  recentActivity = true,
}: UserImageProps) => {
  return (
    <View style={styles.userImageContainer}>
      <LinearGradient
        colors={
          recentActivity ? ["#d330e8", "#ffbe5c"] : ["#e0e0e0", "#e0e0e0"]
        }
        style={styles.userImageExternalOutline}
      >
        <View
          style={[
            styles.userImageInternalOutline,
            { backgroundColor: recentActivity ? "#fff" : "#e0e0e0" },
          ]}
        >
          <View
            style={[
              styles.userImage,
              {
                height: size && size < 90 ? size : 45,
                width: size && size < 90 ? size : 45,
              },
            ]}
          >
            {!userImageUrl ? (
              <FontAwesomeIcon size={17} icon={faUser} />
            ) : (
              <Image source={{ uri: userImageUrl }} />
            )}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export { UserImage };
