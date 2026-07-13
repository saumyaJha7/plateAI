import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

type AuthStackProps = {
    hasSeenBoarding: boolean;
    setIsAuthenticated: (value: boolean) => void;
    setHasSeenBoarding: (value: boolean) => void;
};

export default function AuthStackNavigator({hasSeenBoarding, setIsAuthenticated, setHasSeenBoarding}: AuthStackProps) {
    return (
        <Stack.Navigator
            initialRouteName={hasSeenBoarding ? "Login" : "OnBoarding"}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="OnBoarding">
                {props => <OnBoardingScreen {...props} setHasSeenBoarding={setHasSeenBoarding} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
                {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}