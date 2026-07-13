import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-navigation/elements"
import { setBoardingStatus } from '../storage/authStorage';

type OnBoardingScreenProps = {
    setHasSeenBoarding: (value: boolean) => void;
}

const OnBoardingScreen = ({setHasSeenBoarding}: OnBoardingScreenProps) => {
    const navigation : any = useNavigation() ;
  return (
    <View>
      <Text>OnBoardingScreen</Text>

    <Button onPress={async () => {
        setHasSeenBoarding(true);
        await setBoardingStatus(true);
        
        navigation.replace('Login');
    }}>Get Started</Button>
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})