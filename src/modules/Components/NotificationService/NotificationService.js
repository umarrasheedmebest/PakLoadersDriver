import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { Alert,Modal,Text } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import { useState } from 'react';
export async function requestUserPermission() {

  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}
const getFcmToken = async () => {
  
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  Alert.alert('Alert Title', fcmToken, [ {text: 'Copy message', onPress: () => CopyAlertMessage(), style: 'cancel'} ], { cancelable: true})
  CopyAlertMessage = async () => {
    Clipboard.setString(fcmToken)
}
  
 
  console.log(fcmToken, 'the old token',{ cancelable: true});
  
  if (!fcmToken || fcmToken == null) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'the new genrated token');
        await AsyncStorage.setItem('fcmToken', fcmToken);
       // Alert.alert('Alert Title', fcmToken, [ {text: 'Copy message', onPress: () => CopyAlertMessage(), style: 'cancel'} ], { cancelable: true})
  CopyAlertMessage = async () => {
    Clipboard.setString(fcmToken)
}
       
      }
    } catch (error) {
      console.log(error, 'error rasied in fcmToken');
    }
  }
 
};
export const notificationListener = async ({navigation}) => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage
      
    );
    if(remoteMessage.data.type=='message'){
      console.log("Navigate ")
    }
  });
  messaging().onMessage(async remoteMessage => {
    console.log('recived in Foreground', remoteMessage,"Type message",remoteMessage.data.type);
    
  });

  
  
  

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage
        );
        // if(remoteMessage.data.type=='message'){
        
        //   navigation.navigate("Verify")
          
        // }
      }
    });
};