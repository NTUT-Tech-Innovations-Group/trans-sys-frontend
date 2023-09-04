import { View, Text, TextInput } from "react-native";
import { style } from "./container.style";

const Container = () => {
  return (
    <View style={style.main}>
      <View style={style.inputContainer}>
        <TextInput style={style.input} />
        <Text style={style.location}>使用目前定位</Text>
        <View style={style.bottomContainer} />
      </View>
      <View style={style.shadowBox}></View>
    </View>
  );
};

export default Container;
