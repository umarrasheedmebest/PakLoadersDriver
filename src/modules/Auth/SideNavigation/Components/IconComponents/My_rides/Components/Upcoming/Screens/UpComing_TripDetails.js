import * as React from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity } from 'react-native';
import {Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');
export default function UpComing_TripDetails({navigation}) {
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
            {/* Trip Details Text */}
         <Text style = {{fontWeight: 'bold',fontSize: 21, alignSelf: 'center', color: '#4448FF', marginBottom: 15}}>Trip details</Text>
          
            {/* pick up date and time */}
            <View style = {{flexDirection: 'row', marginBottom: 15, marginLeft: 5, justifyContent: 'center'}}>
              <Text style = {{fontWeight: 'bold', fontSize: 16}}>Pick up date: </Text>
              <Text style = {{fontSize: 16}}>12-02-2022, 12:53 pm</Text>
          </View>

          {/* image name rating phone chat  */}
         <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              {/* User icon image */}
          <Image source={require('../../../Images/profile_pic.png')} />

          <View style = {{flexDirection: 'column', marginLeft: 10, }}>
                  {/* User NAME */}
              <Text style = {{color: '#4448FF',marginBottom: 5, fontSize: 16,fontFamily: 'Montserrat_500Medium',}}>Asif Ali</Text>
                  {/* RATING Stars */}
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
                  {/* User rating number */}
              <Text style = {{fontFamily: 'Mont serrat_500Medium', fontSize:16, marginLeft: 6, }}>3.8</Text>
              </View>
          </View>
              {/* Chat and Call  */}
            <Image source={require('../../../Images/live_chat.png')} style = {{marginLeft: 'auto', marginHorizontal: 5}} />
            <Image source={require('../../../Images/phone_call.png')} style = {{ marginHorizontal: 5}} />
         </View>

          <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10,}}>
                {/* Pick up  */}
            <View style = {{flexDirection: 'column', alignItems: 'center'}}>
              <Text style = {{fontWeight: 'bold', fontSize: 12}}>Pick up</Text>
              <Text style = {{fontSize: 12}}>Rawalpindi</Text>
            </View>
                {/* drop off */}
            <View style = {{flexDirection: 'column', alignItems: 'center'}}>
              <Text style = {{fontWeight: 'bold',fontSize: 12}}>Drop off</Text>
              <Text style = {{fontSize: 12}}>Islamabad</Text>
            </View>
                {/* Arrival Time */}
            <View style = {{flexDirection: 'column', alignItems: 'center'}}>
              <Text style = {{fontWeight: 'bold', fontSize: 12}}>Arrival Time</Text>
              <Text style = {{fontSize: 12}}>30:25 min</Text>
            </View>
                {/* Vehicle No  */}
            <View style = {{flexDirection: 'column', alignItems: 'center'}}>
              <Text style = {{fontWeight: 'bold', fontSize: 12}}>Vehicle No</Text>
              <Text style = {{fontSize: 12}}>RIL 2827</Text>
            </View>
          </View>



          {/* pick up location */}
          <View style = {{flexDirection: 'row',}}>
            <Image source = {require('../../../Images/pick_up2.png')} />
            <Text style = {{marginLeft: 8, alignSelf: 'center', fontSize: 16}}>Clark pharmacy, 442 Rawalpindi</Text>
          </View> 
          <View style = {{marginLeft: 13,width: 3, height: 25, borderWidth: 2, borderColor: '#DFDEDE'}}></View>
          
          {/* drop off location */}
          <View style = {{flexDirection: 'row'}}>
            <Image source = {require('../../../Images/drop_off2.png')}  />
            <Text style = {{marginLeft: 8, alignSelf: 'center', fontSize: 16}}>Clark pharmacy, 442 Islamabad</Text>
          </View>
          <View style = {{marginLeft: 13,width: 3, height: 25, borderWidth: 2, borderColor: '#DFDEDE'}}></View>

           {/* payment done */}
          <View style = {{flexDirection: 'row'}}>
            <Image source = {require('../../../Images/customer_payment2.png')} />
            <Text style = {{marginLeft: 8, alignSelf: 'center', fontSize: 16}}>Payment</Text>
          </View>
          <View style = {{marginLeft: 13,width: 3, height: 25, borderWidth: 2, borderColor: '#DFDEDE'}}></View>

          {/* trip completed */}
          <View style = {{flexDirection: 'row'}}>
            <Image source = {require('../../../Images/trip_completed2.png')} />
            <Text style = {{marginLeft: 8, alignSelf: 'center', fontSize: 16}}>Trip Completed</Text>
          </View>

            {/* Close Start Button  */}
          <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 25}}>

          <TouchableOpacity 
          onPress = {() => navigation.navigate('Upcoming')}
          >
            <Text style= {{ 
            fontSize: 14,paddingVertical: 10, paddingHorizontal: 40,           
              borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white', 
              borderRadius: 10, marginRight: 10,}}>Close</Text>
          </TouchableOpacity>


          </View>
        


        </View>
      </View>
    )
  } 
