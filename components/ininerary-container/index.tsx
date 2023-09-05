import { View, Text, Image } from "react-native";
import { style } from "./container.style";





const images: { [key: string]: any } = {
  "TRA": require("../../assets/icons/TRA.png"),
  "HSR": require("../../assets/icons/HSR.png"),
  "WALK": require("../../assets/icons/WALK.png"),
  "MRT": require("../../assets/icons/MRT.png"),
}

const Container = (data: {
  path: string[],
  description: string,
  minutes: number
}) => {

  return (
    <View style={style.main}>
      <View style={style.inineraryContainer}>
        {data.path.map((transportation, index) => (
          <>
            <Image source={images[transportation]} height={34} width={34} />
            {index < data.path.length - 1 && <Text style={{ fontSize: 30 }}>➜</Text>}
          </>
        ))}
      </View>
      <View style={{ borderRadius: 30, backgroundColor: "#DBD469", justifyContent: "space-around", alignItems: "center", width: 285, height: 35, flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>{data.description}</Text>
        <Text style={{ color: "white", letterSpacing: 3, fontWeight: "600" }}>··········</Text>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>{data.minutes} min</Text>
      </View>
      <View style={style.shadowBox}></View>
    </View>
  );
};

export default Container;
