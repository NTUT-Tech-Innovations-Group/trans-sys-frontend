import { View, Text, TextInput } from "react-native";
import { style } from "./container.style";

const Container = () => {
  return (
    <View style={style.main}>
      <View style={style.inputContainer}>
        <TextInput style={style.input} />
      </View>
      <Text style={style.location}>使用目前定位</Text>
    </View>
  );
};

export default Container;
