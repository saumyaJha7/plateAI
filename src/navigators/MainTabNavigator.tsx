import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import OrderScreen from "../screens/OrderScreen";
import ProfileDrawerNavigator from "./ProfileDrawerNavigator";

const Tab = createBottomTabNavigator();

type MainTabProps = {
  setIsAuthenticated: (value: boolean) => void;
};

export default function MainTabNavigator({ setIsAuthenticated }: MainTabProps) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#FF6B35",

        tabBarInactiveTintColor: "#8E8E93",

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 8,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;

            case "Search":
              iconName = focused ? "search" : "search-outline";
              break;

            case "Orders":
              iconName = focused ? "receipt" : "receipt-outline";
              break;

            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;

            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Search" component={SearchScreen} />

      <Tab.Screen name="Orders" component={OrderScreen} />

      <Tab.Screen name="Profile">
        {(props) => (
          <ProfileDrawerNavigator
            {...props}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
