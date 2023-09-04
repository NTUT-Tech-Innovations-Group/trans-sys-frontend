import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  main: {
    zIndex: 2,
    overflow: "hidden",
    backgroundColor: "#fff",
    width: 312,
    height: 153,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
  },
  shadowBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },

  inputContainer: {
    width: "100%",
    shadowOpacity: 0,
  },

  input: {
    backgroundColor: "#ECECEC",
    marginHorizontal: 19,
    marginTop: 35,
    borderRadius: 30,
    padding: 10,
    shadowColor: "transparent",
  },
  location: {
    textAlign: "center",
    paddingVertical: 13,
    color: "#666",
    fontSize: 14,
    letterSpacing: 3.22,
  },

  bottomContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#DBD469",
  },
});
