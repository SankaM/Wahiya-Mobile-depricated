import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { windowWidth, windowHeight } from "../../utils/Dimensions";

const DATA = [
  {
    id: "1",
    name: "Paracetamol",
    mgs: "500 mg",
    qty: "50",
    date: "22 Nov, 2022",
    path: require("../../assets/images/med_2.jpg"),
  },
  {
    id: "2",
    name: "Amlodipine",
    mgs: "250 mg",
    qty: "30",
    date: "12 Dec, 2023",
    path: require("../../assets/images/med_2.jpg"),
  },
  {
    id: "3",
    name: "Paracetamol",
    mgs: "500 mg",
    qty: "50",
    date: "22 Nov, 2022",
    path: require("../../assets/images/med_2.jpg"),
  },
  {
    id: "4",
    name: "Amlodipine",
    mgs: "250 mg",
    qty: "30",
    date: "12 Dec, 2023",
    path: require("../../assets/images/med_2.jpg"),
  },
];

const InventoryScreen = ({ navigation }) => {
  const [show, setshow] = useState(true);
  const [col, setcol] = useState("name");
  const menuRef = useRef();
  const searchMenuRef = useRef();

  const menuShow = () => {
    searchMenuRef.current.hide();
    menuRef.current.show();
  };

  const searchMenuShow = () => {
    menuRef.current.hide();
    searchMenuRef.current.show();
  };

  const menuHide = () => {
    menuRef.current.hide();
  };

  const searchMenuHide = () => {
    searchMenuRef.current.hide();
  };

  const MedsCrad = ({ data }) => {
    return (
      <TouchableOpacity key={data.id} style={styles.card} onPress={() => navigation.navigate('UpdateDrugScreen')}>
        <Image
          style={styles.cardImage}
          resizeMode="contain"
          source={data.path}
        />

        <View style={styles.cardBody}>
          <Text style={styles.medName}>{data.name}</Text>

          <Text style={styles.mg}>{data.mgs}</Text>

          <View style={styles.typeSec}>
            {/* <MaterialCommunityIcons name="pill" size={20} color="#9C2DEA" /> */}
            <Image
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
              source={require("../../assets/images/icons/drugDark.png")}
            />
            <Text style={styles.type}>Tablets</Text>
          </View>

          <View style={styles.sec}>
            <Text style={styles.heading}>Qty</Text>
            <Text style={styles.text}>{data.qty}</Text>
          </View>

          <View style={styles.sec}>
            <Text style={styles.heading}>Expiry</Text>
            <Text style={styles.text}>{data.date}</Text>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("PatientTabNavigation")}
            >
              <Ionicons
                name="ios-arrow-back-outline"
                size={30}
                color="#fff"
                style={{ marginTop: 20 }}
              />
            </TouchableOpacity>

            <Text style={styles.bottomText}>Inventory</Text>

            <View style={styles.searchSec}>
              <View style={styles.searchBar}>
                <Ionicons name="search" size={24} color="#FFA071" />
                <TextInput
                  placeholder="Search Drugs"
                  placeholderTextColor="#ffcfb6"
                  style={styles.searchInput}
                  onFocus={() => searchMenuShow()}
                  onBlur={() => searchMenuHide()}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => menuShow()}
              >
                <Feather name="sliders" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* Search Menu */}
            <Menu ref={searchMenuRef} style={styles.searchMenu}>
              <MenuItem
                onPress={() => {
                  searchMenuHide("name");
                  setcol("name");
                }}
              >
                <View style={styles.proSec}>
                  <Image
                    style={styles.proImg}
                    source={require("../../assets/images/med_1.jpeg")}
                  />
                  <View>
                    <Text style={styles.medName}>iBuprofen</Text>
                    <Text style={styles.mg}>250 mg</Text>
                  </View>
                </View>
              </MenuItem>
              <MenuItem
                onPress={() => {
                  searchMenuHide("username");
                  setcol("username");
                }}
              >
                <View style={styles.proSec}>
                  <Image
                    style={styles.proImg}
                    source={require("../../assets/images/med_1.jpeg")}
                  />
                  <View>
                    <Text style={styles.medName}>Biotin</Text>
                    <Text style={styles.mg}>500 mg</Text>
                  </View>
                </View>
              </MenuItem>
              <MenuItem
                onPress={() => {
                  searchMenuHide("email");
                  setcol("email");
                }}
              >
                <View style={styles.proSec}>
                  <Image
                    style={styles.proImg}
                    source={require("../../assets/images/med_1.jpeg")}
                  />
                  <View>
                    <Text style={styles.medName}>Bunavail</Text>
                    <Text style={styles.mg}>300 mg</Text>
                  </View>
                </View>
              </MenuItem>
            </Menu>

            {/* Menu */}
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

          <View style={styles.slideBtn}>
            <TouchableOpacity
              disabled={show ? true : false}
              onPress={() => setshow(true)}
            >
              <AntDesign
                name="caretleft"
                size={20}
                color={show ? "#ffcfb6" : "#ffa071"}
              />
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity
              disabled={show ? false : true}
              onPress={() => setshow(false)}
            >
              <AntDesign
                name="caretright"
                size={20}
                color={show ? "#ffa071" : "#ffcfb6"}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cardSec}>
            {show ? (
              <Animatable.View animation={"slideInLeft"}>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => {
                    return <MedsCrad data={item} />;
                  }}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingBottom: 220,
                  }}
                />
              </Animatable.View>
            ) : (
              <Animatable.View animation={"slideInRight"}>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => {
                    return <MedsCrad data={item} />;
                  }}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingBottom: 220,
                  }}
                />
              </Animatable.View>
            )}
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
    backgroundColor: "#fff",
  },
  backgroundImage: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: windowWidth,
    height: windowHeight,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: windowWidth,
    height: windowHeight,
  },
  header: {
    width: "85%",
    height: "35%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  bottomText: {
    color: "#fff",
    fontSize: 24,
    paddingVertical: 20,
    fontFamily: "Montserrat-Medium",
  },
  searchSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
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
    height: "59%",
    borderRadius: 10,
    elevation: 5,
  },
  searchMenu: {
    borderRadius: 15,
    width: "68%",
    paddingVertical: 5,
  },
  proSec: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
  },
  proImg: {
    width: "50%",
    height: "50%",
    borderRadius: 5,
  },
  menu: {
    marginLeft: "45%",
    borderRadius: 15,
    width: "5%",
  },
  slideBtn: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-evenly",
    backgroundColor: "#FFF0E8",
    marginRight: "8%",
    paddingVertical: 5,
    width: "20%",
    borderRadius: 5,
    marginVertical: "3%",
  },
  line: {
    borderLeftWidth: 1,
    borderStyle: "solid",
    borderColor: "#CCC0BA",
  },
  cardSec: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: windowHeight,
    paddingBottom: 60,
  },
  card: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    elevation: 10,
    borderRadius: 20,
    marginTop: 5,
    marginHorizontal: "2.5%",
    paddingVertical: 4,
    padding: 6,
  },
  cardImage: {
    width: "90%",
    height: "50%",
    borderRadius: 40,
    top: 0,
  },
  cardBody: {
    alignItems: "flex-start",
    width: "90%",
    paddingTop: 5,
  },
  medName: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  mg: {
    color: "#7f7f7f",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  sec: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    color: "#9f9f9f",
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
  },
  text: {
    color: "#000",
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 5,
  },
  typeSec: {
    flexDirection: "row",
    alignItems: "center",
  },
  type: {
    color: "#8371FF",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 5,
  },
});

export default InventoryScreen;
