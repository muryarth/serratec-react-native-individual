import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabContainer: {
    // Posicionamento
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,

    // Sombra
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowColor: "#000",

    // Sombra no iOs?
    shadowOffset: {
      width: 0,
      height: 4,
    },

    // Sombra no Android
    elevation: 0.5,
  },

  tabLogo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },

  tabButtonsGroup: {
    flexDirection: "row",
    gap: 9,
  },
});

export { styles };
