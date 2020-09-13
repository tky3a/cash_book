import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* screens */
import { HomeScreen } from "../screens/HomeScreen";
import { CalendarScreen } from "../screens/CalendarScreen";

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
};
