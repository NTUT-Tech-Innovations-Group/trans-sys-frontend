import { Link, Stack } from "expo-router";
import React from "react";
import { style } from "./plan.style";
import { SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Container from "../../components/container";

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
        <Container />
        <Container />
      </View>
    </SafeAreaView>
  );
};

export default PlanLocation;
