import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  main: {
    zIndex: 4,
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

  tabText: {
    position: "absolute",
    color: "#89B449",
    fontFamily: "Inter-500",
    zIndex: 5,
    left: 40,
    top: 2,
    fontSize: 20,
    letterSpacing: 4.6,
  },

  inputContainer: {
    width: "100%",
    shadowOpacity: 0,
  },

  input: {
    backgroundColor: "#ECECEC",
    display: "flex",
    flexDirection: "row",
    gap: 7,
    overflow: "hidden",
    marginHorizontal: 19,
    marginTop: 35,
    borderRadius: 30,
    padding: 10,
    shadowColor: "transparent",
  },

  location: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
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
