import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../pages/Feed";
import User from "../pages/User";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackFeed" component={Feed} />
      <Stack.Screen name="StackUser" component={User} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
