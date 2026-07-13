import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackNavigator from './AuthStackNavigator';
import HomeTabNavigator from './MainTabNavigator';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';


const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthStackNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}