import React, { useState } from "react";
import { Image, TouchableOpacity, View, StyleSheet } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import PatientsScreen from "../screens/TabScreens/PatientsScreen";
import InvoiceScreen from "../screens/TabScreens/InvoiceScreen";
import PatientsRecord from "../screens/PatientsRecord";
import AddPrescription from "../screens/AddPrescription";
import OrderScreen from "../screens/TabScreens/OrderScreen";
import InventoryScreen from "../screens/TabScreens/InventoryScreen";

const PatientsStack = createStackNavigator();

const PatientsStackNavigator = () => {
  return (
    <PatientsStack.Navigator
      initialRouteName="PatientsScreen"
      headerMode="none"
    >
      <PatientsStack.Screen name="PatientsScreen" component={PatientsScreen} />
      <PatientsStack.Screen name="PatientsRecord" component={PatientsRecord} />
      <PatientsStack.Screen
        name="AddPrescription"
        component={AddPrescription}
      />
    </PatientsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const PatientTabNavigation = ({ navigation }) => {
  const [routeName, setRouteName] = useState("Patients");

  const DrugTanNavigationFunction = () => {
    navigation.replace("DrugTabNavigation");
    setRouteName("Patients");
    return null;
  };

  const ActionButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate("PatientRegister");
          }}
        >
          <View style={{ ...styles.button, backgroundColor: "#ffa071" }}>
            {/* <FontAwesome5
              name="user-plus"
              size={20}
              color="#fff"
              style={styles.icon}
            /> */}
            <Image
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
              source={require("../assets/images/icons/addUser.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={routeName}
      headerMode="none"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Invoice") {
            return (
              <FontAwesome5
                name="clipboard-list"
                size={28}
                color={focused ? "#ffa071" : "#ffcfb6"}
              />
            );
          } else if (route.name === "Inventory") {
            return (
              <Entypo
                name="shop"
                size={30}
                color={focused ? "#ffa071" : "#ffcfb6"}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        inactiveTintColor: "#ffcfb6",
        activeTintColor: "#ffa071",
        labelStyle: {
          fontSize: 14,
          fontFamily: "Montserrat-Medium",
        },
        style: {
          height: 65,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: "#fff",
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Invoice" component={InvoiceScreen} />
      <Tab.Screen
        name="Patients"
        component={PatientsStackNavigator}
        options={{
          tabBarButton: (props, focused) => <ActionButton {...props} />,
        }}
      />
      <Tab.Screen name="Inventory" component={DrugTanNavigationFunction} />
    </Tab.Navigator>
  );
};

export default PatientTabNavigation;

const styles = StyleSheet.create({
  buttonBack: {
    top: -30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  icon: {
    padding: 12,
  },
});
// import React from "react";

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// import { Text, TouchableNativeFeedback, View } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import { heightRef } from "../utils/screenSize";
// import PatientsScreen from '../screens/TabScreens/PatientsScreen';
// import InvoiceScreen from '../screens/TabScreens/InvoiceScreen';
// import InventoryScreen from '../screens/TabScreens/InventoryScreen';

// const SearchStack = createStackNavigator();

// function TabScreenStack() {
//   return (
//     <SearchStack.Navigator initialRouteName="PatientsScreen" headerMode="none">
//       <SearchStack.Screen name="PatientsScreen" component={PatientsScreen} />
//     </SearchStack.Navigator>
//   );
// }

// const Tab = createMaterialTopTabNavigator();

// function MyTabBar({ state, navigation }) {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         position: "absolute",
//         bottom: 0 * heightRef,
//         alignItems: "flex-end",
//         justifyContent: "center",
//         elevation: 10,
//         height: 90 * heightRef,
//         width: "100%",
//       }}
//     >
//       <View
//         style={{
//           flex: 1,
//           height: 60 * heightRef,
//           justifyContent: "center",
//           alignContent: "center",
//           borderTopLeftRadius: 25,
//           // borderBottomLeftRadius: 25,
//           elevation: 10,
//           overflow: "hidden",
//         }}
//       >
//         <TouchableNativeFeedback
//           onPress={() => {
//             navigation.navigate("Invoice");
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: "white",
//               justifyContent: "center",
//               alignContent: "center",
//               borderTopLeftRadius: 20,
//               // borderBottomLeftRadius: 20,
//               elevation: 10,
//             }}
//           >
//             <View
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 paddingVertical: 5 * heightRef,
//               }}
//             >
//               <FontAwesome5
//                 name="receipt"
//                 size={24}
//                 color={state.index == 0 ? "#FFA071" : "#FFCFB6"}
//               />
//               <Text
//                 style={{
//                   textAlign: "center",
//                   color: state.index == 0 ? "#FFA071" : "#FFCFB6",
//                   fontSize: 17 * heightRef,
//                   fontFamily: "Montserrat-Medium",
//                 }}
//               >
//                 {state.routes[0].name}
//               </Text>
//             </View>
//           </View>
//         </TouchableNativeFeedback>
//       </View>

//       <View
//         style={{
//           flex: 1,
//           height: 60 * heightRef,
//           justifyContent: "center",
//           alignContent: "center",
//           borderTopRightRadius: 25,
//           // borderBottomRightRadius: 25,
//           elevation: 10,
//           overflow: "hidden",
//         }}
//       >
//         <TouchableNativeFeedback
//           onPress={() => {
//             navigation.navigate("Inventory");
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: "white",
//               justifyContent: "center",
//               alignContent: "center",
//               borderTopRightRadius: 10,
//               // borderBottomRightRadius: 10,
//               elevation: 10,
//             }}
//           >
//             <View
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 paddingVertical: 5 * heightRef,
//               }}
//             >
//               <MaterialCommunityIcons
//                 name="warehouse"
//                 size={24}
//                 color={state.index == 2 ? "#FFA071" : "#FFCFB6"}
//               />
//               <Text
//                 style={{
//                   textAlign: "center",
//                   color: state.index == 2 ? "#FFA071" : "#FFCFB6",
//                   fontSize: 17 * heightRef,
//                   fontFamily: "Montserrat-Medium",
//                 }}
//               >
//                 {state.routes[2].name}
//               </Text>
//             </View>
//           </View>
//         </TouchableNativeFeedback>
//       </View>
//       <View
//         style={{
//           position: "absolute",
//           height: 60 * heightRef,
//           width: 60 * heightRef,
//           justifyContent: "center",
//           alignItems: "center",
//           marginBottom: 10 * heightRef,
//           borderRadius: 40,
//           bottom: 20 * heightRef,
//           elevation: 13,
//           overflow: "hidden",
//         }}
//       >
//         <TouchableNativeFeedback
//           onPress={() => {
//             navigation.navigate("Patients");
//           }}
//           activeOpacity={0.9}
//         >
//           <View
//             style={{
//               backgroundColor: state.index == 1 ? "#FFA071" : "white",
//               position: "absolute",
//               height: 60 * heightRef,
//               width: 60 * heightRef,
//               justifyContent: "center",
//               alignItems: "center",
//               marginBottom: 10 * heightRef,
//               borderRadius: 40,
//               borderWidth: 1,
//               elevation: 13,
//               borderColor: "#FFA071",
//             }}
//           >
//             <FontAwesome5
//               name="user-plus"
//               size={24 * heightRef}
//               color={state.index == 1 ? "white" : "#FFA071"}
//             />
//           </View>
//         </TouchableNativeFeedback>
//       </View>
//     </View>
//   );
// }
// const TabNavigation = () => {
//   return (
//     <Tab.Navigator
//       headerMode="none"
//       tabBarPosition="bottom"
//       tabBar={(props) => <MyTabBar {...props} />}
//     >
//       <Tab.Screen name="Invoice" component={InvoiceScreen} />
//       <Tab.Screen name="Patients" component={TabScreenStack} />
//       <Tab.Screen name="Inventory" component={InventoryScreen} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigation;
