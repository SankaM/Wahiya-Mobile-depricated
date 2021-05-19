import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    loadFonts();
  });
  async function loadFonts() {
    await Font.loadAsync({
      "Montserrat-Regular": require("@assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("@assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Black": require("@assets/fonts/Montserrat-Black.ttf"),
      "Montserrat-Medium": require("@assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-SemiBold": require("@assets/fonts/Montserrat-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    );
  }
}
