import React, { useState } from "react";
import Constants from "expo-constants";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = ({ navigation }) => {
  const [Loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

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
          <Image
            style={styles.logoImage}
            source={require("../assets/images/logo.png")}
          />
          <Text style={styles.topText}>MONDA</Text>
          <Text style={styles.bottomText}>eDoctor</Text>
        </LinearGradient>
      ) : (
        navigation.navigate("LoadingScreen")
      )}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: windowHeight,
    // marginTop: Constants.statusBarHeight,
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
  logoImage: {
    width: "35%",
    resizeMode: "contain",
    position: "absolute",
    top: 180,
  },
  topText: {
    color: "#21C002",
    fontSize: 28,
    letterSpacing: 10,
    marginTop: 30,
    fontFamily: "Montserrat-Regular",
  },
  bottomText: {
    color: "#F76D28",
    fontSize: 18,
    padding: 5,
    fontFamily: "Montserrat-Regular",
  },
});

// "splash": {
//   "image": "./assets/splash.png",
//   "resizeMode": "contain",
//   "backgroundColor": "#ffffff"
// },
