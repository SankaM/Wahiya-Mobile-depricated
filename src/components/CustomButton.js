import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomButton = ({ title, styleButton, styleText, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.buttonText, styleText]}>{title}</Text>
      <View style={{  }}>
        <AntDesign name="arrowright" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFA06C",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 5,
    fontFamily: "Montserrat-SemiBold",
    left: 115
  },
});

export default CustomButton;
