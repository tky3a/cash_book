import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Calendar Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
