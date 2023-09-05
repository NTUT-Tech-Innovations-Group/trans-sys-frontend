import { Stack } from "expo-router";
import React from "react";
import { style } from "./plan.style";
import { SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Container from "../../components/ininerary-container";
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
        <Text style={style.mainHeader}>選擇路線方案</Text>
        <Text style={style.subHeader}>Select your preferred itinerary</Text>
      </View>
      <View style={style.header}>
        <Container path={["TRA", "MRT", "Walk"]} description={"轉乘次數少"} times={38} />
      </View>


      <View style={style.btnContainer}>
        <View style={style.btn}>
          <Text onPress={() => console.log("hello")} style={style.btnTitle}>
            下一步
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlanLocation;
