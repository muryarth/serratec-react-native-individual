import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoutes";
import { SafeAreaView } from "react-native-safe-area-context";

const AppRouter = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export { AppRouter };
