import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, Image, View, SafeAreaView, Text } from "react-native";

export default function App() {
  const [text, setText] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("./assets/home.jpg")} />
      <LinearGradient
        style={styles.mask}
        locations={[0.8, 0.4]}
        colors={["white", "transparent"]}
      >
        <Text>Hello</Text>
      </LinearGradient>
      {/* <View style={styles.fadeContainer}>
        <Text>Hello</Text>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 435,
    height: 653,
    zIndex: 0,
  },
  header: {
    top: -35,
    fontSize: 16,
    letterSpacing: 5,
  },
  mask: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 620,
    top: 224,
  },
  fadeContainer: {
    zIndex: 10,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 40,
    width: "100%",
    height: 100,
  },
});
