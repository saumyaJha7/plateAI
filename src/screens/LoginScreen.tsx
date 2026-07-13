import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@react-navigation/elements"
import { useNavigation } from '@react-navigation/native';
import { setAuthStatus } from '../storage/authStorage';

type LoginScreenProps = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const LoginScreen = ({setIsAuthenticated} : LoginScreenProps) => {
    const navigation : any = useNavigation() ;
  return (
    <View>
      <Text>LoginScreen</Text>

      <Button onPress={async () => {
        setIsAuthenticated(true)
        await setAuthStatus(true);
      }}>Go to Home</Button>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})