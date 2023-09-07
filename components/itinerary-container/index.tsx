import { View, Text, Image } from 'react-native'
import { style } from './container.style'
import { useFonts } from 'expo-font'
import Arrow from '../../assets/icons/arrow.svg'

const images: { [key: string]: any } = {
  TRA: require('../../assets/icons/TRA.png'),
  HSR: require('../../assets/icons/HSR.png'),
  WALK: require('../../assets/icons/WALK.png'),
  MRT: require('../../assets/icons/MRT.png'),
}

const Container = (data: {
  path: string[]
  description: string
  minutes: number
}) => {
  const [fontsLoaded] = useFonts({
    'Inter-500': require('assets/fonts/Inter-500.ttf'),
    'Inter-600': require('assets/fonts/Inter-600.ttf'),
    'Inter-700': require('assets/fonts/Inter-700.ttf'),
  })

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
  )
}

export default Container
