//import liraries
import {
  FontAwesome5,
  Ionicons,
  Foundation,
  Octicons,
  MaterialCommunityIcons,
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
  TouchableNativeFeedback,
} from "react-native";
import { fullHeight, heightRef, widthRef } from "../utils/screenSize";
import { Picker } from "@react-native-picker/picker";
// create a component
const InputComponent = ({
  label,
  placeholder,
  style,
  children,
  val,
  handleState,
  editable,
  lines,
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
          }}
        >
          {label}
        </Text>
        {children == undefined ? (
          <TextInput
            editable={editable ?? true}
            value={val}
            onChangeText={handleState}
            style={[
              {
                width: "100%",
                height: lines ? 100 * heightRef : 50 * heightRef,
                backgroundColor: "white",
                color: "rgba(255, 128,0,1)",
                borderRadius: 7,
                paddingHorizontal: 10 * widthRef,
                fontSize: 18 * heightRef,
                textAlignVertical: lines ? "top" : "center",
                paddingVertical: lines ? 10 * heightRef : 0,
                borderWidth: 0.5,
              },
            ]}
            placeholderTextColor="grey"
            placeholder={placeholder}
            multiline={lines ? true : false}
            numberOfLines={lines || 1}
          />
        ) : null}
        {children && children}
      </View>
    )
  );
};
const HeaderHeight = 200;
const AddPrescription = () => {
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
        style={{ width: "100%", height: fullHeight, flex: 1 }}
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
                fontWeight: "bold",
              }}
            >
              Add
            </Text>
            <Text style={{ fontSize: 30 * heightRef, color: "white" }}>
              Prescription
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
          <View
            style={{
              flex: 5,
              backgroundColor: "white",
              elevation: 10,
              borderTopRightRadius: 30,
              paddingTop: 20 * heightRef,
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
              <InputComponent
                val={"Linda Williams"}
                label="Patient's Name"
                editable={false}
                placeholder="Enter First name"
                handleState={(text) => {
                  handleState("fname", text);
                }}
              />

              <InputComponent label="Diagnosis" placeholder="Enter first name">
                <View style={styles.picker}>
                  <Picker
                    // selectedValue={selectedLanguage}
                    // selectedValue={data.age}
                    style={{
                      color: "rgba(255, 128,0,1)",
                    }}
                    // dropdownIconColor="#FF8C00"
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => {
                      handleState("age", itemValue);
                    }}
                  >
                    {["Select", "Fever"].map((item) => (
                      <Picker.Item
                        label={item}
                        value={item.toLowerCase()}
                        color="rgba(255, 128,0,1)"
                      />
                    ))}
                  </Picker>
                </View>
                <View style={styles.picker}>
                  <Picker
                    // selectedValue={selectedLanguage}
                    // selectedValue={data.age}
                    style={{
                      color: "rgba(255, 128,0,1)",
                    }}
                    // dropdownIconColor="#FF8C00"
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => {
                      handleState("age", itemValue);
                    }}
                  >
                    {["Select", "Flu"].map((item) => (
                      <Picker.Item
                        label={item}
                        value={item.toLowerCase()}
                        color="rgba(255, 128,0,1)"
                      />
                    ))}
                  </Picker>
                </View>
                <View style={styles.picker}>
                  <Picker
                    // selectedValue={selectedLanguage}
                    // selectedValue={data.age}
                    style={{
                      color: "rgba(255, 128,0,1)",
                    }}
                    // dropdownIconColor="#FF8C00"
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => {
                      handleState("age", itemValue);
                    }}
                  >
                    {["Select", "Cough"].map((item) => (
                      <Picker.Item
                        label={item}
                        value={item.toLowerCase()}
                        color="rgba(255, 128,0,1)"
                      />
                    ))}
                  </Picker>
                </View>
              </InputComponent>

              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    paddingVertical: 10 * heightRef,
                    fontSize: 18 * heightRef,
                    paddingHorizontal: 5 * widthRef,
                    color: "grey",
                  }}
                >
                  Treatment
                </Text>
                <View
                  style={{
                    width: "100%",
                    // minHeight: 100 * heightRef,
                    borderRadius: 20,
                    backgroundColor: "white",
                    elevation: 5,
                    flexDirection: "row",
                    overflow: "hidden",
                    padding: 10,
                  }}
                >
                  <Image
                    style={{
                      height: 100 * heightRef,
                      width: 100 * heightRef,
                      borderRadius: 20,
                    }}
                    source={{
                      uri: "https://www.iddo.org/sites/default/files/styles/slideshow/public/slideshow/2018-04/pexels-photo-415825_blue%20white%20pills.jpg?h=c5515ee6&itok=gH2IhRfr",
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                      paddingLeft: 10 * widthRef,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 5,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 22 * heightRef,
                            fontWeight: "bold",
                          }}
                        >
                          iBuprofen
                        </Text>
                        <Text
                          style={{
                            fontSize: 19 * heightRef,
                            fontWeight: "bold",
                            color: "grey",
                          }}
                        >
                          250mg
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 20 * heightRef }}>
                          <MaterialCommunityIcons
                            name="clock"
                            size={24}
                            color="rgb(255, 160,113)"
                          />
                          {" 3 Times"}
                        </Text>
                      </View>
                    </View>
                    <View style={{ width: "100%" }}>
                      <Text style={{ fontSize: 20 * heightRef }}>
                        <FontAwesome5 name="tablets" size={24} color="orange" />{" "}
                        {" 2 Tablets"}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ marginVertical: 10 * heightRef, flex: 1 }}>
                <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
                  <View style={[styles.picker, { flex: 1.5, marginRight: 10 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["Drug", "Fever"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={[styles.picker, { flex: 1 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["Days", "Fever"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
                <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
                  <View style={[styles.picker, { flex: 1, marginRight: 10 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["1"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={[styles.picker, { flex: 1 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["3"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableNativeFeedback useForeground>
                      <View
                        style={{
                          width: 75 * widthRef,
                          height: 45 * heightRef,
                          backgroundColor: "rgb(255, 160,113)",
                          borderRadius: 10,
                          marginVertical: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          elevation: 5,
                          marginBottom: 30 * heightRef,
                          overflow: "hidden",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 24 * heightRef,
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add{" "}
                          <FontAwesome5 name="check" size={20} color="white" />
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                  <TouchableNativeFeedback useForeground>
                    <View
                      style={{
                        width: 45 * widthRef,
                        height: 45 * heightRef,
                        borderRadius: 10,
                        marginVertical: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 30 * heightRef,
                        overflow: "hidden",
                        marginLeft: 10 * widthRef,
                        borderWidth: 0.5,
                      }}
                    >
                      <Foundation
                        name="trash"
                        size={24 * heightRef}
                        color="black"
                      />
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>

              <View style={{ marginVertical: 10 * heightRef, flex: 1 }}>
                <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
                  <View style={[styles.picker, { flex: 1.5, marginRight: 10 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["Drug", "Fever"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={[styles.picker, { flex: 1 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["Days", "Fever"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
                <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
                  <View style={[styles.picker, { flex: 1, marginRight: 10 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["Dose", "Fever"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={[styles.picker, { flex: 1 }]}>
                    <Picker
                      // selectedValue={selectedLanguage}
                      // selectedValue={data.age}
                      style={{
                        color: "rgba(255, 128,0,1)",
                      }}
                      // dropdownIconColor="#FF8C00"
                      mode="dropdown"
                      onValueChange={(itemValue, itemIndex) => {
                        handleState("age", itemValue);
                      }}
                    >
                      {["No. of Times", "Fever"].map((item) => (
                        <Picker.Item
                          label={item}
                          value={item.toLowerCase()}
                          color="rgba(255, 128,0,1)"
                        />
                      ))}
                    </Picker>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableNativeFeedback useForeground>
                      <View
                        style={{
                          width: 75 * widthRef,
                          height: 45 * heightRef,
                          backgroundColor: "rgb(255, 160,113)",
                          borderRadius: 10,
                          marginVertical: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          elevation: 5,
                          marginBottom: 30 * heightRef,
                          overflow: "hidden",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 24 * heightRef,
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Add{" "}
                          <FontAwesome5 name="check" size={20} color="white" />
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback useForeground>
                      <View
                        style={{
                          width: 45 * widthRef,
                          height: 45 * heightRef,
                          backgroundColor: "#ffdfd0",
                          borderRadius: 10,
                          marginVertical: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 30 * heightRef,
                          overflow: "hidden",
                          marginLeft: 10 * widthRef,
                        }}
                      >
                        <Octicons
                          name="diff-added"
                          size={24 * heightRef}
                          color="orange"
                        />
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                  <TouchableNativeFeedback useForeground>
                    <View
                      style={{
                        width: 45 * widthRef,
                        height: 45 * heightRef,
                        borderRadius: 10,
                        marginVertical: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 30 * heightRef,
                        overflow: "hidden",
                        marginLeft: 10 * widthRef,
                        borderWidth: 0.5,
                      }}
                    >
                      <Foundation
                        name="trash"
                        size={24 * heightRef}
                        color="black"
                      />
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>

              <InputComponent
                val={""}
                label="Add Notes"
                placeholder="Brief notes for patient..."
                handleState={(text) => {
                  handleState("nic", text);
                }}
                lines={6}
              />

              <TouchableNativeFeedback useForeground>
                <View
                  style={{
                    width: "100%",
                    height: 50 * heightRef,
                    borderRadius: 10,
                    marginVertical: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 15 * heightRef,
                    borderWidth: 0.5,
                    backgroundColor: "white",
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24 * heightRef,
                      fontWeight: "bold",
                      color: "grey",
                      textAlignVertical: "center",
                    }}
                  >
                    Attach file
                    <Ionicons
                      name="md-attach"
                      size={30 * heightRef}
                      color="rgb(255, 160,113)"
                    />
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback useForeground>
                <View
                  style={{
                    width: "100%",
                    height: 50 * heightRef,
                    backgroundColor: "rgb(255, 160,113)",
                    borderRadius: 10,
                    marginVertical: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 10,
                    marginBottom: 30 * heightRef,
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24 * heightRef,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Prescribe
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
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
  picker: {
    width: "100%",
    height: 50 * heightRef,
    color: "rgba(255, 128,0,1)",
    borderRadius: 7,
    paddingLeft: 10 * widthRef,
    fontSize: 18 * heightRef,
    marginTop: 10 * heightRef,
    borderWidth: 0.5,
    flex: 1,
  },
});

//make this component available to the app
export default AddPrescription;
