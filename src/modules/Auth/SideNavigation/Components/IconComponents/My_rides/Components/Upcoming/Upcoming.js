import * as React from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView, style} from 'react-native';
import CardDesignScreen from '../../CardDesignScreen';
import {Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');

export default function Upcoming() {
    return (
        <ScrollView style = {{backgroundColor: 'white'}}>
        
                    <View style={{marginHorizontal: 15, marginBottom: 20, }}>
                            {/* Today */}
                        <Text style={{marginBottom: 5, marginTop: 5,fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                            Today
                        </Text>
                            <CardDesignScreen
                                navToScreen = {'UpComing_ViewDetails'}
                                color = {'#4448FF'}
                                ViewDet = {'View details'}
                                decorationline = {'underline'}
                                TripDate = {"Today"}
                                TripId = {"23635"}
                                PickUp = {"Rawalpindi"}
                                DropOff ={"Islamabad"}
                            />

                            {/* Yesterday */}
                        <Text style={{marginBottom: 5, marginTop: 5,fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                            Yesterday
                        </Text>
                            <CardDesignScreen
                                ViewDet = {'View details'}
                                navToScreen = {'UpComing_ViewDetails'}
                                color = {'#4448FF'}
                                decorationline = {'underline'}
                                TripDate = {"Today"}
                                TripId = {"23635"}
                                PickUp = {"Rawalpindi"}
                                DropOff ={"Islamabad"}
                            />
                            <CardDesignScreen
                                ViewDet = {'View details'}
                                navToScreen = {'UpComing_ViewDetails'}
                                color = {'#4448FF'}
                                decorationline = {'underline'}
                                TripDate = {"Today"}
                                TripId = {"23635"}
                                PickUp = {"Rawalpindi"}
                                DropOff ={"Islamabad"}
                            />
                    </View>
        </ScrollView>
    );
}

