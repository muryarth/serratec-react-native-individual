import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomAppButton, CustomAppTextInput } from "../../components";
import { styles } from "./style";
import InstagramLogo from "../../assets/insta-logo.webp";

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
