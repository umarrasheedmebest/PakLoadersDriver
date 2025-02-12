import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  style,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button, RadioButton } from 'react-native-paper';

//screens
import CardDesign_bids from './Screens/CardDesign_bids';
import { useDispatch, useSelector } from 'react-redux';
import { eng, Urdu } from '../../../../../modules/Components/Api/Language'

import { getAllPostRequest } from '../../../../../Redux/slices/PostSlice';
import { IMAGE_URL } from '../../../../../Redux/constent/constent';
import Slider from '@react-native-community/slider';


export default function RideScreen() {
  const data = useSelector((state) => state.language)
  const dispactch = useDispatch();
  const navigation = useNavigation();
  const useTokenSuc = useSelector(
    state => state.auth.signInOtpVarifyResponse.accessToken,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('first');
  useEffect(() => {
    dispactch(getAllPostRequest());
  }, []);
  var width = Dimensions.get('window').width;

  const GetPostData = useSelector(state => state.post.getAllPostResponse);
  console.log(GetPostData);
  const dataCards = ({ item }) => {
    return (
      <CardDesign_bids

        profile_pic={{
          uri: `${IMAGE_URL}${item.user_image}`,
        }}
        person_name={item.full_name}
        rating={'3.8'}
        pick_up_loc={item.pickup_address}
        drop_off_loc={item.dropoff_address}
        date_of_pick_up={item.pickup_date}
        postId={item.post_id}
      />
    );
  };
  return (
    // background White and Round
    <View style={{ backgroundColor: '#4448FF', flex: 1 }}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <View style={{ flex: 1, margin: 10 }}>
          {/* search Bar */}
          <View
            style={{
              backgroundColor: '#EDEDED',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              borderRadius: 10,
              marginBottom: 5,
            }}>
            {/* search button */}

            <Image
              source={require('../../Images/search_icon.png')}
              style={{ marginHorizontal: 15 }}
            />

            <TextInput placeholder="Search" marginRight="auto" />
            {/* filter button */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                source={require('../../Images/filter_icon.png')}
                style={{ marginHorizontal: 15 }}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* New Bid Text */}
            <View>
              <Text style={{ marginBottom: 5, color: '#4448FF', fontSize: 16 }}>
                New Post
              </Text>
            </View>
            <FlatList
              style={{ zIndex: 1 }}
              data={GetPostData}
              keyExtractor={item => item.post_id}
              renderItem={item => dataCards(item)}
              showsVerticalScrollIndicator={false}
            />
            {/* <CardDesign_bids
                            profile_pic={require('../../Images/profile_Pic_1.png')}
                            person_name={'Muhammads wasesem'}
                            rating={'3.8'}
                            pick_up_loc={'Clark Pharmacy, 442 Rawalpindi'}
                            drop_off_loc={'Clark Pharmacy, 442 Islamabad'}
                            date_of_pick_up={'12-02-2022, Monday'}
                        />
                        <CardDesign_bids
                            profile_pic={require('../../Images/profile_Pic_2.png')}
                            person_name={'Abdul Rehman'}
                            rating={'3.8'}
                            pick_up_loc={'Clark Pharmacy, 442 Rawalpindi'}
                            drop_off_loc={'Clark Pharmacy, 442 Islamabad'}
                            date_of_pick_up={'12-02-2022, Monday'}
                        />
                        <CardDesign_bids
                            profile_pic={require('../../Images/profile_Pic_3.png')}
                            person_name={'Sarim sheikh'}
                            rating={'3.8'}
                            pick_up_loc={'Clark Pharmacy, 442 Rawalpindi'}
                            drop_off_loc={'Clark Pharmacy, 442 Islamabad'}
                            date_of_pick_up={'12-02-2022, Monday'}
                        />
                        <CardDesign_bids
                            profile_pic={require('../../Images/profile_Pic_4.png')}
                            person_name={'Asif Ali'}
                            rating={'3.8'}
                            pick_up_loc={'Clark Pharmacy, 442 Rawalpindi'}
                            drop_off_loc={'Clark Pharmacy, 442 Islamabad'}
                            date_of_pick_up={'12-02-2022, Monday'}
                        /> */}
          </View>
        </View>
        {/*====================================POP UP WINDOW FILTER====================================*/}
        {/* <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(true)}>

          <View style={{ flex: 1, backgroundColor: '#000000aa', }}>

            <View
              style={{
                backgroundColor: 'white',
                marginTop: 35,
                paddingHorizontal: 20,
                paddingBottom: 20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>

              top dash
              <View
                style={{
                  width: 60,
                  height: 3,
                  marginTop: 10,
                  alignSelf: 'center',
                  backgroundColor: '#CCCCCC',
                }}
              />

              filter by text
              <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 40 }}>
                Filter By
              </Text>


              price range
              <View style={{ marginBottom: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                  />
                  <Text style={{ fontSize: 18 }}>Price Range</Text>
                </View>
                Price Slider
                <Slider
                  style={{ width: width * .8, marginTop: 20, alignSelf: 'center' }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#3480fa"
                  maximumTrackTintColor="#000000"
                />
              </View>

              Distance
              <View style={{ marginBottom: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                  />
                  <Text style={{ fontSize: 18 }}>Distance(Km)</Text>
                </View>
                Distance Slider
                <Slider
                  style={{ width: width * .8, marginTop: 20, alignSelf: 'center' }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#3480fa"
                  maximumTrackTintColor="#000000"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 25,
                }}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      fontSize: 14,
                      paddingVertical: 10,
                      paddingHorizontal: 40,
                      borderColor: '#4448FF',
                      color: '#4448FF',
                      borderWidth: 1,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginRight: 10,
                    }}>
                    Close
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      fontSize: 14,
                      paddingVertical: 10,
                      paddingHorizontal: 40,
                      color: 'white',
                      borderWidth: 1,
                      borderColor: '#4448FF',
                      backgroundColor: '#4448FF',
                      borderRadius: 10,
                      marginLeft: 10,
                    }}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>
    </View>
  );
}
