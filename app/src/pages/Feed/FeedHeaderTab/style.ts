import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderBottomColor: "#ccc",
  },

  tabLogo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },

  tabButtonsGroup: {
    flexDirection: "row",
    gap: 18,
  },
});

export { styles };
