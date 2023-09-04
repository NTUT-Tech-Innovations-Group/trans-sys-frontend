import { Stack } from "expo-router";
import React from "react";
import { style } from "./plan.style";
import { SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Container from "../../components/container";
import Tab from "../../assets/icons/i-phone-13-rectangle-8.svg";

const PlanLocation = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={style.background}>
      <Stack.Screen
        options={{
          headerBackTitleVisible: true,
          headerTintColor: "#666",
        }}
      />
      <View style={style.header}>
        <Text style={style.mainHeader}>設定起點與目的地</Text>
        <Text style={style.subHeader}>Select departure and destination</Text>
      </View>
      <View style={style.inputContainer}>
        <View style={{ position: "absolute", right: 90, top: -33, zIndex: 1 }}>
          <Tab />
        </View>

        <Container />
        <View style={{ position: "absolute", top: 180, left: 90, zIndex: 1 }}>
          <Tab />
        </View>
        <Container />
      </View>
      <View style={style.btnContainer}>
        <View style={style.btn}>
          <Text onPress={() => console.log("hello")} style={style.btnTitle}>
            規劃
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlanLocation;
