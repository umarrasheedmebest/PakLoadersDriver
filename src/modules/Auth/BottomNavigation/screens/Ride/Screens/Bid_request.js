import React, { useState } from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions, } from "react-native";
import { Button, RadioButton } from 'react-native-paper';

const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

import CardDesign_bids from './CardDesign_bids';



export default function Bid_request() {

  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible2, setModalVisible2] = useState(true);
  const [checked, setChecked] = React.useState('first');

  const navigation = useNavigation();



  const ModelBoxDesign = () => {
    return (
      <View style={{ marginHorizontal: 5 }}>
        <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 5, padding: 10 }}>
          {/*  Pick up  */}
          <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
            <Image source={require('../../../Images/pickup_loc_icon.png')}
              style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 12 }}
            />
            <Text style={{ fontSize: 11, fontFamily: 'poppins', }}>Pick up: </Text>
            <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>Clark Pharmacy, 442 Rawalpindi</Text>
          </View>
          {/*  dropoff  */}
          <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
            <Image source={require('../../../Images/drop_off_icon.png')}
              style={{ alignSelf: 'center', marginRight: 12, height: 15, width: 12 }}
            />
            <Text style={{ fontSize: 11, fontFamily: 'poppins', }}>Drop off: </Text>
            <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>Clark Pharmacy, 442 Islamabad</Text>
          </View>
          {/* Date */}
          <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
            <Image source={require('../../../Images/calendar_icon.png')}
              style={{ alignSelf: 'center', marginRight: 12, height: 13, width: 12 }}
            />
            <Text style={{ fontSize: 11, fontFamily: 'poppins', fontWeight: 'bold' }}>Date of pick up: </Text>
            <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>12-02-2022, Monday</Text>
          </View>
          {/* Amount mentioned */}
          <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
            <Image source={require('../../../Images/charges.png')}
              style={{ alignSelf: 'center', marginRight: 12, height: 9, width: 13 }}
            />
            <Text style={{ fontSize: 11, fontFamily: 'poppins', }}>Amount mentioned: </Text>
            <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>Rs. 76346</Text>
          </View>

        </View>

      </View>
    )
  }


  return (
    <View style={{ flex: 1 }}>
      {/* Map background */}
      <View style={{ backgroundColor: '#4448FF', }}>
        <Image source={require('../../../Images/MapBackground.png')}
          style={{
            width: '100%', height: '100%', resizeMode: "stretch", marginTop: 10,
          }}>
        </Image>
      </View>


      {/* background bottom  */}
      <View style={{
        backgroundColor: 'white', marginVertical: 35,
        marginHorizontal: 15, marginTop: 'auto', borderRadius: 10,
        padding: 10
        // alignSelf: 'baseline'
        // ,padding:100, 
      }}>

        {/* image name rating phone chat  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {/* icon image */}
          <Image source={require('../../../Images/profile_Pic_5.png')} />

          <View style={{ flexDirection: 'column', marginLeft: 10, }}>
            {/* NAME */}
            <Text style={{ color: '#4448FF', marginBottom: 5, fontSize: 16, fontFamily: 'Montserrat_500Medium', }}>Asif Ali</Text>
            {/* RATING  */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 15, width: 15, }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 15, width: 15, }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 15, width: 15, }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 15, width: 15, }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 15, width: 15, }} />
              {/* rating number */}
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, marginLeft: 6, }}>3.8</Text>
            </View>
          </View>
          {/* Chat and Call  */}
          <Image source={require('../../../Images/live_chat.png')} style={{ marginLeft: 'auto', marginHorizontal: 5 }} />
          <Image source={require('../../../Images/phone_call.png')} style={{ marginHorizontal: 5 }} />
        </View>
        {/* pick up drop off arrival time request price weight  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Pick up</Text>
            <Text style={{ fontSize: 10 }}>Rawalpindi</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Drop off</Text>
            <Text style={{ fontSize: 10 }}>Islamabad</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Arrival Time</Text>
            <Text style={{ fontSize: 10 }}>30:25 min</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Requested Price</Text>
            <Text style={{ fontSize: 10 }}>Rs. 2400</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Weight</Text>
            <Text style={{ fontSize: 10 }}>150 kg</Text>
          </View>
        </View>


        {/* pick up date and time */}
        <View style={{ flexDirection: 'row', marginBottom: 5, marginLeft: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Pick up date: </Text>
          <Text style={{ fontSize: 12 }}>12-02-2022, 12:53 pm</Text>
        </View>




        {/* Ignore Accept Button  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>

          <TouchableOpacity>
            <Text style={{
              fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
              borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
              borderRadius: 10, marginRight: 10,
            }}>Ignore</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={{
              fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
              color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
              borderRadius: 10, marginLeft: 10,
            }}>Accept</Text>
          </TouchableOpacity>

        </View>



        {/*====================================POP UP WINDOW FIRST RECEIVER DETAILS====================================*/}

        {/* PopUP window */}
        <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(true)} >
          <View style={{ flex: 1, backgroundColor: '#000000aa', alignItems: 'center', }}>

            {/* background white  */}

            <View style={{ backgroundColor: 'white', marginTop: 35, borderRadius: 10, padding: 20, }}>
              {/* Send Bid Request Text */}
              <Text style={{ fontSize: 15, alignSelf: 'center', color: '#4448FF', marginBottom: 15 }}>
                Send Bid Request</Text>


              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text style={{ fontSize: 18 }}>Bid on requested charges</Text>
              </View>
              {
                checked == 'first' ? (

                  <ModelBoxDesign />

                ) : null
              }

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
                <Text style={{ fontSize: 18 }}>Bid on custom charges</Text>
              </View>
              {
                checked == 'second' ? (
                  <React.Fragment>

                    <ModelBoxDesign />

                    <View style={{ paddingTop: 10, marginHorizontal: 5 }}>
                      <Text style={{
                        position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                      }}> Your bid amount</Text>
                      <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                        <TextInput placeholder='Rs. 300' style={{ padding: 10 }} 
                          maxLength = {6}
                          keyboardType = 'numeric'
                        />
                      </View>
                    </View>
                  </React.Fragment>
                ) : null
              }



              {/* Close , Place bid Button Button  */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                {/* Close Button  */}
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={{
                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                    borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
                    borderRadius: 10, marginRight: 10,
                  }}>Close</Text>
                </TouchableOpacity>
                {/* Place bid Button  */}
                <TouchableOpacity onPress={() => setModalVisible(false)} onPressIn={() => setModalVisible2(true)} >
                  <Text style={{
                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                    borderRadius: 10, marginLeft: 10,
                  }}>Place bid</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </Modal>






      </View>
    </View>
  )
}