import { View, Text, TextInput } from "react-native";
import { style } from "./container.style";
import { Directions } from "react-native-gesture-handler";

interface ContainerProps {
  path: string[];
  description: string;
  times: number;
}

const Container: React.FC<ContainerProps> = ({ path, description, times }) => {

  return (
    <View style={style.main}>
      <View style={style.inineraryContainer}>
        
      </View>
      <View style={{ width: "100%", height: 60 }}></View>
      <View style={{ borderRadius: 30, backgroundColor: "#DBD469", justifyContent: "space-around", alignItems: "center", width: 285, height: 35, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, color: "white" ,fontWeight: "600"}}>{description}</Text>
        <Text style={{ fontSize: 20, color: "white" ,fontWeight: "600"}}>....</Text>
        <Text style={{ fontSize: 20, color: "white" ,fontWeight: "600"}}>{times}</Text>
      </View>
      <View style={style.shadowBox}></View>
    </View>
  );
};

export default Container;
