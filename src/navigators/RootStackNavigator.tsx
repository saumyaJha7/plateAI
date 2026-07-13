import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigator from "./AuthStackNavigator";
import HomeTabNavigator from "./MainTabNavigator";
import CartScreen from "../screens/CartScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

type RootStackProps = {
  isAuthenticated: boolean;
  hasSeenBoarding: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setHasSeenBoarding: (value: boolean) => void;
};

export default function RootStack({
  isAuthenticated,
  hasSeenBoarding,
  setIsAuthenticated,
  setHasSeenBoarding,
}: RootStackProps) {
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" options={{ headerShown: false }}>
          {() => <AuthStackNavigator hasSeenBoarding={hasSeenBoarding} setIsAuthenticated={setIsAuthenticated} setHasSeenBoarding={setHasSeenBoarding} />}
        </Stack.Screen>
      )}
      
    </Stack.Navigator>
  );
}
