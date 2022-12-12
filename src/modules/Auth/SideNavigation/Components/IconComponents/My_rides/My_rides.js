import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

// TopTabs Screens
import Ongoing from './Components/Ongoing/Ongoing'
import Upcoming from './Components/Upcoming/Upcoming'
import Completed from './Components/Completed/Completed'
import Canceled from './Components/Canceled/Canceled'
import Notification from '../../../../Notification/Notification';

// Ongoing Screens
import ViewDetails from './Components/Ongoing/Screens/ViewDetails';
import TripDetails from './Components/Ongoing/Screens/TripDetails';
import TripStarts from './Components/Ongoing/Screens/TripStarts';

// UpComing Screen
import UpComing_ViewDetails from './Components/Upcoming/Screens/UpComing_ViewDetails';
import UpComing_TripDetails from './Components/Upcoming/Screens/UpComing_TripDetails';

// Completed Screen
import Completed_TripDetails from './Components/Completed/screens/Completed_TripDetails';

const TabTop = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();




export default function My_rides({navigatoin}) {
  return (
    <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
      <View style={{
        backgroundColor: 'white', flex: 1,
        borderTopLeftRadius: 15, borderTopRightRadius: 15,
        // marginTop: 10
      }}>
        <TabTop.Navigator
          // initialRouteName='Detail'
          screenOptions={{
            // headerStyle: {
            // backgroundColor: '#f4511e',},

            tabBarActiveTintColor: '#4448FF', tabBarInactiveTintColor: 'black',
            tabBarIndicatorStyle: { opacity: 0 },
            tabBarLabelStyle: { fontSize: 9, fontWeight: 'bold', fontFamily: 'Montserrat_500Medium' },
            tabBarStyle: {
              elevation: 5, backgroundColor: 'white',
              borderRadius: 15, marginHorizontal: 15, marginVertical: 25
            },
          }}>

          <TabTop.Screen name='Ongoing' component={Ongoing} />
          <TabTop.Screen name='Upcoming' component={Upcoming} />
          <TabTop.Screen name='Completed' component={Completed} />
          <TabTop.Screen name='Canceled' component={Canceled} />
        </TabTop.Navigator>

      </View>
    </View>
  )
}
