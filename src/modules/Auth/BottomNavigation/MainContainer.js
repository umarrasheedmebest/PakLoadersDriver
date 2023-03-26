import * as React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
// Screens
import RideScreen from './screens/Ride/RideScreen';
import EarningScreen from './screens/Earning/EarningScreen';
import RatingScreen from './screens/Rating/RatingScreen';

const Tab = createBottomTabNavigator();

// Bottom Tabs

export default function MainContainer() {
  return (
    <Tab.Navigator
    initialRouteName="EarningScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          margin: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,
          shadowColor: '#52006A', 
          elevation: 24,
          // shadowColor: '#000', shadowOffset: { width: 0, height: 0.4 }, shadowOpacity: 0.5
        },
      }}
    >

      <Tab.Screen name='Ride' component={RideScreen}
        options={{
          // title: 'RideScreen',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Image source={require('../BottomNavigation/Images/BottomNavigationIcons/Ride_Request.png')}
                resizeMode='contain' style={{ width: 20, height: 20, tintColor: focused ? '#4448FF' : '#DFDEDE' }} />
              <Text style={{ color: focused ? '#4448FF' : '#E1E1FF', fontSize: 12, padding: 10, fontFamily: 'Montserrat_500Medium' }}>Ride Requests</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name='Earning' component={EarningScreen}
        options={{
          // headerTitle: 'EarningScreen',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Image source={require('../BottomNavigation/Images/BottomNavigationIcons/My_Earnings.png')}
                resizeMode='contain' style={{ width: 20, height: 20, tintColor: focused ? '#4448FF' : '#DFDEDE' }} />
              <Text style={{ color: focused ? '#4448FF' : '#E1E1FF', fontSize: 12, padding: 10, fontFamily: 'Montserrat_500Medium' }}>My Earnings</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name='Ratings' component={RatingScreen}
        options={{
          // headerTitle: 'RatingScreen',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Image source={require('../BottomNavigation/Images/BottomNavigationIcons/Ratings.png')}
                resizeMode='contain' style={{ width: 20, height: 20, tintColor: focused ? '#4448FF' : '#DFDEDE' }} />
              <Text style={{ color: focused ? '#4448FF' : '#E1E1FF', fontSize: 12, padding: 10, fontFamily: 'Montserrat_500Medium' }}>Ratings</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}
