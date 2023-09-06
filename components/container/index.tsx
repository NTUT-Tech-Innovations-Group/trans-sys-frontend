import { View, Text, TextInput, Image } from 'react-native'
import { style } from './container.style'
import { useFonts } from 'expo-font'
import Tab from 'assets/icons/i-phone-13-rectangle-8.svg'
import Search from 'assets/icons/search.svg'

const Container = (data: {
  tabStyle: object
  text: string
  isImage: boolean
}) => {
  const [fontsLoaded] = useFonts({
    'Inter-500': require('assets/fonts/Inter-500.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View>
      <View style={data.tabStyle}>
        <Text style={style.tabText}>{data.text}</Text>
        <Tab />
      </View>
      <View style={style.main}>
        <View style={style.inputContainer}>
          <View style={style.input}>
            <Search />
            <TextInput
              style={{
                width: '83%',
              }}
            />
          </View>
          <View style={style.location}>
            {data.isImage && (
              <Image source={require('assets/icons/location.png')} />
            )}

            <Text style={{ fontFamily: 'Inter-500' }}>
              {data.isImage ? '使用目前定位' : ''}
            </Text>
          </View>
          <View style={style.bottomContainer} />
        </View>
        <View style={style.shadowBox}></View>
      </View>
    </View>
  )
}

export default Container
