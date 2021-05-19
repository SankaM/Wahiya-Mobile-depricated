import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { windowHeight } from "../utils/Dimensions";
import FormInput from "../components/FormInput";
import DatePicker from "react-native-datepicker";
import * as ImagePicker from "expo-image-picker";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

const UpdateDrugScreen = ({ navigation }) => {
  const [type, setType] = useState("Select");
  const [showType, setShowType] = useState(false);
  const [mass, setMass] = useState("Select");
  const [showMass, setShowMass] = useState(false);
  const [date, setDate] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [uriImage, setImage] = useState(null);
  const [col, setcol] = useState("name");
  const searchMenuRef = useRef();

  const searchMenuShow = () => {
    searchMenuRef.current.show();
  };

  const searchMenuHide = () => {
    searchMenuRef.current.hide();
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Group_75.png")}
        style={styles.mainImage}
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back-outline"
            size={30}
            color="#ffffff"
            style={{ marginTop: 20 }}
          />
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={styles.bottomText}>Update Drug</Text>
          <Image
            source={require("../assets/images/Group_76.png")}
            style={{ width: "30%", resizeMode: "contain" }}
          />
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          <FormInput
            label="Name of Drug"
            title="Enter Name"
            iconName="pill"
            onChangeText={() => searchMenuShow()}
          />

          <Menu ref={searchMenuRef} style={styles.searchMenu}>
            <MenuItem
              onPress={() => {
                searchMenuHide("name");
                setcol("name");
              }}
            >
              <Text style={styles.medName}>Paracetamol (500 mg)</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onPress={() => {
                searchMenuHide("username");
                setcol("username");
              }}
            >
              <View style={styles.proSec}>
                <View>
                  <Text style={styles.medName}>iBuprofen (250 mg)</Text>
                </View>
              </View>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onPress={() => {
                searchMenuHide("email");
                setcol("email");
              }}
            >
              <View style={styles.proSec}>
                <View>
                  <Text style={styles.medName}>Amlodipine (500 mg)</Text>
                </View>
              </View>
            </MenuItem>
          </Menu>

          <View style={styles.pickerSec}>
            <View style={styles.viewPicker}>
              <Text style={styles.label}>Type</Text>
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
                    <Feather name="chevron-up" size={24} color="#F05217" />
                  ) : (
                    <Feather name="chevron-down" size={24} color="#F05217" />
                  )}
                </TouchableOpacity>
                {showType ? (
                  <View style={styles.pickerMenu}>
                    <TouchableOpacity
                      onPress={() => {
                        setType("Tablets");
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
                        Tablets
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setType("Capsules");
                        setShowType(false);
                      }}
                    >
                      <Text style={{ ...styles.pickerText, marginVertical: 5 }}>
                        Capsules
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setType("Syrup");
                        setShowType(false);
                      }}
                    >
                      <Text style={{ ...styles.pickerText, marginVertical: 5 }}>
                        Syrup
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            </View>

            <View style={styles.viewPicker}>
              <Text style={styles.label}>Mass</Text>
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
                    <Feather name="chevron-up" size={24} color="#F05217" />
                  ) : (
                    <Feather name="chevron-down" size={24} color="#F05217" />
                  )}
                </TouchableOpacity>
                {showMass ? (
                  <View style={styles.pickerMenu}>
                    <TouchableOpacity
                      onPress={() => {
                        setMass("500 mg");
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
                        500 mg
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setMass("250 mg");
                        setShowMass(false);
                      }}
                    >
                      <Text style={{ ...styles.pickerText, marginVertical: 5 }}>
                        250 mg
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setMass("200 mg");
                        setShowMass(false);
                      }}
                    >
                      <Text style={{ ...styles.pickerText, marginVertical: 5 }}>
                        200 mg
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            </View>
          </View>

          <View style={styles.calendarPickerSec}>
            <Text style={styles.label}>Expiry Date</Text>
            <View style={styles.calendarPicker}>
              <DatePicker
                date={date}
                placeholder="Select"
                mode="date"
                format="DD MMM, YYYY"
                customStyles={{
                  dateIcon: {
                    display: "none",
                  },
                  dateInput: {
                    borderWidth: 0,
                    alignItems: "flex-start",
                  },
                  dateText: {
                    color: "#F05217",
                    fontSize: 16,
                    fontFamily: "Montserrat-Medium",
                  },
                  datePickerCon: {
                    padding: 0,
                    margin: 0,
                  },
                  placeholderText: {
                    color: "#ffa071",
                    fontSize: 16,
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
              <MaterialCommunityIcons
                name="calendar-multiselect"
                size={26}
                color="#F05217"
              />
            </View>
          </View>

          <View style={styles.counterSec}>
            <Text style={styles.label}>Drug Count</Text>
            <View style={styles.innerCounter}>
              <TouchableOpacity
                disabled={count === 0 ? true : false}
                style={styles.minus}
                onPress={() => setCount((prevCount) => prevCount - 1)}
              >
                <Feather
                  name="minus"
                  size={17}
                  color={count === 0 ? "#ffa071" : "#F05217"}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.counter,
                  color: count === 0 ? "#ffa071" : "#F05217",
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => setCount((prevCount) => prevCount + 1)}
              >
                <Feather name="plus" size={17} color="#F05217" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imagePickerSec}>
            <Text style={styles.label}>Add Image</Text>
            {show ? (
              <View style={styles.imageSec}>
                <Image source={{ uri: uriImage }} style={styles.image} />
                <TouchableOpacity
                  style={styles.clearImg}
                  onPress={() => {
                    setImage(null);
                    setShow(false);
                  }}
                >
                  <Feather name="minus" size={17} color="#F05217" />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.innerImgPicker}>
                <TouchableOpacity
                  style={styles.ImgPicker}
                  onPress={() => pickImage()}
                >
                  <Text style={styles.pickerText}>Select File</Text>
                  <Ionicons
                    name="md-image"
                    size={24}
                    color="#ffa071"
                    style={{ marginLeft: 5 }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.lastButton}
            onPress={() => alert("Drug Updated")}
          >
            <Text style={styles.lastButtonText}>Update Drug</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.lastButton,
              flexDirection: "row",
              backgroundColor: "#ffffff",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#f5f5f5",
              elevation: 3,
            }}
            onPress={() => alert("Drug Deleted")}
          >
            <Text
              style={{
                ...styles.lastButtonText,
                color: "#777777",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Delete Drug
            </Text>
            <MaterialIcons name="delete-outline" size={24} color="#ffa071" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFDCCB",
  },
  mainImage: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: -300,
  },
  header: {
    width: "85%",
    height: windowHeight / 3,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
    paddingTop: 15,
  },
  bottomText: {
    color: "#ffffff",
    fontSize: 32,
    paddingVertical: 20,
    width: "35%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  body: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: windowHeight,
    backgroundColor: "#ffffff",
    paddingHorizontal: 30,
    paddingTop: 30,
    borderTopRightRadius: 50,
    elevation: 20,
  },
  searchMenu: {
    borderRadius: 15,
    width: "83%",
    paddingVertical: 5,
  },
  medName: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
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
    backgroundColor: "#FFA07120",
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
  calendarPickerSec: {
    alignItems: "flex-start",
    width: "100%",
  },
  calendarPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#FFA07120",
    borderRadius: 10,
  },
  innerPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  counterSec: {
    alignItems: "flex-start",
    width: "100%",
  },
  innerCounter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15,
  },
  minus: {
    backgroundColor: "#FFA07120",
    padding: 12,
    borderRadius: 10,
  },
  counter: {
    color: "#ffa071",
    textAlign: "center",
    fontSize: 17,
    backgroundColor: "#FFA07120",
    padding: 12,
    borderRadius: 10,
    width: "40%",
  },
  plus: {
    backgroundColor: "#FFA07120",
    padding: 12,
    borderRadius: 10,
  },
  imagePickerSec: {
    alignItems: "flex-start",
    width: "100%",
  },
  innerImgPicker: {
    backgroundColor: "#FFA07120",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 40,
    marginVertical: 15,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#F05217",
    borderRadius: 10,
  },
  ImgPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imageSec: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: windowHeight / 5.5,
    resizeMode: "cover",
    marginVertical: 15,
    borderRadius: 10,
  },
  clearImg: {
    backgroundColor: "#ffffff",
    padding: 5,
    position: "absolute",
    top: 30,
    left: 260,
    borderRadius: 50,
    elevation: 10,
  },
  lastButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ffa071",
    borderRadius: 10,
    marginVertical: 15,
    padding: 15,
    elevation: 3,
  },
  lastButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
});

export default UpdateDrugScreen;
