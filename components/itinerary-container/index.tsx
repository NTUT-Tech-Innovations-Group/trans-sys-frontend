import { View, Text, Image } from "react-native";
import { style } from "./container.style";

import Arrow from "../../assets/icons/arrow.svg";

const images: { [key: string]: any } = {
  TRA: require("../../assets/icons/TRA.png"),
  HSR: require("../../assets/icons/HSR.png"),
  WALK: require("../../assets/icons/WALK.png"),
  MRT: require("../../assets/icons/MRT.png"),
};

const Container = (data: {
  path: string[];
  description: string;
  minutes: number;
}) => {
  return (
    <View style={style.main}>
      <View style={style.itineraryTop}>
        {data.path.map((transportation, index) => (
          <>
            <Image source={images[transportation]} height={34} />
            {index < data.path.length - 1 && <Arrow></Arrow>}
          </>
        ))}
      </View>
      <View style={style.itineraryBottom}>
        <Text style={style.description}>{data.description}</Text>
        <Text style={style.dot}>··········</Text>
        <Text style={style.estimateMinutes}>{data.minutes} min</Text>
      </View>
      <View style={style.shadowBox}></View>
    </View>
  );
};

export default Container;
