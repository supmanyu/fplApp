import React from "react";
import SplashScreen from "./Pages/Splash";
import LoginScreen from "./Pages/Login";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#28b5b5",
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
