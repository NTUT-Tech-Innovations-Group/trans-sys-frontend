import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F3DC",
  },

  header: {
    marginVertical: 50,
    marginLeft: 40,
  },

  mainHeader: {
    color: "#666",
    fontFamily: "Inter-Bold",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 3.6,
  },

  subHeader: {
    color: "#818181",
    fontFamily: "Inter-Bold",
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 1.95,
  },

  inputContainer: {
    height: 450,
    width: "100%",
    display: "flex",
    gap: 60,
    alignItems: "center",
    backgroundColor: "white",
  },
});
