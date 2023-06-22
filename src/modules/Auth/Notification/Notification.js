import * as React from 'react';
import {View, Text, Image, style, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions } from "react-native";
const {height, width} = Dimensions.get('window');

import CardDesign_Notification from './screens/CardDesign_Notification';

export default function Notification({navigation})
{
    return(
            // background White and Round 
        <View style = {{backgroundColor: '#4448FF', flex: 1,  }}>
            <View style = {{backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
             <View style = {{flex: 1, margin: 20, marginTop: 20}}>
                <ScrollView>
                    <CardDesign_Notification 
                        time = {'Just Now'}
                        heading1 = {'Upcoming Trip'}
                        heading2 = {'Your trip is going to begin in 10 mins'}
                        person_img = {require('../../../assets/Notification/profile_img_notification_1.png')}
                        notification_img = {require('../../../assets/Notification/trip_begin.png')}
                    />
                     <CardDesign_Notification 
                        time = {'02:06 AM'}
                        heading1 = {'George Jucha'}
                        heading2 = {'You successfully added new driver'}
                        person_img = {require('../../../assets/Notification/profile_img_notification_2.png')}
                        notification_img = {require('../../../assets/Notification/added_Driver.png')}
                    /> 
                            {/* Yesterday */}
                        <Text style={{marginBottom: 5, marginTop: 5,fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                            Yesterday
                        </Text> 

                     <CardDesign_Notification 
                        time = {'Yesterday'}
                        heading1 = {'Jhonson Smith'}
                        heading2 = {'You successfully added new driver'}
                        person_img = {require('../../../assets/Notification/profile_img_notification_3.png')}
                        notification_img = {require('../../../assets/Notification/added_Driver.png')}
                    /> 
                     <CardDesign_Notification 
                        time = {'Yesterday'}
                        heading1 = {'Upcoming Trip'}
                        heading2 = {'Your trip is going to begin in 10 mins'}
                        person_img = {require('../../../assets/Notification/profile_img_notification_4.png')}
                        notification_img = {require('../../../assets/Notification/trip_begin.png')}
                    /> 
                            {/* 15/08/2021 */}
                        <Text style={{marginBottom: 5, marginTop: 5,fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                        15/08/2021
                        </Text>                    
                     <CardDesign_Notification 
                        time = {'Yesterday'}
                        heading1 = {'Upcoming Trip'}
                        heading2 = {'You successfully added new Vehicle'}
                        person_img = {require('../../../assets/Notification/profile_img_notification_5.png')}
                        notification_img = {require('../../../assets/Notification/added_Vehicle.png')}
                    />                                                                     
                </ScrollView>
                </View>
            </View>
        </View>

    )
}