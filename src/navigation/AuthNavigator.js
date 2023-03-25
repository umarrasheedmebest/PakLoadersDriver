import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// Screens
import CardDesign_bids_ViewDetails from '../modules/Auth/BottomNavigation/screens/Ride/Screens/CardDesign_bids_ViewDetails';
import Bid_request from '../modules/Auth/BottomNavigation/screens/Ride/Screens/Bid_request';
import MainContainer from '../modules/Auth/BottomNavigation/MainContainer';

// slider
import HowItWorks from '../modules/Auth/Slider/HowItWorks';

// login, sign in, sign up
//import Login from '../modules/Auth/Login';
import Signin from '../modules/Auth/Signin';
import Signup from '../modules/Auth/Signup';

import Verified from '../modules/Auth/Verified/Verified';
import Verify from '../modules/Auth/Verify/Verify';
import Info from '../modules/Auth/Info';
import Forget from '../modules/Auth/Forget';
import Cnic_Details from '../modules/Auth/Cnic_Details';
import Vehicle_Info from '../modules/Auth/Vehicle_Info';
// import Id_Confirmation from '../modules/Auth/Id_Confirmation';
import Driver_License from '../modules/Auth/Driver_License';
import Ownership_Verify from '../modules/Auth/Ownership_Verify/Ownership_Verify';
import Ownership_Verified from '../modules/Auth/Ownership_Verified';
import Forgot_Password from '../modules/Auth/Forgot_Password';
import Forgot_Password_Verify from '../modules/Auth/Forgot_Password_Verify/Forgot_Password_Verify';
import Reset_Password from '../modules/Auth/Reset_Password/Reset';
import SplashScreen from '../modules/Auth/SplashScreen/SplashScreen';
import VehicleSelection from '../modules/Auth/VehicleSelection/VehicleSelection'
import Notification from '../modules/Auth/Notification/Notification';

import { ScreenStackHeaderLeftView } from 'react-native-screens';

const Stack = createNativeStackNavigator();


function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'RatingScreen';
    switch (routeName) {
        case 'Ride':
            return 'Home';
        case 'Earning':
            return 'My Earnings';
        case 'Ratings':
            return 'Ratings';
    }
}


// Navigation to Screens

export default function NavigationToScreens({ navigation }) {
    return (
        <React.Fragment>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#4448FF',
                },
                headerTitleStyle: {
                    fontSize: 18,
                },
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerShadowVisible: false,
            }}>


                <Stack.Screen name="Splash Screen" component={SplashScreen}
                    options={{
                        headerShown: false,
                    }} />
                {/* slider */}
                {/* <Stack.Screen name="HowItWorks" component={HowItWorks}
                    options={{
                        headerShown: false,
                    }} /> */}

                {/* Signin */}
                <Stack.Screen name="Signin" component={Signin}
                    options={{
                        headerShown: false,
                    }} />

                {/* bottom tabs nav */}
                <Stack.Screen
                    name='Ride Request' component={MainContainer}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
                        headerLeft: () => (
                            <View style={{ marginLeft: 5, }}>
                                <TouchableOpacity style={{ padding: 10, marginTop: 5, borderWidth: 2, borderRadius: 60, borderColor: 'white' }}
                                    onPress={() => navigation.openDrawer()}>
                                    <Image source={require('../assets/MenuButtonIcon1.png')}
                                        style={{ height: 15, width: 15, borderColor: 'white' }} />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ marginRight: 5, }} >
                                <TouchableOpacity style={{ marginTop: 5 }} onPress={() => navigation.navigate('Notification')}>
                                    <Image source={require('../modules/Auth/BottomNavigation/Images/NotificationBell.png')}
                                        style={{ height: 24, width: 24 }} />
                                </TouchableOpacity>
                            </View>
                        ),
                    })} />

                {/* Login */}
                {/* <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false,
                    }} /> */}



                {/* Signup */}
                <Stack.Screen name="Signup" component={Signup}
                    options={{
                        headerShown: false,
                    }} />
                {/* Verify */}
                <Stack.Screen name="Verify" component={Verify}
                    options={{
                        headerShown: false
                    }} />
                {/* Verified */}
                <Stack.Screen name="Verified" component={Verified}
                    options={{
                        headerShown: false
                    }} />
                {/* Info */}
                <Stack.Screen name="Info" component={Info}
                    options={{
                        headerShown: false
                    }} />

                {/* Forget */}
                <Stack.Screen name="Forget" component={Forget}
                    options={{
                        headerShown: false
                    }} />
                {/* Cnic_Details */}
                <Stack.Screen name="Cnic_Details" component={Cnic_Details}
                    options={{
                        headerShown: false
                    }} />
                {/* Driver_License */}
                <Stack.Screen name="Driver_License" component={Driver_License}
                    options={{
                        headerShown: false
                    }} />
                {/* Vehicle_Info */}
                <Stack.Screen name="Vehicle_Info" component={Vehicle_Info}
                    options={{
                        headerShown: false
                    }} />
                {/* Id_Confirmation
                <Stack.Screen name="Id_Confirmation" component={Id_Confirmation}
                    options={{
                        headerShown: false
                    }} /> */}
                {/* Ownership_Verify */}
                <Stack.Screen name="Ownership_Verify" component={Ownership_Verify}
                    options={{
                        headerShown: false
                    }} />
                {/* Ownership_Verified */}
                <Stack.Screen name="Ownership_Verified" component={Ownership_Verified}
                    options={{
                        headerShown: false
                    }} />
                {/* Forgot_Password */}
                <Stack.Screen name="Forgot_Password" component={Forgot_Password}
                    options={{
                        headerShown: false
                    }} />

                {/* Forgot_Password_Verify */}
                <Stack.Screen name="Forgot_Password_Verify" component={Forgot_Password_Verify}
                    options={{
                        headerShown: false
                    }} />
                {/* Reset_Password */}
                <Stack.Screen name="Reset_Password" component={Reset_Password}
                    options={{
                        headerShown: false
                    }} />





                <Stack.Screen name="CardDesign_bids_ViewDetails" component={CardDesign_bids_ViewDetails}
                    options={{
                        headerTitle: 'View details',
                    }} />
                <Stack.Screen name="Bid_request" component={Bid_request}
                    options={{
                        headerTitle: 'View details',
                    }} />

                {/* VehicleSelection */}
                <Stack.Screen name="VehicleSelection" component={VehicleSelection}
                    options={{
                        headerShown: false
                    }} />
            </Stack.Navigator>
        </React.Fragment>
    )

}

