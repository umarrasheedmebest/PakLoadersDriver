import React, { useState } from 'react';
import { Text, View, Image, style, ScrollView, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput } from "react-native";
import { RadioButton } from 'react-native-paper';
import SinglePost from "../../../../../Components/NotificationService/SinglePost";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
const { width } = Dimensions.get('window');
const height = width * 0.7;
import { useNavigation } from '@react-navigation/native';
import { bidCreateRequest } from '../../../../../../Redux/slices/BidsSlice';
import { IMAGE_URL } from '../../../../../../Redux/constent/constent';
import { eng, Urdu } from '../../../../../../modules/Components/Api/Language'
import moment from 'moment';


export default function ModelBoxDesign() {
    const GetPostData = useSelector(state => state.post.singlePostResponse);
    const dataLanguage = useSelector((state) => state.language)

    return (
        <View style={{ marginHorizontal: 5 }}>
            {
                GetPostData.map((item) => {
                    const dateTime = moment(item.pickup_date).utc().format('DD-MM-YYYY h:mm A')
                    return (
                        <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 5, padding: 10 }}>
                            {/*  Pick up  */}
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Image source={require('../../../Images/pickup_loc_icon.png')}
                                    style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 12 }}
                                />
                                <Text style={{ fontSize: 11, fontFamily: 'poppins', }}>{dataLanguage ? eng.pickUp : Urdu.pickUp}</Text>
                                <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>:{' '}{item.pickup_address}</Text>

                            </View>
                            {/*  dropoff  */}
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Image source={require('../../../Images/drop_off_icon.png')}
                                    style={{ alignSelf: 'center', marginRight: 12, height: 15, width: 12 }}
                                />
                                <Text style={{ fontSize: 11, fontFamily: 'poppins', }}>{dataLanguage ? eng.dropOff : Urdu.dropOff}</Text>
                                <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>:{' '}{item.dropoff_address}</Text>

                            </View>
                            {/* Date */}
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Image source={require('../../../Images/calendar_icon.png')}
                                    style={{ alignSelf: 'center', marginRight: 12, height: 13, width: 12 }}
                                />
                                <Text style={{ fontSize: 11, fontFamily: 'poppins', fontWeight: 'bold' }}>{dataLanguage ? eng.dateOfPickup : Urdu.dateOfPickup}</Text>
                                <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>:{' '}{dateTime}</Text>
                            </View>
                            {/* Amount mentioned */}
                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                <Image source={require('../../../Images/charges.png')}
                                    style={{ alignSelf: 'center', marginRight: 12, height: 9, width: 13 }}
                                />
                                <Text style={{ fontSize: 11, fontFamily: 'poppins', }}>{dataLanguage ? eng.amountmention : Urdu.amountmention}</Text>
                                <Text style={{ fontSize: 11, fontFamily: 'poppins' }}>:{' '}Rs. 76346</Text>

                            </View>

                        </View>

                    )
                }
                )
            }
        </View>
    )
}

