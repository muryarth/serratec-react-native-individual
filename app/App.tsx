import "react-native-gesture-handler"; // -> Para funcionar corretamente com o Stack Navigation
import { StatusBar } from "expo-status-bar";
import { AppRouter } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppRouter />
    </>
  );
}
