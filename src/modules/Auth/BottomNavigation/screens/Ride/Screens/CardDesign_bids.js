import * as React from 'react';
import {
  View,
  Text,
  Image,
  style,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { singlePostRequest } from '../../../../../../Redux/slices/PostSlice';
import { useDispatch } from 'react-redux';

export default function CardDesign_bids(props) {
  const dispactch = useDispatch();
  const navigation = useNavigation();
  return (
    // background White and Round
    <View
      key={props.postId}
      style={{
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 15,
        padding: 10,
        marginHorizontal: 3,
        marginTop: 3,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CardDesign_bids_ViewDetails")
          dispactch(singlePostRequest(props.postId))
        }}>

        {/* icon_image NAME rating */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            {/* icon image */}
            <Image
              style={{ width: 40, height: 40, borderRadius: 100 }}
              source={props.profile_pic}
            />
            <View style={{ marginLeft: 10, flexDirection: 'column' }}>
              {/* NAME */}
              <Text style={{ fontSize: 14, fontFamily: 'Montserrat_500Medium' }}>
                {props.person_name}
              </Text>
              {/* RATING  */}
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../../Images/rating.png')} />
                <Image source={require('../../../Images/rating.png')} />
                <Image source={require('../../../Images/rating.png')} />
                <Image source={require('../../../Images/rating.png')} />
                <Image source={require('../../../Images/rating.png')} />
                {/* rating number */}
                <Text
                  style={{
                    fontFamily: 'Montserrat_500Medium',
                    fontSize: 9,
                    marginLeft: 6,
                  }}>
                  {props.rating}
                </Text>
              </View>
            </View>
          </View>
          {/* view Details Underline Button */}
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>

            <Text
              style={{
                marginRight: 5,
                alignSelf: 'flex-end',
                fontSize: 12,
                fontFamily: 'Poppins',
                color: '#5A5A5A',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              View details
            </Text>

          </View>
        </View>

        {/* pick up dropoff date  */}
        <View style={{ paddingVertical: 10 }}>
          {/* pick up  */}
          <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
            <Image
              source={require('../../../Images/pickup_loc_icon.png')}
              style={{ alignSelf: 'center', marginRight: 8 }}
            />
            <Text
              style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>
              Pick up:{' '}
            </Text>
            <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>
              {props.pick_up_loc}
            </Text>
          </View>
          {/*  dropoff  */}
          <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
            <Image
              source={require('../../../Images/drop_off_icon.png')}
              style={{ alignSelf: 'center', marginRight: 10 }}
            />
            <Text
              style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>
              Drop off:{' '}
            </Text>
            <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>
              {props.drop_off_loc}
            </Text>
          </View>
          {/* Date */}
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Image
              source={require('../../../Images/calendar_icon.png')}
              style={{ alignSelf: 'center', marginRight: 10 }}
            />
            <Text
              style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>
              Date of pick up:{' '}
            </Text>
            <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>
              {props.date_of_pick_up}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}


