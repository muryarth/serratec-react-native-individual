import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  feedUserSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingVertical: 13,
  },

  feedUserInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  userNameText: {
    fontSize: 14,
  },

  userExtraText: {
    fontSize: 12,
  },
});
