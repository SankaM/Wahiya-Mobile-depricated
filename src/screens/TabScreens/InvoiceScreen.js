import React from "react";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Badge } from "react-native-paper";
import { windowHeight, windowWidth } from "../../utils/Dimensions";

const InvoiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bg2.png")}
        style={styles.mainImage}
      />
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back-outline"
              size={30}
              color="#FFA071"
              style={{ marginTop: 20 }}
            />
          </TouchableOpacity>

          <Text style={styles.bottomText}>Invoice</Text>

          <View style={styles.patientsProSec}>
            <View style={styles.profileHead}>
              <Text style={styles.heading}>Patient's Name</Text>
              {/* <FontAwesome5
                name="user-alt"
                size={18}
                color="#666"
                style={{ marginLeft: 10 }}
              /> */}
              <Image
                style={{ marginLeft: 10, width: 14, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/images/icons/user.png")}
              />
            </View>
            <View style={styles.profileNameSec}>
              <Text style={styles.profileName}>Linda Williams</Text>
            </View>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, width: "100%", height: windowHeight }}
          >
            <View style={styles.topHeading}>
              <Text style={styles.topText}>Drugs</Text>
              {/* <MaterialCommunityIcons name="pill" size={22} color="#666" /> */}
              <Image
                style={{ marginLeft: 10, width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/images/icons/drug.png")}
              />
            </View>
            <View style={styles.card}>
              <View style={styles.leftSec}>
                <Image
                  source={require("../../assets/images/med_1.png")}
                  style={styles.cardImage}
                />
                <Badge style={styles.badge}>2</Badge>
                <View style={styles.cardBody}>
                  <View style={styles.topSec}>
                    <Text style={styles.topTopText}>iBuprofen</Text>
                    <Text style={styles.topBottomText}>250mg</Text>
                  </View>
                  <View style={styles.bottomSec}>
                    <Text style={styles.bottomLeftText}>Price</Text>
                    <Text style={styles.bottomRightText}>$1.25 X 2</Text>
                  </View>
                </View>
              </View>

              <View style={styles.rightSec}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>$2.45</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.leftSec}>
                <Image
                  source={require("../../assets/images/med_2.png")}
                  style={styles.cardImage}
                />
                <Badge style={styles.badge}>1</Badge>
                <View style={styles.cardBody}>
                  <View style={styles.topSec}>
                    <Text style={styles.topTopText}>Paracetamol</Text>
                    <Text style={styles.topBottomText}>250mg</Text>
                  </View>
                  <View style={styles.bottomSec}>
                    <Text style={styles.bottomLeftText}>Price</Text>
                    <Text style={styles.bottomRightText}>$1.25 X 2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rightSec}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>$2.45</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.leftSec}>
                <Image
                  source={require("../../assets/images/med_3.png")}
                  style={styles.cardImage}
                />
                <Badge style={styles.badge}>3</Badge>
                <View style={styles.cardBody}>
                  <View style={styles.topSec}>
                    <Text style={styles.topTopText}>Robitussin</Text>
                    <Text style={styles.topBottomText}>250mg</Text>
                  </View>
                  <View style={styles.bottomSec}>
                    <Text style={styles.bottomLeftText}>Price</Text>
                    <Text style={styles.bottomRightText}>$1.25 X 2</Text>
                  </View>
                </View>
              </View>

              <View style={styles.rightSec}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>$2.45</Text>
                </View>
              </View>
            </View>
            <View style={styles.totalSec}>
              <Text style={styles.totalLeftText}>Drugs Total</Text>
              <Text style={styles.totalRightText}>$8.75</Text>
            </View>

            <View style={{ ...styles.topHeading, marginVertical: 5 }}>
              <Text style={styles.topText}>Treatment</Text>
              <Image
                style={{ marginLeft: 10, width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../assets/images/icons/stethoscope.png")}
              />
              {/* <FontAwesome
                name="stethoscope"
                size={22}
                color="#666"
                style={{ marginLeft: 5 }}
              /> */}
            </View>
            <View style={styles.treatmentCard}>
              <View style={styles.treatmentLeftSec}>
                <Text style={styles.treatmentTopText}>Fever</Text>
                <View style={styles.treatmentBottomSec}>
                  <Text style={styles.treatmentBottomText}>
                    Diagnosed and Prescribted
                  </Text>
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={24}
                    color="#b2b2b2"
                  />
                </View>
              </View>
              <View style={styles.treatmentRightSec}>
                <Text style={styles.treatmentRightText}>$5.00</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.totalSec,
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderStyle: "solid",
                borderColor: "#000",
              }}
            >
              <Text style={styles.totalLeftText}>Treatment Total</Text>
              <Text style={styles.totalRightText}>$12.00</Text>
            </View>

            <View style={{ ...styles.totalSec, marginTop: 20 }}>
              <Text style={styles.totalLeftText}>SubTotal</Text>
              <Text style={styles.totalRightText}>$20.75</Text>
            </View>
            <View
              style={{
                ...styles.totalSec,
                backgroundColor: "#FFF7F4",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ ...styles.totalLeftText, color: "#666" }}>
                Total
              </Text>
              <Text style={{ ...styles.totalRightText, color: "#F76D28" }}>
                $20.75
              </Text>
            </View>

            <View
              style={{
                ...styles.totalSec,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#e2e2e2",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={styles.totalLeftText}>
                http://loremipsumdolorsita
              </Text>
              <MaterialCommunityIcons name="link" size={24} color="#FFA071" />
            </View>

            <TouchableOpacity
              style={styles.lastButton}
              onPress={() => alert("Sent")}
            >
              <Text style={styles.lastButtonText}>Send to Patient</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    backgroundColor: "#fff",
    marginTop: Constants.marginTop,
  },
  mainImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: "contain",
    position: "absolute",
    top: -300,
    left: 150,
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
    height: "47%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  bottomText: {
    color: "#000",
    fontSize: 26,
    paddingVertical: 20,
    fontFamily: "Montserrat-Regular",
  },
  patientsProSec: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  profileHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingVertical: 10,
  },
  heading: {
    color: "#666",
    fontSize: 18,
    paddingVertical: 5,
    fontFamily: "Montserrat-Medium",
  },
  profileNameSec: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
    padding: 15,
    borderRadius: 10,
  },
  profileName: {
    color: "#000000",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "95%",
    height: windowHeight,
    paddingHorizontal: "5%",
  },
  topHeading: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  topText: {
    color: "#666",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "12%",
    marginVertical: "2%",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderBottomColor: "#e2e2e2",
  },
  badge: {
    color: "#fff",
    backgroundColor: "#FFA071",
    position: "absolute",
    top: -5,
    left: 55,
    borderRadius: 6,
    fontFamily: "Montserrat-Medium",
  },
  leftSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  cardImage: {
    width: windowWidth / 5,
    height: windowHeight / 10,
    resizeMode: "stretch",
    borderRadius: 4,
  },
  cardBody: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
    marginLeft: 10,
  },
  topTopText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  topBottomText: {
    color: "#868686",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  bottomSec: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomLeftText: {
    color: "grey",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  bottomRightText: {
    color: "#000",
    fontSize: 16,
    paddingLeft: 5,
    fontFamily: "Montserrat-Medium",
  },
  rightSec: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: "5%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "13%",
    paddingVertical: "10%",
    backgroundColor: "#FFF0E8",
    borderRadius: 10,
  },
  buttonText: {
    color: "#F76D28",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  totalSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  totalLeftText: {
    color: "#7F7F7F",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  totalRightText: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  treatmentCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "8%",
    padding: "4%",
    marginVertical: "5%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e2e2e2",
    borderRadius: 10,
  },
  treatmentLeftSec: {
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  treatmentTopText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
  treatmentBottomSec: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  treatmentBottomText: {
    color: "#b2b2b2",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  treatmentRightSec: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  treatmentRightText: {
    color: "#F05217",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  lastButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ffa071",
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
    elevation: 3
  },
  lastButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
  },
});

export default InvoiceScreen;
