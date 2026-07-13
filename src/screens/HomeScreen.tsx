import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-navigation/elements"

const HomeScreen = () => {
    const navigation : any = useNavigation() ;
  return (
    <View>
      <Text>HomeScreen</Text>

    <Button onPress={() => navigation.navigate('Details')}>Go to Details</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})