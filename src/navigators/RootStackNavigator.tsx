import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigator from "./AuthStackNavigator";
import HomeTabNavigator from "./MainTabNavigator";
import CartScreen from "../screens/CartScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

type RootStackProps = {
  isAuthenticated: boolean;
  hasSeenBoarding: boolean;
  cartCount: number;
  setIsAuthenticated: (value: boolean) => void;
  setHasSeenBoarding: (value: boolean) => void;
  setCartCount: (value : number) => void;
};

export default function RootStack({
  isAuthenticated,
  hasSeenBoarding,
  setIsAuthenticated,
  setHasSeenBoarding,
  setCartCount,
  cartCount
}: RootStackProps) {
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
        <Stack.Screen
          name="HomeTabs"
          options={{ headerShown: false }}
        >
          {() => <HomeTabNavigator setIsAuthenticated={setIsAuthenticated} cartCount={cartCount}/>}
        </Stack.Screen>
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen
          name="Details"
        >
          {() => <DetailsScreen setCartCount={setCartCount}/>}
        </Stack.Screen>
        </>
      ) : (
        <Stack.Screen name="Auth" options={{ headerShown: false }}>
          {() => <AuthStackNavigator hasSeenBoarding={hasSeenBoarding} setIsAuthenticated={setIsAuthenticated} setHasSeenBoarding={setHasSeenBoarding} />}
        </Stack.Screen>
      )}
      
    </Stack.Navigator>
  );
}
