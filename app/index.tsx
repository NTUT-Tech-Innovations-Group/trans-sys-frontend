import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/home.jpeg")}
        imageStyle={{ backgroundColor: "lightgray" }}
        style={styles.image}
      />
      <LinearGradient
        style={styles.mask}
        locations={[0.61, 0.2]}
        colors={["white", "transparent"]}
      />
      <View
        style={{
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainer.sub}> 發現全新移動方式 </Text>
          <Text style={styles.headerContainer.main}>Transportation GO !</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Link href={"/plan-location"} style={styles.buttonTitle}>
            Let's Go {" ->"}
          </Link>
        </View>
      </View>
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
    resizeMode: "contain",
    width: 435,
    height: 653,
    zIndex: 0,
  },

  headerContainer: {
    sub: {
      fontSize: 16,
      letterSpacing: 5.04,
    },

    main: {
      fontSize: 30,
      color: "#0F4330",
      letterSpacing: 1.5,
      textShadowColor: "rgba(0, 0, 0, 0.25)",
      textShadowOffset: { width: 2, height: 3 },
      textShadowRadius: 4,
    },

    display: "flex",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    top: -65,
    backgroundColor: "transparent",
    zIndex: 2,
  },

  buttonContainer: {
    zIndex: 2,
    backgroundColor: "#89B449",
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 56,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
  },

  buttonTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.3,
  },

  mask: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 710,
    top: 224,
  },
});
