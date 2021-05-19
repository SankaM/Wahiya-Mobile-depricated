import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { heightRef, widthRef } from "../utils/screenSize";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import FormInputNew from "../components/FormInputNew";

const PatientRegister = ({ navigation }) => {
  const [mass, setMass] = useState("Select");
  const [showMass, setShowMass] = useState(false);
  const [type, setType] = useState("Select");
  const [showType, setShowType] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://i.ibb.co/qmcNxp2/background-Image.png" }}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              paddingHorizontal: 30 * widthRef,
              height: 86 * heightRef + StatusBar.currentHeight,
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="md-arrow-back"
              size={30 * heightRef}
              color="white"
            />
          </TouchableOpacity>
          <View style={{ flex: 1, paddingHorizontal: 30 * widthRef }}>
            <Text
              style={{
                fontSize: 40 * heightRef,
                color: "white",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Register Patient
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: "white",
            elevation: 10,
            borderTopRightRadius: 30,
            paddingTop: 20 * heightRef,
          }}
        >
          <ScrollView
            style={{}}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <View
              style={{
                width: "85%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormInputNew
                label="Enter First Name"
                title="Enter First Name"
                iconName="user-alt"
                onChangeText={() => searchMenuShow()}
              />

              <FormInputNew
                label="Enter Last Name"
                title="Enter Last Name"
                iconName="user-alt"
                onChangeText={() => searchMenuShow()}
              />

              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.pickerSec}>
                  <View style={styles.viewPicker}>
                    <Text style={styles.label}>Age</Text>
                    <View style={styles.picker}>
                      <TouchableOpacity
                        style={styles.mainPicker}
                        onPress={() => setShowType(!showType)}
                      >
                        <Text
                          style={{
                            ...styles.pickerText,
                            color: type === "Select" ? "#ffa071" : "#F05217",
                          }}
                        >
                          {type}
                        </Text>
                        {showType ? (
                          <Feather
                            name="chevron-up"
                            size={24}
                            color="rgb(255, 160,113)"
                          />
                        ) : (
                          <Feather
                            name="chevron-down"
                            size={24}
                            color="#F05217"
                          />
                        )}
                      </TouchableOpacity>
                      {showType ? (
                        <View style={styles.pickerMenu}>
                          <TouchableOpacity
                            onPress={() => {
                              setType("below 18");
                              setShowType(false);
                            }}
                          >
                            <Text
                              style={{
                                ...styles.pickerText,
                                marginVertical: 5,
                                paddingTop: 5,
                              }}
                            >
                              below 18
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setType("18-30");
                              setShowType(false);
                            }}
                          >
                            <Text
                              style={{
                                ...styles.pickerText,
                                marginVertical: 5,
                              }}
                            >
                              18-30
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setType("30+");
                              setShowType(false);
                            }}
                          >
                            <Text
                              style={{
                                ...styles.pickerText,
                                marginVertical: 5,
                              }}
                            >
                              30+
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                  </View>
                  <View style={styles.viewPicker}>
                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.picker}>
                      <TouchableOpacity
                        style={styles.mainPicker}
                        onPress={() => setShowMass(!showMass)}
                      >
                        <Text
                          style={{
                            ...styles.pickerText,
                            color: mass === "Select" ? "#ffa071" : "#F05217",
                          }}
                        >
                          {mass}
                        </Text>
                        {showMass ? (
                          <Feather
                            name="chevron-up"
                            size={24}
                            color="rgb(255, 160,113)"
                          />
                        ) : (
                          <Feather
                            name="chevron-down"
                            size={24}
                            color="#F05217"
                          />
                        )}
                      </TouchableOpacity>
                      {showMass ? (
                        <View style={styles.pickerMenu}>
                          <TouchableOpacity
                            onPress={() => {
                              setMass("Male");
                              setShowMass(false);
                            }}
                          >
                            <Text
                              style={{
                                ...styles.pickerText,
                                marginVertical: 5,
                                paddingTop: 5,
                              }}
                            >
                              Male
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setMass("Female");
                              setShowMass(false);
                            }}
                          >
                            <Text
                              style={{
                                ...styles.pickerText,
                                marginVertical: 5,
                              }}
                            >
                              Female
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setMass("Not Specified");
                              setShowMass(false);
                            }}
                          >
                            <Text
                              style={{
                                ...styles.pickerText,
                                marginVertical: 5,
                              }}
                            >
                              Not Specified
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                  </View>
                </View>
              </View>

              <FormInputNew
                label="Enter Phone Number"
                title="Enter Phone Number"
                iconName="phone"
                onChangeText={() => searchMenuShow()}
              />
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    paddingVertical: 20 * heightRef,
                    fontSize: 25 * heightRef,
                    color: "grey",
                    fontFamily: "Montserrat-SemiBold",
                  }}
                >
                  Optional
                </Text>
              </View>

              <FormInputNew
                label="Enter Username"
                title="Enter Username"
                iconName="user-alt"
                onChangeText={() => searchMenuShow()}
              />
              <FormInputNew
                label="Enter Email"
                title="Enter Email"
                iconName="envelope"
                onChangeText={() => searchMenuShow()}
              />
              <FormInputNew
                label="Enter NIC"
                title="Enter NIC"
                iconName="credit-card"
                onChangeText={() => searchMenuShow()}
              />

              <TouchableOpacity
                style={styles.lastButton}
                onPress={() => alert("Submitted!")}
              >
                <Text style={styles.lastButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDC0A0",
  },
  pickerSec: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  viewPicker: {
    alignItems: "flex-start",
    width: "45%",
  },
  label: {
    color: "#888888",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  picker: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 15,
    width: "100%",
    padding: 12,
    backgroundColor: "#FFF0E8",
    borderRadius: 10,
  },
  mainPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  pickerText: {
    color: "#ffa071",
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
  },
  lastButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ffa071",
    borderRadius: 10,
    marginVertical: 15,
    padding: 15,
  },
  lastButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
});

export default PatientRegister;
