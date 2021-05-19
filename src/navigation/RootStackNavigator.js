import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoadingScreen from '../screens/LoadingScreen';
import SigninScreen from '../screens/SigninScreen';
import AddDrugScreen from '../screens/AddDrugScreen';
import UpdateDrugScreen from '../screens/UpdateDrugScreen';
import PatientRegister from '../screens/PatientRegister';
import InventoryScreen from '../screens/TabScreens/InventoryScreen';
import PatientTabNavigation from './PatientTabNavigation';
import DrugTabNavigation from './DrugTabNavigation';

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="AddDrugScreen" component={AddDrugScreen} />
        <Stack.Screen name="UpdateDrugScreen" component={UpdateDrugScreen} />
        <Stack.Screen name="PatientRegister" component={PatientRegister} />
        <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
        <Stack.Screen name="PatientTabNavigation" component={PatientTabNavigation} />
        <Stack.Screen name="DrugTabNavigation" component={DrugTabNavigation} />
      </Stack.Navigator>
  );
}

export default RootStackScreen;