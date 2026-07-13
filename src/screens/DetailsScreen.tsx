import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-navigation/elements"

const DetailsScreen = () => {
    const navigation : any = useNavigation() ;
  return (
    <View>
      <Text>DetailsScreen</Text>

    <Button onPress={() => navigation.navigate('Cart')}>Go to Cart</Button>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})