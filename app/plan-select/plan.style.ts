import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F3DC",
    zIndex: 0,
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
  },
  btnContainer: {
    position:"absolute",
    width: "100%",
    display: "flex",
    bottom:100,
    alignItems: "flex-end",
  },

  btn: {
    width: 148,
    height: 40,
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: "#89B449",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  btnTitle: {
    fontSize: 16,
    letterSpacing: 6.63,
    fontWeight: "500",
    color: "#fff",
  },
});
