import * as React from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import {Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');

export default function ViewDetails({navigation}) {
    return(
      
      <View style = {{flex: 1}}>
            {/* Map background */}
        <View style = {{backgroundColor: '#4448FF', }}>
          <Image source={require('../../../Images/MapBackground.png')} 
          style = {{width: '100%', height: '100%' ,resizeMode: "stretch", marginTop: 10, 
          }}>
          </Image>
        </View>


            {/* background bottom  */}
          <View style={{backgroundColor: 'white', marginVertical: 35, 
          marginHorizontal: 15, marginTop: 'auto', borderRadius: 10, 
          padding: 10
          // alignSelf: 'baseline'
          // ,padding:100, 
          }}>

            {/* image name rating phone chat  */}
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {/* icon image */}
            <Image source={require('../../../Images/profile_pic.png')} />

            <View style = {{flexDirection: 'column', marginLeft: 10, }}>
                    {/* NAME */}
                <Text style = {{color: '#4448FF',marginBottom: 5, fontSize: 16,fontFamily: 'Montserrat_500Medium',}}>Asif Ali</Text>
                    {/* RATING  */}
                <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image source = {require('../../../Images/customer_rating.png')} 
                style = {{height: 15, width: 15, }}  />
                <Image source = {require('../../../Images/customer_rating.png')} 
                style = {{height: 15, width: 15, }}  />
                <Image source = {require('../../../Images/customer_rating.png')} 
                style = {{height: 15, width: 15, }}  />
                <Image source = {require('../../../Images/customer_rating.png')} 
                style = {{height: 15, width: 15, }}  />
                <Image source = {require('../../../Images/customer_rating.png')} 
                style = {{height: 15, width: 15, }}  /> 
                    {/* rating number */}
                <Text style = {{fontFamily: 'Montserrat_500Medium', fontSize:16, marginLeft: 6, }}>3.8</Text>
                </View>
            </View>
                {/* Chat and Call  */}
              <Image source={require('../../../Images/live_chat.png')} style = {{marginLeft: 'auto', marginHorizontal: 5}} />
              <Image source={require('../../../Images/phone_call.png')} style = {{ marginHorizontal: 5}} />
          </View>

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10,}}>

              <View style = {{flexDirection: 'column', alignItems: 'center'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 12}}>Pick up</Text>
                <Text style = {{fontSize: 12}}>Rawalpindi</Text>
              </View>
              <View style = {{flexDirection: 'column', alignItems: 'center'}}>
                <Text style = {{fontWeight: 'bold',fontSize: 12}}>Drop off</Text>
                <Text style = {{fontSize: 12}}>Islamabad</Text>
              </View>
              <View style = {{flexDirection: 'column', alignItems: 'center'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 12}}>Arrival Time</Text>
                <Text style = {{fontSize: 12}}>30:25 min</Text>
              </View>
            </View>
            <TouchableOpacity style = {{alignSelf: 'center'}} 
            onPress = {() => navigation.navigate('TripDetails')}
            >
              <Text style= {{fontSize: 14,paddingVertical: 10, paddingHorizontal: 20, color: 'white',
              backgroundColor: '#4448FF', borderRadius: 10}}>
              View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  } 
