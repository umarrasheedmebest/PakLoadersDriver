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




export default function CardDesign_bids_ViewDetails() {
    const images = [
        // 'https://images.pexels.com/photos/5920659/pexels-photo-5920659.jpeg?cs=srgb&dl=pexels-kampus-production-5920659.jpg&fm=jpg',
        // 'https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?cs=srgb&dl=pexels-quintin-gellar-6563903.jpg&fm=jpg',
        // 'https://images.pexels.com/photos/6470756/pexels-photo-6470756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        require('../../../Images/slider_image_4.png'),
        require('../../../Images/slider_image_4.png'),
        require('../../../Images/slider_image_4.png'),
    ]
    const navigation = useNavigation();
    const [screenList, setScreenList] = useState([1, 1, 1,])
    const [CurrentIndex, setCurrentIndex] = useState(0)

    const [modalVisible, setModalVisible] = useState(false);
    // const [modalVisible2, setModalVisible2] = useState(true);
    const [checked, setChecked] = React.useState('first');
    const [inputValue, setInputValue] = useState('')
    const postId = useSelector((state) => state.post.getAllPostResponse[0].post_id)
    console.log("Check Post Id", postId)
    const data = {
        "post_id": postId,
        "bid_amount": inputValue
    };
    const dispatch = useDispatch();




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
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', elevation: 5, flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    <FlatList
                        data={screenList}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            setCurrentIndex((x / width).toFixed(0))
                        }}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width, height, }}>
                                    {
                                        images.map((item, index) => (
                                            <Image
                                                key={index}
                                                source={item}
                                                // source ={{uri: image}}
                                                style={{ width, resizeMode: "cover", height, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}
                                            />))
                                    }

                                </View>
                            )
                        }}
                    />
                    {/* three dots */}
                    <View style={{ marginTop: 10, flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            screenList.map((item, index) => {
                                return (
                                    <View style={{ width: 10, height: 10, borderRadius: 4, backgroundColor: CurrentIndex == index ? '#4448FF' : '#CCCC', marginLeft: 4 }}></View>
                                )
                            })
                        }
                    </View>
                    {/* Card Box with All Details */}
                    <View style={{ margin: 10, }}>

                        {/* Bid Details */}
                        <Text style={{ marginLeft: 10, fontSize: 14, color: '#4448FF', fontWeight: "bold", marginBottom: 5 }}>Bid Details</Text>

                        <SinglePost />

                        {/* Ignore Bid Button  */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("Ride Request")
                            }} >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
                                    borderRadius: 10, marginRight: 10, textAlign: 'center', width: 130,
                                }}>Ignore</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#4448FF',
                                    borderColor: '#4448FF', color: 'white', marginLeft: 10, width: 130,
                                    textAlign: 'center',
                                    borderRadius: 10, marginRight: 10,
                                }}>Bid</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>


                {/*====================================POP UP WINDOW FIRST RECEIVER DETAILS====================================*/}

                {/* PopUP window */}
                <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
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
                                                    maxLength={6}
                                                    keyboardType='numeric'
                                                    value={inputValue}
                                                    onChangeText={(item) => setInputValue(item)}
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
                                <TouchableOpacity onPress={() => {
                                    dispatch(bidCreateRequest(data))
                                    setModalVisible(false)
                                }}
                                // onPressIn={() => setModalVisible2(true)} 
                                >
                                    <Text style={{
                                        fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                        color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                        borderRadius: 10, marginLeft: 10,
                                    }}>{checked === 'first' ? 'Accept' : 'Place Bid'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>

            </View>
        </View>
    )
}
