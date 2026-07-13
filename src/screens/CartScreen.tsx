import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-navigation/elements"

const CartScreen = () => {
    const navigation : any = useNavigation() ;
  return (
    <View>
      <Text>CartScreen</Text>

    <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})