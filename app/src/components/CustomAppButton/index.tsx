import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsComponent {
  title: String;
  onPress: () => void;
}

const CustomAppButton = ({ title, onPress }: PropsComponent) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export { CustomAppButton };
