import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoutes";

const AppRouter = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export { AppRouter };
