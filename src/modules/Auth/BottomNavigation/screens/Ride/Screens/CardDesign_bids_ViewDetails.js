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
import PostDetails from './PostDetails'

export default function CardDesign_bids_ViewDetails() {
    const GetPostData = useSelector(state => state.post.singlePostResponse);
    const dataLanguage = useSelector((state) => state.language)

    console.log("CARD DESIGN BIDS VIEW DETAILS")
    console.log("Single Post Response")
    console.log(GetPostData);

    const imageUrls = GetPostData.flatMap(res => [`${IMAGE_URL}${res.image1}`, `${IMAGE_URL}${res.image2}`]);


    const navigation = useNavigation();
    const [screenList, setScreenList] = useState([1, 2]);
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
                            setCurrentIndex((x / width).toFixed(0));
                        }}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width, height }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            style={{
                                                width,
                                                resizeMode: 'cover',
                                                height,
                                                borderTopLeftRadius: 15,
                                                borderTopRightRadius: 15,
                                            }}
                                            source={{ uri: imageUrls[item - 1] }} // Use the correct index from imageUrls
                                        />
                                    </View>
                                </View>
                            );
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
                        <Text style={{ marginLeft: 10, fontSize: 14, color: '#4448FF', fontWeight: "bold", marginBottom: 5 }}>{dataLanguage ? eng.bidDetails : Urdu.bidDetails}</Text>

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
                                }}>{dataLanguage ? eng.ignore : Urdu.ignore}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#4448FF',
                                    borderColor: '#4448FF', color: 'white', marginLeft: 10, width: 130,
                                    textAlign: 'center',
                                    borderRadius: 10, marginRight: 10,
                                }}>{dataLanguage ? eng.bid : Urdu.bid}</Text>
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
                                {dataLanguage ? eng.sendBidRequest : Urdu.sendBidRequest}</Text>


                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                                <Text style={{ fontSize: 18 }}>{dataLanguage ? eng.bidOnRequestedCharges : Urdu.bidOnRequestedCharges}</Text>
                            </View>
                            {
                                checked == 'first' ? (

                                    <PostDetails />

                                ) : null
                            }

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                                <Text style={{ fontSize: 18 }}>{dataLanguage ? eng.bidOnCustomCharges : Urdu.bidOnCustomCharges}</Text>
                            </View>
                            {
                                checked == 'second' ? (
                                    <React.Fragment>

                                        <PostDetails />

                                        <View style={{ paddingTop: 10, marginHorizontal: 5 }}>
                                            <Text style={{
                                                position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                                            }}> {dataLanguage ? eng.bidAmount : Urdu.bidAmount}</Text>
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
                                    }}>{dataLanguage ? eng.close : Urdu.close}</Text>
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
                                    }}>{checked === 'first' ? dataLanguage ? eng.accept : Urdu.accept : dataLanguage ? eng.bidPlace : Urdu.bidPlace}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>
            </View>
        </View>
    )
}