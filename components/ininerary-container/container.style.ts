import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  main: {
    zIndex: 2,
    overflow: "hidden",
    backgroundColor: "#fff",
    width: 312,
    height: 138,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    // justifyContent:"space-around",
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

  inineraryContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    height: "60%",
    shadowOpacity: 0,
  },



});
