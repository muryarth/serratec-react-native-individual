import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Touchable } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import InstagramLogo from "../../assets/insta-logo.webp";
import { styles } from "./style";
import { CustomAppButton } from "../../components/CustomAppButton";
import { CustomAppTextInput } from "../../components/CustomAppTextInput";
import { SafeAreaView } from "react-native-safe-area-context";

export const User = () => {
  const navigator = useNavigation();

  const handleRedirect = () => {
    navigator.navigate("StackFeed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Português (Brasil)</Text>

      <View style={styles.registrationFormCard}>
        <Image style={styles.appLogo} source={InstagramLogo} />

        <CustomAppTextInput
          placeholder={"Telefone, usuário, email"}
          secureTextEntry={false}
          onChangeValue={() => {}}
        />

        <CustomAppTextInput
          placeholder={"Senha "}
          secureTextEntry={true}
          onChangeValue={() => {}}
        />

        <CustomAppButton title={"Entrar"} onPress={handleRedirect} />

        <Text>Busque ajuda para entrar.</Text>
      </View>

      <Text>Não tem uma conta? Cadastre-se.</Text>
    </SafeAreaView>
  );
};