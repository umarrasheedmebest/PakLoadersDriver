import * as React from 'react';
import {  View, Text, Image, TouchableOpacity,ScrollView, style} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');


export default function CardDesign_Earnings(props) {
    const navigation = useNavigation();
    return (
        <ScrollView>
        
                    {/* ride details */}
                    <View style = {{marginHorizontal: 3, elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, }}>
                    
                        {/* view Details */}
                      

                       
                            {/* trip id, pick up and drop off */}
                        <View style = {{flexDirection: 'row', margin: 10, justifyContent: 'space-between'}}>

                            {/* Trip Location and trip id */}
                            <Image source={require('../../../Images/TripLocation.png')} ></Image>
                            <View style = {{flexDirection: 'column', marginHorizontal: 10, marginTop:-4}}>
                                <Text style = {{fontWeight: 'bold', alignSelf: 'center'}}>Trip id</Text>
                                <Text>{props.TripId}</Text>
                            </View>
                            
                            <View style = {{borderWidth: 0.4,}}></View>

                            <View style = {{flexDirection: 'column', marginHorizontal: 10, marginTop:-4}}>
                                <Text style = {{fontWeight: 'bold', alignSelf: 'center'}}>Pick up</Text>
                                <Text>{props.PickUp}</Text>
                            </View>   
                            
                            <View style = {{borderWidth: 0.4,}}></View>  
                            
                            <View style = {{flexDirection: 'column', marginHorizontal: 10, marginTop:-4}}>
                                <Text style = {{fontWeight: 'bold', alignSelf: 'center'}}>Drop off</Text>
                                <Text>{props.DropOff}</Text>
                            </View>                                          
                        </View>
                                    {/* Charges Detail  */}
                            <View style = {{flexDirection: 'row',alignSelf: 'flex-end', paddingHorizontal: 10, marginBottom: 5 }}>
                                        {/* ICON */}
                                <Image source={props.ChargesIcon} style = {{alignSelf: 'center', marginHorizontal: 5, }}/>
                                    {/* CHARGES TEXT  "Charges: " */}
                                <Text style = {{marginRight: 5,fontFamily: 'Poppins', 
                                    fontWeight: 'bold',}}>
                                        {props.ChargesText}
                                </Text>
                                        {/* amount */}
                                <Text style = {{marginRight: 5, fontSize: 14, fontFamily: 'Poppins', 
                                    }}>
                                        {props.Total_charges}
                                </Text>
                            </View>




                </View>
                
        </ScrollView>
    );
}




