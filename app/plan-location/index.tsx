import { Stack, Link } from 'expo-router'
import React from 'react'
import { style } from './plan.style'
import { SafeAreaView, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import Container from '../../components/container'
import Question from 'assets/icons/question.svg'
import DownArrow from 'assets/icons/down-arrow.svg'

const PlanLocation = () => {
  const [fontsLoaded] = useFonts({
    'Inter-700': require('assets/fonts/Inter-700.ttf'),
    'Inter-500': require('assets/fonts/Inter-500.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={style.background}>
      <Stack.Screen
        options={{
          headerBackTitleVisible: true,
          headerTintColor: '#666',
          headerRight: () => <Question />,
        }}
      />
      <View style={style.header}>
        <Text style={style.mainHeader}>設定起點與目的地</Text>
        <Text style={style.subHeader}>Select departure and destination</Text>
      </View>
      <View style={style.inputContainer}>
        <Container
          tabStyle={{ position: 'absolute', right: 30, top: -30, zIndex: 4 }}
          text={'出發點'}
          isImage={true}
        />
        <View style={{ left: 80, marginBottom: 14 }}>
          <DownArrow />
        </View>
        <Container
          tabStyle={{ position: 'absolute', left: 30, top: -30, zIndex: 4 }}
          text={'目的地'}
          isImage={false}
        />
      </View>
      <View style={style.btnContainer}>
        <View style={style.btn}>
          <Link
            href={'/plan-select'}
            onPress={() => console.log('hello')}
            style={style.btnTitle}
          >
            規劃
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PlanLocation
