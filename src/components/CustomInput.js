import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const CustomInput = ({
  Title,
  BackgroundColor,
  InputColor,
  Label,
  IconName,
  onfocus,
  onblur,
}) => {
  return (
    <View
      style={{
        ...styles.inputCon,
        backgroundColor: BackgroundColor,
        borderRadius: 30,
      }}
    >
      <View style={styles.labelSec}>
        <Text style={styles.inputLabel}>{Label}</Text>
      </View>
      <View
        style={{
          ...styles.inputSec,
          backgroundColor: InputColor,
          borderRadius: 10,
        }}
      >
        <FontAwesome5
          style={styles.icon}
          name={IconName}
          size={18}
          color="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder={Title}
          placeholderTextColor="#f5f5f5"
          onFocus={onfocus}
          onBlur={onblur}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCon: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "6%",
    margin: "3%",
  },
  labelSec: {
    alignItems: "flex-start",
    width: "100%",
  },
  inputLabel: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: "Montserrat-Medium",
  },
  inputSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "95%",
    padding: "3%",
    paddingHorizontal: "3%",
    margin: "3%",
    borderRadius: 10,
  },
  icon: {
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    paddingRight: 10,
  },
  input: {
    color: "#FFFFFF",
    fontSize: 18,
    width: "88%",
    paddingLeft: 10,
    fontFamily: "Montserrat-Medium",
  },
});

export default CustomInput;
