import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStack from "./src/navigators/RootStackNavigator";
import SplashScreen from './src/screens/SplashScreen';

import {
  getAuthStatus,
  getBoardingStatus,
} from "./src/storage/authStorage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSeenBoarding, setHasSeenBoarding] = useState(false);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const authStatus = await getAuthStatus();
        const boardingStatus = await getBoardingStatus();

        setIsAuthenticated(authStatus);
        setHasSeenBoarding(boardingStatus);
      } catch (error) {
        console.error("Error initializing app:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <RootStack
        isAuthenticated={isAuthenticated}
        hasSeenBoarding={hasSeenBoarding}
        setIsAuthenticated={setIsAuthenticated}
        setHasSeenBoarding={setHasSeenBoarding}
        setCartCount={setCartCount}
        cartCount={cartCount}
      />
    </NavigationContainer>
  );
}