import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';
const { width, height } = Dimensions.get('window');

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Notification from '../../../../Notification/Notification';
import Essential from './screens/Essential';
import Prefered from './screens/Prefered';
import Ultimate from './screens/Ultimate';


const TabTop = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();



export default function PackagesComponent({ navigation }) {
  return (
    <React.Fragment>
      <Essential />
    </React.Fragment>
  );
};

