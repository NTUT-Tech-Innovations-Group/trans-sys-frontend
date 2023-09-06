import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F3DC",
    zIndex: 1,
  },

  header: {
    marginTop: 40,
    marginBottom: 80,
    marginLeft: 40,
  },

  mainHeader: {
    color: "#666",
    fontFamily: "Inter-700",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 3.6,
  },

  subHeader: {
    color: "#818181",
    fontFamily: "Inter-500",
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 1.95,
  },

  inputContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  btnContainer: {
    marginTop: 43,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    width: 170,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#89B449",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  btnTitle: {
    fontSize: 26,
    letterSpacing: 6.63,
    fontFamily: "Inter-700",
    color: "#fff",
  },
});
