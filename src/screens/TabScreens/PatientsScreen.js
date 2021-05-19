import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
} from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { windowWidth, windowHeight } from "../../utils/Dimensions";

const DATA = [
  {
    id: "1",
    color: "#FFA071",
    name: "Cavey Scott",
    age: "Male, 24 yrs",
    infections: "Flu, Cough",
    path: require("../../assets/images/doc1.jpg"),
  },
  {
    id: "2",
    color: "#B1FF58",
    name: "Cavey Scott",
    age: "Male, 24 yrs",
    infections: "Flu, Cough",
    path: require("../../assets/images/doc2.jpg"),
  },
  {
    id: "3",
    color: "#818181",
    name: "Cavey Scott",
    age: "Male, 24 yrs",
    infections: "Flu, Cough",
    path: require("../../assets/images/doc3.jpg"),
  },
];

const PatientsScreen = ({ navigation }) => {
  const [col, setcol] = useState("name");
  const menuRef = useRef();

  const menuShow = () => {
    menuRef.current.show();
  };

  const menuHide = () => {
    menuRef.current.hide();
  };

  const PatientsCrad = ({ data }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PatientsRecord')}>
        <Image style={styles.cardImg} source={data.path} />
        <View style={styles.cardBody}>
          <View style={styles.topTextSec}>
            <Text style={styles.cardTopText}>{data.name}</Text>
            <Text style={styles.cardCenterText}>{data.age}</Text>
          </View>
          <View style={styles.bottomTextSec}>
            <FontAwesome5 name="notes-medical" size={22} color={data.color} />
            <Text style={styles.cardBottomText}>{data.infections}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/backgroundImage.png")}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <View style={styles.body}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/images/avatar.jpg")}
              style={styles.avatar}
            />
            <Text style={styles.topText}>Welcome,</Text>
            <Text style={styles.bottomText}>Dr. Elizabeth</Text>

            <View style={styles.searchSec}>
              <View style={styles.searchBar}>
                <Ionicons name="search" size={24} color="#FFA071" />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor="#FFCFB6"
                  style={styles.searchInput}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => menuShow()}
              >
                <Feather name="sliders" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <Menu ref={menuRef} style={styles.menu}>
              <MenuItem disabled>
                <Text style={{ fontSize: 16, fontFamily: "Montserrat-Medium" }}>
                  Search By
                </Text>
              </MenuItem>
              <MenuItem
                onPress={() => {
                  menuHide("name");
                  setcol("name");
                }}
              >
                <Text
                  style={{
                    color: col === "name" ? "#FFA071" : "grey",
                    fontSize: 16,
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  Name
                </Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => {
                  menuHide("username");
                  setcol("username");
                }}
              >
                <Text
                  style={{
                    color: col === "username" ? "#FFA071" : "grey",
                    fontSize: 16,
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  Username
                </Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => {
                  menuHide("email");
                  setcol("email");
                }}
              >
                <Text
                  style={{
                    color: col === "email" ? "#FFA071" : "grey",
                    fontSize: 16,
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  Email
                </Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => {
                  menuHide("phone");
                  setcol("phone");
                }}
              >
                <Text
                  style={{
                    color: col === "phone" ? "#FFA071" : "grey",
                    fontSize: 16,
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  Phone
                </Text>
              </MenuItem>
            </Menu>
          </View>
          <Text style={styles.mainText}>Patients</Text>
          <View style={styles.cardSec}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => {
                return <PatientsCrad data={item} />;
              }}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#fff'
  },
  backgroundImage: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: windowWidth,
    height: windowHeight,
  },
  body: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  header: {
    width: "85%",
    height: Platform.OS == "ios" ? "32%" : "35%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  avatar: {
    width: Platform.OS == "ios" ? "16%" : "16%",
    height: Platform.OS == "ios" ? "19%" : "35%",
    resizeMode: "contain",
    borderRadius: 1000,
    marginTop: Platform.OS == "ios" ? 17 : 15,
  },
  topText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
  bottomText: {
    color: "#fff",
    fontSize: 24,
    paddingVertical: 5,
    fontFamily: "Montserrat-SemiBold",
  },
  searchSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    top: Platform.OS == "ios" ? 20 : null,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    backgroundColor: "#fff",
    padding: Platform.OS == 'ios' ? 15 : 10,
    borderRadius: 10,
    elevation: 5,
  },
  searchInput: {
    color: "#ffcfb6",
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
    fontFamily: "Montserrat-Medium",
  },
  button: {
    width: "17%",
    backgroundColor: "#FFA071",
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS == "ios" ? "59%" : "59%",
    borderRadius: 10,
    elevation: 5,
  },
  menu: {
    marginLeft: "40%",
    borderRadius: 15,
    width: "5%",
  },
  mainText: {
    width: "85%",
    color: "#7f7f7f",
    fontSize: 24,
    // fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 30,
    fontFamily: "Montserrat-SemiBold",
  },
  scroll: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  cardSec: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 60,
  },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "94%",
    height: windowHeight / 6,
    elevation: 4,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    marginLeft: "2%",
  },
  cardImg: {
    width: "50%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 40,
  },
  cardBody: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "55%",
    height: "90%",
    paddingLeft: 10,
  },
  cardTopText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
  cardCenterText: {
    color: "#7f7f7f",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  bottomTextSec: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardBottomText: {
    color: "#000",
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "Montserrat-Medium",
  },
});

export default PatientsScreen;