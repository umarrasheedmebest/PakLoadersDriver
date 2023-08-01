import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, style } from 'react-native';
import CardDesign_Earnings from './Screens/CardDesign_Earnings';

import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
export default function Completed({ navigation }) {
    return (
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            {/* background white */}
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    <View style={{ marginHorizontal: 15, marginBottom: 20, }}>
                        {/* Today */}
                        <Text style={{ marginBottom: 5, marginTop: 5, fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                            Today
                        </Text>
                        <CardDesign_Earnings
                            color={'#4448FF'}
                            TripDate={"Today"}
                            TripId={"23635"}
                            PickUp={"Rawalpindi"}
                            DropOff={"Islamabad"}
                            ChargesIcon={require('../../Images/charges.png')}
                            ChargesText={'Charges: '}
                            Total_charges={'Rs.76346'}
                        />

                        {/* Yesterday */}
                        <Text style={{ marginBottom: 5, marginTop: 5, fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                            Yesterday
                        </Text>
                        <CardDesign_Earnings
                            color={'#4448FF'}
                            TripDate={"Today"}
                            TripId={"23635"}
                            PickUp={"Rawalpindi"}
                            DropOff={"Islamabad"}
                            ChargesIcon={require('../../Images/charges.png')}
                            ChargesText={'Charges: '}
                            Total_charges={'Rs.76346'}
                        />
                        <CardDesign_Earnings
                            color={'#4448FF'}
                            TripDate={"Today"}
                            TripId={"23635"}
                            PickUp={"Rawalpindi"}
                            DropOff={"Islamabad"}
                            ChargesIcon={require('../../Images/charges.png')}
                            ChargesText={'Charges: '}
                            Total_charges={'Rs.76346'}
                        />

                        {/* 20/08/2022 */}
                        <Text style={{ marginBottom: 5, marginTop: 5, fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                            20/08/2022
                        </Text>
                        <CardDesign_Earnings
                            color={'#4448FF'}
                            TripDate={"Today"}
                            TripId={"23635"}
                            PickUp={"Rawalpindi"}
                            DropOff={"Islamabad"}
                            ChargesIcon={require('../../Images/charges.png')}
                            ChargesText={'Charges: '}
                            Total_charges={'Rs.76346'}
                        />

                        {/* 15/08/2022 */}
                        <Text style={{ marginBottom: 5, marginTop: 5, fontSize: 13, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#5A5A5A' }}>
                            15/08/2022
                        </Text>
                        <CardDesign_Earnings

                            color={'#4448FF'}
                            TripDate={"Today"}
                            TripId={"23635"}
                            PickUp={"Rawalpindi"}
                            DropOff={"Islamabad"}
                            ChargesIcon={require('../../Images/charges.png')}
                            ChargesText={'Charges: '}
                            Total_charges={'Rs.76346'}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}