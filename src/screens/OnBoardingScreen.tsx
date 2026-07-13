import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-navigation/elements"

const OnBoardingScreen = () => {
    const navigation : any = useNavigation() ;
  return (
    <View>
      <Text>OnBoardingScreen</Text>

    <Button onPress={() => navigation.replace('HomeTabNavigator')}>
Go to Home</Button>
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})