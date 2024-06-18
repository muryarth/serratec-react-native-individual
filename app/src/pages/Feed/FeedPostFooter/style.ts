import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  feedFooter: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  feedFooterInteractions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  feedFooterInteractionsLeft: {
    flexDirection: "row",
    gap: 12,
  },

  feedFooterDescription: {
    paddingVertical: 8,
    gap: 3,
  },

  feedFooterSimpleText: {
    textAlign: "justify",
  },

  boldText: {
    fontWeight: "bold",
  },
});
