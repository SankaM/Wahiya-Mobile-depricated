import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  StatusBar,
  Platform,
} from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = ({ navigation }) => {
  const [Loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFD5BF" />
      {Loading ? (
        <LinearGradient
          colors={["#FFD5BF", "#DFFFB8"]}
          start={{ x: -0.5, y: 0.5 }}
          end={{ x: 1.5, y: 1 }}
          style={styles.linearGradient}
        >
          <Image
            style={styles.headerImage}
            source={require("../assets/images/Path1.png")}
          />
          <ActivityIndicator size="large" color="#F76D28" />
        </LinearGradient>
      ) : (
        navigation.navigate("SigninScreen")
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: windowHeight,
    // marginTop: Constants.marginTop,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: windowHeight,
  },
  headerImage: {
    width: "100%",
    height: "50%",
  },
});

export default SplashScreen;
