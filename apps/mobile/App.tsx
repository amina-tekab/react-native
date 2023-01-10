import { Button, StyleSheet, View, Text } from "react-native";
import React from "react";

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeComponent from "./screens/WelcomeComponent";
import HomeFood from "./screens/HomeFood";
const App = () => {
  const Stack = createStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeComponent} />

          <Stack.Screen name="HomeFood" component={HomeFood} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
