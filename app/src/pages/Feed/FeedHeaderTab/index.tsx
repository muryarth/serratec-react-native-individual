import { View, Text, Image } from "react-native";
import { styles } from "./style";
import InstagramLogo from "../../../assets/insta-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const FeedHeaderTab = () => {
  return (
    <View style={styles.tabContainer}>
      <Image
        style={{
          width: 100,
          height: 30,
          resizeMode: "contain",
        }}
        source={InstagramLogo}
      />
      <View style={styles.tabButtonsGroup}>
        <FontAwesomeIcon icon={faHeart} size={25} />
        <FontAwesomeIcon icon={faComment} size={25} />
      </View>
    </View>
  );
};

export default FeedHeaderTab;
