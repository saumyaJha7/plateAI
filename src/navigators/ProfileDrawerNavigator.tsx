import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../screens/ProfileScreen";
import OrderScreen from "../screens/OrderScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HelpScreen from "../screens/HelpScreen";
import LogoutScreen from "../screens/LogoutScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

type DrawerProp = {
  setIsAuthenticated: (value: boolean) => void;
  setHasSeenBoarding: (value: boolean) => void;
};

export default function DrawerNavigator({ setIsAuthenticated , setHasSeenBoarding}: DrawerProp) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Logout">
        {(props) => (
          <LogoutScreen {...props} setIsAuthenticated={setIsAuthenticated} setHasSeenBoarding={setHasSeenBoarding}/>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
