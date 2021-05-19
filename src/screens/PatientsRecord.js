//import liraries
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { heightRef, widthRef } from "../utils/screenSize";
// create a component
const InputComponent = ({
  label,
  placeholder,
  style,
  children,
  val,
  handleState,
}) => {
  return (
    style,
    (
      <View style={[{ width: "100%", flex: 1 }, style]}>
        <Text
          style={{
            paddingVertical: 10 * heightRef,
            fontSize: 18 * heightRef,
            paddingHorizontal: 5 * widthRef,
            color: "grey",
            fontFamily: "Montserrat-Medium",
          }}
        >
          {label}
        </Text>
        {children == undefined ? (
          <TextInput
            value={val}
            onChangeText={handleState}
            style={[
              {
                width: "100%",
                height: 50 * heightRef,
                backgroundColor: "rgba(255, 128,0, 0.1)",
                color: "rgba(255, 128,0,1)",
                borderRadius: 7,
                paddingHorizontal: 10 * widthRef,
                fontSize: 18 * heightRef,
                fontFamily: "Montserrat-Medium",
              },
            ]}
            placeholderTextColor="rgba(255, 128,0,1)"
            placeholder={placeholder}
          />
        ) : null}
        {children && children}
      </View>
    )
  );
};
const HeaderHeight = 200;
const PatientsRecord = ({navigation}) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    mobile: "",
    username: "",
    email: "",
    nic: "",
  });
  const handleState = (key, val) => {
    setData((state) => ({ ...state, [key]: val }));
  };
  const [scrollX] = React.useState(new Animated.Value(0));
  const translateY = scrollX.interpolate({
    inputRange: [0, 90],
    outputRange: [0, -80],
    extrapolate: "clamp",
  });
  const translateX = scrollX.interpolate({
    inputRange: [0, 30, 60, 90],
    outputRange: [0, 40, 70, 100],
    extrapolate: "clamp",
  });
  // console.log(data);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://i.ibb.co/qmcNxp2/background-Image.png" }}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View
          style={{
            height: HeaderHeight,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              paddingHorizontal: 30 * widthRef,
              height: 86 * heightRef + StatusBar.currentHeight,
            }}
          >
            <Ionicons
              name="md-arrow-back"
              size={30 * heightRef}
              color="white"
            />
          </View>
          <Animated.View
            style={{
              flex: 1,
              paddingHorizontal: 30 * widthRef,
              transform: [{ translateY }, { translateX }],
            }}
          >
            <Text
              style={{
                fontSize: 40 * heightRef,
                color: "white",
                fontFamily: "Montserrat-SemiBold",
              }}
            >
              Linda's
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 30 * heightRef,
                color: "white",
              }}
            >
              Medical Record
            </Text>
          </Animated.View>
        </View>

        <Animated.ScrollView
          style={{}}
          contentContainerStyle={{
            // paddingTop: HeaderHeight,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          nestedScrollEnabled
          onContentSizeChange={(w, h) => console.log(w, h)}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollX } } }],
            { useNativeDriver: true }
          )}
        >
          <View style={{ height: HeaderHeight, width: "100%" }} />
          <ScrollView nestedScrollEnabled>
            <View
              style={{
                backgroundColor: "white",
                elevation: 10,
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                paddingTop: 20 * heightRef,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "85%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    marginVertical: 15 * heightRef,
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      width: 150 * widthRef,
                      height: 150 * heightRef,
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={require("../assets/images/linda.jpg")}
                      style={{
                        height: "100%",
                        width: "100%",
                        resizeMode: "cover",
                      }}
                    />
                  </View>

                  <View
                    style={{
                      paddingHorizontal: 10 * widthRef,
                      paddingVertical: 5 * heightRef,
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 22 * heightRef,
                          fontFamily: "Montserrat-SemiBold",
                        }}
                      >
                        Linda Williams
                      </Text>
                      <Text
                        style={{
                          fontSize: 17 * heightRef,
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        Female. 30 yrs
                      </Text>
                      <Text
                        style={{
                          fontSize: 17 * heightRef,
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        +1 486 488 789
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <MaterialCommunityIcons
                        name="file-document-edit"
                        size={20 * heightRef}
                        color="green"
                      />
                      <Text
                        style={{
                          fontSize: 15 * heightRef,
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        {" "}
                        Flu, Cough, Fever
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%" }}>
                  <Text
                    style={{
                      paddingVertical: 20 * heightRef,
                      fontSize: 25 * heightRef,
                      fontFamily: "Montserrat-SemiBold",
                      color: "grey",
                    }}
                  >
                    Medical Description
                  </Text>
                  <Text
                    style={{
                      fontSize: 17 * heightRef,
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam.
                  </Text>
                </View>
                {[1, 1].map((item) => (
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderRadius: 15,
                      width: "100%",
                      padding: 10 * heightRef,
                      marginTop: 20 * heightRef,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 22 * heightRef,
                            fontFamily: "Montserrat-SemiBold",
                          }}
                        >
                          Flu
                        </Text>
                        <Text
                          style={{
                            fontSize: 18 * heightRef,
                            fontFamily: "Montserrat-SemiBold",
                            color: "grey",
                            bottom: 5,
                          }}
                        >
                          Severity
                        </Text>

                        <View style={{ flexDirection: "row", width: "100%" }}>
                          {Array.from({ length: 3 }, (v, i) => {
                            return (
                              <View
                                style={{
                                  height: 10 * heightRef,
                                  width: 20 * widthRef,
                                  backgroundColor:
                                    i == 1
                                      ? "rgba(255, 160,113,1)"
                                      : "rgba(255, 160,113,0.4)",
                                  marginRight: 6 * widthRef,
                                  borderRadius: 15,
                                }}
                              />
                            );
                          })}
                        </View>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                        <Text
                          style={{
                            fontSize: 18 * heightRef,
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          <FontAwesome5
                            name="tablets"
                            size={24}
                            color="black"
                          />{" "}
                          {" 2 Tablets"}
                        </Text>
                        <Text
                          style={{
                            fontSize: 18 * heightRef,
                            textAlign: "left",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          Medium
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 15 * heightRef,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 22 * heightRef,
                            fontFamily: "Montserrat-SemiBold",
                          }}
                        >
                          Prescribed Drug
                        </Text>
                        <Text
                          style={{
                            fontSize: 22 * heightRef,
                            fontFamily: "Montserrat-SemiBold",
                            color: "grey",
                          }}
                        >
                          Paracetamol
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 18 * heightRef,
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          <Octicons
                            name="calendar"
                            size={24 * heightRef}
                            color="rgb(255, 160,113)"
                          />{" "}
                          {" 3 Days"}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 15 * heightRef,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 22 * heightRef,
                            fontFamily: "Montserrat-SemiBold",
                          }}
                        >
                          Dosage
                        </Text>
                        <Text
                          style={{
                            fontSize: 22 * heightRef,
                            fontFamily: "Montserrat-SemiBold",
                            color: "grey",
                          }}
                        >
                          3 Days
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 18 * heightRef,
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          <MaterialCommunityIcons
                            name="clock"
                            size={24}
                            color="rgb(255, 160,113)"
                          />
                          {" 3 Times"}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}

                <View style={{ width: "100%" }}>
                  <Text
                    style={{
                      paddingVertical: 20 * heightRef,
                      fontSize: 25 * heightRef,
                      fontFamily: "Montserrat-SemiBold",
                      color: "grey",
                    }}
                  >
                    Past Diagnostics
                  </Text>
                  {[1, 1, 1, 1].map((item) => (
                    <View
                      style={{
                        width: "100%",
                        minHeight: 50 * heightRef,
                        backgroundColor: "rgba(255, 160,113,0.2)",
                        marginTop: 10 * heightRef,
                        borderRadius: 15,
                        justifyContent: "center",
                        paddingHorizontal: 10 * widthRef,
                        paddingVertical: 15 * widthRef,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20 * heightRef,
                          fontFamily: "Montserrat-SemiBold",
                          paddingVertical: 5 * widthRef,
                          color: "grey",
                        }}
                      >
                        Past Diagnostics
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialCommunityIcons
                          name="file-document-edit"
                          size={20 * heightRef}
                          color="rgba(255, 160,113,1)"
                        />
                        <Text
                          style={{
                            fontSize: 17 * heightRef,
                            color: "orange",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          {" "}
                          Flu, Cough, Fever
                        </Text>
                      </View>
                    </View>
                  ))}
                  <TouchableOpacity
                    style={styles.lastButton}
                    onPress={() => alert('added')}
                  >
                    <Text style={styles.lastButtonText}>Add Prescription</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </Animated.ScrollView>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

//make this component available to the app
export default PatientsRecord;
