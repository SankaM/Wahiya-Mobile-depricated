import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const FormInputNew = ({
  label,
  title,
  inputStyle,
  onFocus,
  onBlur,
  iconName,
  onChangeText,
}) => {
  return (
    <View style={styles.formInputSec}>
      <Text style={styles.formLabel}>{label}</Text>
      <View style={styles.formInput}>
        <TextInput
          placeholder={title}
          placeholderTextColor="#ffa071"
          style={[styles.input, inputStyle]}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
        />
        <FontAwesome5 name={iconName} size={18} color="rgb(255, 160,113)" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formInputSec: {
    width: "100%",
  },
  formLabel: {
    color: "#888888",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  formInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15,
    padding: 12,
    backgroundColor: "#FFF0E8",
    borderRadius: 10,
  },
  input: {
    color: "#F05217",
    fontSize: 17,
    width: "88%",
    fontFamily: "Montserrat-Medium",
  },
});

export default FormInputNew;
