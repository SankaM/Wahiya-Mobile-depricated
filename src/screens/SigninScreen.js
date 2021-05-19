import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { windowHeight } from "../utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SigninScreen = ({ navigation }) => {
  const [KAV, setKAV] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView
        behavior={"height"}
        style={styles.KAVView}
        enabled={KAV}
      >
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
          <View style={styles.body}>
            <Image
              style={styles.logoImage}
              source={require("../assets/images/logo.png")}
            />
            <Text style={styles.topText}>SIGN IN</Text>
            <CustomInput
              Label="Username"
              Title="Enter Username"
              BackgroundColor="#FAC296"
              InputColor="#F76D28"
              IconName="user"
              onfocus={() => setKAV(true)}
              onblur={() => setKAV(false)}
            />
            <CustomInput
              Label="Password"
              Title="Enter password"
              BackgroundColor="#CEE19C"
              InputColor="#81BC3C"
              IconName="lock"
              onfocus={() => setKAV(true)}
              onblur={() => setKAV(false)}
            />
            <CustomButton
              title="LOGIN"
              styleButton={{
                marginTop: 25,
                fontFamily: "Montserrat-Medium",
              }}
              onPress={() => navigation.navigate("PatientTabNavigation")}
            />
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
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
    position: "absolute",
    top: 0,
  },
  KAVView: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: windowHeight,
  },
  body: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: windowHeight,
    paddingTop: "5%",
    padding: "3%",
  },
  logoImage: {
    width: "30%",
    resizeMode: "contain",
  },
  topText: {
    color: "#F76D28",
    fontSize: 22,
    letterSpacing: 5,
    fontFamily: "Montserrat-Regular",
    marginBottom: 5,
    paddingBottom: 5
  },
});
export default SigninScreen;
