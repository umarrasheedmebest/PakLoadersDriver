import React, { useState } from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

export default function TripStarts({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
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
        {/* Trip Details Text */}
        <Text style={{ fontWeight: 'bold', fontSize: 21, alignSelf: 'center', color: '#4448FF', marginBottom: 25 }}>Trip details</Text>

        {/* image name rating phone chat  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {/* User icon image */}
          <Image source={require('../../../Images/profile_pic.png')} />

          <View style={{ flexDirection: 'column', marginLeft: 10, }}>
            {/* User NAME */}
            <Text style={{ color: '#4448FF', marginBottom: 5, fontSize: 16, fontFamily: 'Montserrat_500Medium', }}>Asif Ali</Text>
            {/* RATING Stars */}
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
              {/* User rating number */}
              <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, marginLeft: 6, }}>3.8</Text>
            </View>
          </View>
          {/* Chat and Call  */}
          <Image source={require('../../../Images/live_chat.png')} style={{ marginLeft: 'auto', marginHorizontal: 5 }} />
          <Image source={require('../../../Images/phone_call.png')} style={{ marginHorizontal: 5 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
          {/* Pick up  */}
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Pick up</Text>
            <Text style={{ fontSize: 12 }}>Rawalpindi</Text>
          </View>
          {/* drop off */}
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Drop off</Text>
            <Text style={{ fontSize: 12 }}>Islamabad</Text>
          </View>
          {/* Arrival Time */}
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Arrival Time</Text>
            <Text style={{ fontSize: 12 }}>30:25 min</Text>
          </View>
          {/* Vehicle No  */}
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Vehicle No</Text>
            <Text style={{ fontSize: 12 }}>RIL 2827</Text>
          </View>
        </View>
        {/* pick up date and time */}
        <View style={{ flexDirection: 'row', marginBottom: 25, marginLeft: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pick up date: </Text>
          <Text style={{ fontSize: 16 }}>12-02-2022, 12:53 pm</Text>
        </View>

        {/* pick up location */}
        <View style={{ flexDirection: 'row', }}>
          <Image source={require('../../../Images/pick_up.png')} />
          <Text style={{ marginLeft: 8, alignSelf: 'center', fontSize: 16 }}>Clark pharmacy, 442 Rawalpindi</Text>
        </View>
        <View style={{ marginLeft: 13, width: 3, height: 25, borderWidth: 2, borderColor: '#DFDEDE' }}></View>

        {/* drop off location */}
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../../Images/drop_off.png')} />
          <Text style={{ marginLeft: 8, alignSelf: 'center', fontSize: 16 }}>Clark pharmacy, 442 Islamabad</Text>
        </View>
        <View style={{ marginLeft: 13, width: 3, height: 25, borderWidth: 2, borderColor: '#DFDEDE' }}></View>

        {/* payment done */}
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../../Images/customer_payment2.png')} />
          <Text style={{ marginLeft: 8, alignSelf: 'center', fontSize: 16 }}>Payment</Text>
        </View>
        <View style={{ marginLeft: 13, width: 3, height: 25, borderWidth: 2, borderColor: '#DFDEDE' }}></View>

        {/* trip completed */}
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../../../Images/trip_completed2.png')} />
          <Text style={{ marginLeft: 8, alignSelf: 'center', fontSize: 16 }}>Trip Completed</Text>
        </View>

        {/* Close Start Button  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
          {/* Close Button */}
          <TouchableOpacity >
            <Text style={{
              fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
              borderColor: '#4448FF', color: '#4448FF', borderWidth: 2, backgroundColor: 'white',
              borderRadius: 10, marginRight: 10,
            }}>Close</Text>
          </TouchableOpacity>
          {/* End Ride Button */}
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{
              fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
              color: 'white', borderWidth: 2, borderColor: 'red', backgroundColor: 'red',
              borderRadius: 10, marginLeft: 10,
            }}>End Ride</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*====================================POP UP WINDOW FIRST RECEIVER DETAILS====================================*/}

      {/* PopUP window */}
      <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(true)} >
        <View style={{ flex: 1, backgroundColor: '#000000aa', alignItems: 'center', }}>

          {/* background white  */}
          <ScrollView>
            <View style={{
              backgroundColor: 'white', marginTop: 35,
              borderRadius: 10, padding: 20,
            }}>
              {/* Receiver Details Text */}
              <Text style={{ fontWeight: 'bold', fontSize: 21, alignSelf: 'center', color: '#4448FF', marginBottom: 25 }}>Receiver details</Text>
              {/*   Driver Text */}
              <Text style={{ fontSize: 16, color: '#4448FF', marginBottom: 5 }}>Driver</Text>
              {/* image name rating phone chat  */}
              <View style={{ flexDirection: 'row', }}>
                {/* User icon image */}
                <Image source={require('../../../Images/profile_pic.png')} />

                <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                  {/* User NAME */}
                  <Text style={{ color: '#4448FF', marginBottom: 5, fontSize: 16, fontFamily: 'Montserrat_500Medium', }}>Asif Ali</Text>
                  {/* RATING Stars */}
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
                    {/* User rating number */}
                    <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, marginLeft: 6, }}>3.8</Text>
                  </View>
                </View>
              </View>

              {/* Ride Details Text */}
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#4448FF', marginBottom: 10, marginTop: 25 }}>Ride details </Text>


              {/* pick up location */}
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Image source={require('../../../Images/pick_up.png')} style={{ width: 25, height: 25 }} />
                <Text style={{ marginLeft: 12, alignSelf: 'center', fontSize: 12 }}>Clark pharmacy, 442 Rawalpindi</Text>
              </View>

              {/* drop off location */}
              <View style={{ flexDirection: 'row', }}>
                <Image source={require('../../../Images/drop_off.png')} style={{ width: 25, height: 25 }} />
                <Text style={{ marginLeft: 12, alignSelf: 'center', fontSize: 12 }}>Clark pharmacy, 442 Islamabad</Text>
              </View>

              {/* Receiver name cnic phone number amount payed  */}
              <View style={{ paddingTop: 10, marginTop: 10 }}>
                <Text style={{
                  position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                }}> Receiver Name</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                  <TextInput placeholder='Ali Khan' style={{ padding: 10 }}
                    maxLength={10}
                  />
                </View>
              </View>
              {/* CNIC  */}
              <View style={{ paddingTop: 10, marginTop: 10 }}>
                <Text style={{
                  position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                }}> Cnic</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                  <TextInput placeholder='371021364780' style={{ padding: 10 }}
                    maxLength={13}
                    keyboardType='numeric'
                  />
                </View>
              </View>
              {/* phone number  */}
              <View style={{ paddingTop: 10, marginTop: 10 }}>
                <Text style={{
                  position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                }}> Mobile Number</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                  <TextInput placeholder='92327482937' style={{ padding: 10 }}
                    maxLength={12}
                    keyboardType='numeric'
                  />
                </View>
              </View>
              {/* amount payed  */}
              <View style={{ paddingTop: 10, marginTop: 10 }}>
                <Text style={{
                  position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                }}> Amount Payed</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                  <TextInput placeholder='Punjab' style={{ padding: 10 }}
                    maxLength={6}
                    keyboardType='numeric'
                  />
                </View>
              </View>


              {/* Close Submit Button  */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                {/* Close Button  */}
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={{
                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                    borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
                    borderRadius: 10, marginRight: 10,
                  }}>Close</Text>
                </TouchableOpacity>
                {/* Submit Button  */}
                <TouchableOpacity onPress={() => setModalVisible(false)} onPressIn={() => setModalVisible2(true)} >
                  <Text style={{
                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                    borderRadius: 10, marginLeft: 10,
                  }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/*====================================POP UP  SECOND WINDOW====================================*/}

      {/* PopUP window */}
      <Modal transparent={true} visible={modalVisible2} onRequestClose={() => setModalVisible2(false)} >
        <View style={{ flex: 1, backgroundColor: '#000000aa', alignItems: 'center', }}>
          {/* background card  */}
          <View style={{
            backgroundColor: 'white', marginVertical: 100,
            marginHorizontal: 25, marginBottom: 'auto', borderRadius: 10, padding: 10,
          }}>

            {/* image name rating phone chat  */}
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 }}>
              {/* User icon image */}
              <Image source={require('../../../Images/customer_pic.png')} />

              {/* User NAME */}
              <Text style={{ color: '#4448FF', marginBottom: 5, fontSize: 16, fontFamily: 'Montserrat_500Medium', marginTop: 10 }}>Asif Ali</Text>
              {/* RATING Stars */}
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
                {/* User rating number */}
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, marginLeft: 6, }}>4.5 of 5</Text>
                {/* total rating */}
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 16, marginLeft: 6, }}>(3537)</Text>
              </View>
            </View>
            {/* share experience with us text */}
            <Text style={{ fontSize: 14, marginBottom: 10, marginTop: 25 }}>Please share your experience with us </Text>
            {/* RATING Stars */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 20, width: 20, }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 20, width: 20, }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 20, width: 20, }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 20, width: 20, tintColor: '#DFDEDE' }} />
              <Image source={require('../../../Images/customer_rating.png')}
                style={{ height: 20, width: 20, tintColor: '#DFDEDE' }} />
            </View>

            {/* feedback box */}
            <TextInput placeholder='Write your feedback' style={{
              paddingHorizontal: 10, paddingBottom: 40, elevation: 1, marginTop: 10,
              borderColor: 'white', borderRadius: 5, borderWidth: 1, borderTopWidth: 6,
              borderLeftWidth: 5, borderRightWidth: 5,
            }} />

            {/* Close Button  */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>

              <TouchableOpacity onPress={() => setModalVisible2(false)} onPressIn={() => navigation.navigate('Ongoing')}>
                <Text style={{
                  fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                  color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                  borderRadius: 10, marginLeft: 10,
                }}>Close</Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}


