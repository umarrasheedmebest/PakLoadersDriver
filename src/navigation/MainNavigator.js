import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Image,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Navigator,
  navigation,
  Fragment,
} from 'react-native';
import {createDrawerNavigator, DrawerView} from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
//Drawer screens
import Chat from '../modules/Auth/SideNavigation/Components/IconComponents/Chat/Chat';
import Insured_Languages from '../modules/Auth/SideNavigation/Components/IconComponents/Insured_Languages/Insured_Languages';
import ContactUS from '../modules/Auth/SideNavigation/Components/IconComponents/ContactUS/ContactUS';
import My_bids from '../modules/Auth/SideNavigation/Components/IconComponents/My_bids/My_bids';
import My_rides from '../modules/Auth/SideNavigation/Components/IconComponents/My_rides/My_rides';
import Packages from '../modules/Auth/SideNavigation/Components/IconComponents/Packages/Packages';
import Payments from '../modules/Auth/SideNavigation/Components/IconComponents/Payments/Payments';
import Share from '../modules/Auth/SideNavigation/Components/IconComponents/Share/Share';
import Rate_us from '../modules/Auth/SideNavigation/Components/IconComponents/Rate_us/Rate_us';
import CustomDrawer from '../modules/Auth/SideNavigation/Components/CustomDrawer';
import Bid_request from '../modules/Auth/BottomNavigation/screens/Ride/Screens/Bid_request';
import NavigationToScreens from './AuthNavigator';
// Stack Navigation Screens
import MyProfile from '../modules/Auth/MyProfile/MyProfile';
import Notification from '../modules/Auth/Notification/Notification';
import A_Vehicle from '../modules/Auth/A_Vehicle/A_Vehicle';
import Struck from '../modules/Auth/Struck/Struck';
import VDetails from '../modules/Auth/VDetails/VDetails';
import A_Vehicle_Verified from '../modules/Auth/A_Vehicle_Verified/A_Vehicle_Verified';
import ChangePassword from '../modules/Auth/ChangePassword/ChangePassword';
import EditProfile from '../modules/Auth/EditProfile/EditProfile';
import ChatList from '../modules/Auth/SideNavigation/Components/IconComponents/Chat/screens/ChatList';
import LiveChat from '../modules/Auth/SideNavigation/Components/IconComponents/Chat/screens/LiveChat';
import ViewDetails from '../modules/Auth/SideNavigation/Components/IconComponents/My_rides/Components/Ongoing/Screens/ViewDetails';
import TripDetails from '../modules/Auth/SideNavigation/Components/IconComponents/My_rides/Components/Ongoing/Screens/TripDetails';
import TripStarts from '../modules/Auth/SideNavigation/Components/IconComponents/My_rides/Components/Ongoing/Screens/TripStarts';
import UpComing_ViewDetails from '../modules/Auth/SideNavigation/Components/IconComponents/My_rides/Components/Upcoming/Screens/UpComing_ViewDetails';
import UpComing_TripDetails from '../modules/Auth/SideNavigation/Components/IconComponents/My_rides/Components/Upcoming/Screens/UpComing_TripDetails';
import Completed_TripDetails from '../modules/Auth/SideNavigation/Components/IconComponents/My_rides/Components/Completed/screens/Completed_TripDetails';
import Jazzcash from '../modules/Auth/Jazzcash';
import Pcredit from '../modules/Auth/Pcredit';
import Easypay from '../modules/Auth/Easypay';
import Bank from '../modules/Auth/Bank';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import MainContainer from '../modules/Auth/BottomNavigation/MainContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CardDesign_bids_ViewDetails from '../modules/Auth/BottomNavigation/screens/Ride/Screens/CardDesign_bids_ViewDetails';

function PackagesStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="Packages"
        component={Packages}
        options={{
          headerTitle: 'Packages',
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
        }}
      />
    </Stack.Navigator>
  );
}

function MyBidsStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="MyBidsStack"
        component={My_bids}
        options={{
          headerTitle: 'My Bids',
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
        }}
      />
    </Stack.Navigator>
  );
}

function MyProfileStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerTitle: 'My Profile',
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
        }}
      />
      <Stack.Screen
        name="A_Vehicle"
        component={A_Vehicle}
        options={{
          headerTitle: 'Edit / Update Vehicle',
        }}
      />
      <Stack.Screen
        name="Packages"
        component={PackagesStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: 'Change Password',
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: 'Edit Profile',
        }}
      />
      <Stack.Screen
        name="Struck"
        component={Struck}
        options={{
          headerTitle: 'Select Vehicle',
        }}
      />
      <Stack.Screen
        name="VDetails"
        component={VDetails}
        options={{
          headerTitle: 'Select Vehicle',
        }}
      />
      <Stack.Screen
        name="A_Vehicle_Verified"
        component={A_Vehicle_Verified}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MyRidesStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="MyRidesStack"
        component={My_rides}
        options={{
          headerTitle: 'Rides',
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
        }}
      />
      {/* ONGOING SCREENS */}
      <Stack.Screen
        name="ViewDetails"
        component={ViewDetails}
        options={{
          headerTitle: 'Rides',
        }}
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetails}
        options={{
          headerTitle: 'View Details',
        }}
      />
      <Stack.Screen
        name="TripStarts"
        component={TripStarts}
        options={{
          headerTitle: 'View Details',
        }}
      />

      {/* UPCOMING SCREENS */}
      <Stack.Screen
        name="UpComing_ViewDetails"
        component={UpComing_ViewDetails}
        options={{
          headerTitle: 'Rides',
        }}
      />

      <Stack.Screen
        name="UpComing_TripDetails"
        component={UpComing_TripDetails}
        options={{
          headerTitle: 'View Details',
        }}
      />

      {/* COMPLETED SCREEN */}
      <Stack.Screen
        name="Completed_TripDetails"
        component={Completed_TripDetails}
        options={{
          headerTitle: 'View Details',
        }}
      />
    </Stack.Navigator>
  );
}

function ChatStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="ChatStack"
        component={Chat}
        options={{
          headerTitle: 'Chat',
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
        }}
      />
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{
          headerTitle: 'ChatList',
        }}
      />
      <Stack.Screen
        name="LiveChat"
        component={LiveChat}
        options={{
          headerTitle: 'LiveChat',
        }}
      />
    </Stack.Navigator>
  );
}

function PaymentsStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="PaymentsStack"
        component={Payments}
        options={{
          headerTitle: 'Payment Method',
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
        }}
      />
      <Stack.Screen
        name="Pcredit"
        component={Pcredit}
        options={{
          headerTitle: 'Credit / Debit Card',
        }}
      />
      <Stack.Screen
        name="Easypay"
        component={Easypay}
        options={{
          headerTitle: 'Easy Paisa',
        }}
      />
      <Stack.Screen
        name="Jazzcash"
        component={Jazzcash}
        options={{
          headerTitle: 'JazzCash',
        }}
      />
      <Stack.Screen
        name="Bank"
        component={Bank}
        options={{
          headerTitle: 'Bank Account',
        }}
      />
    </Stack.Navigator>
  );
}

function ContactUsStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
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
      <Stack.Screen
        name="ContactUsStack"
        component={ContactUS}
        options={{
          headerTitle: 'Contact Us',
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
        }}
      />
    </Stack.Navigator>
  );
}
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
// Bottem navigation
function HomeNavigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    initialRouteName='Ride Request'
      screenOptions={{
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
      <Stack.Screen
        name="Ride Request"
        component={MainContainer}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <View style={{marginLeft: 5}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 5,
                  borderWidth: 2,
                  borderRadius: 60,
                  borderColor: 'white',
                }}
                onPress={() => navigation.openDrawer()}>
                <Image
                  source={require('../assets/MenuButtonIcon1.png')}
                  style={{height: 15, width: 15, borderColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 5}}>
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../modules/Auth/BottomNavigation/Images/NotificationBell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="CardDesign_bids_ViewDetails"
        component={CardDesign_bids_ViewDetails}
        options={{
          headerTitle: 'View details',
        }}
      />
       <Stack.Screen name="Bid_request" component={Bid_request}
                    options={{
                        headerTitle: 'View details',
                    }} />
    </Stack.Navigator>
  );
}

// function PackagesStack(){
//   const Stack = createNativeStackNavigator();
//   const navigation = useNavigation();
//   return(

//   )
// }

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <Drawer.Navigator
        initialRouteName="HomeNavigation"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#007BFE',
          drawerLabelStyle: {
            marginLeft: -10,
            color: '#5A5A5A',
            fontFamily: 'Montserrat_500Medium',
            fontSize: 16,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Home.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Packages"
          component={PackagesStack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Packages.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="My Bids"
          component={MyBidsStack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/My_bids.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="My Profile"
          component={MyProfileStack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Rate_us.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Insured Languages"
          component={Insured_Languages}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Insured_language.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="My Rides"
          component={MyRidesStack}
          options={{
            title: 'Rides',
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/My_rides.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={ChatStack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Chat.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Payments"
          component={PaymentsStack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Payment.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Share"
          component={Share}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Share.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactUsStack}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Contact_us.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Rate us"
          component={Rate_us}
          options={{
            drawerIcon: () => (
              <Image
                source={require('../modules/Auth/SideNavigation/Images/Icons/Rate_us.png')}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </React.Fragment>
  );
};
