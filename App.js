import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Login from "./Signup";
import { MainTabNavigator } from "./src/navigation/MainNavigator";

import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* screens */
import { HomeScreen } from "./src/screens/HomeScreen";
import { CalendarScreen } from "./src/screens/CalendarScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
