import { View, Text, Image, FlatList, TouchableOpacity, navigate, navigation } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ChatList from '../../Auth/SideNavigation/Components/IconComponents/Chat/screens/ChatList';
import { IMAGE_URL } from '../../../Redux/constent/constent';
import moment from 'moment';
import { useDispatch,} from 'react-redux';
import {eng, Urdu} from '../../../modules/Components/Api/Language'

const SinglePost = () => {
    const navigation = useNavigation();
    const GetPostData = useSelector(state => state.post.singlePostResponse);
    const userImage = useSelector(state => state.user.getUserResponse)
    const data = useSelector((state) => state.language)

    console.log('user Data')
    console.log(userImage)
    console.log("Single Post Response")
    console.log(GetPostData);
    const dataCards = ({ item }) => {

        const date = moment(item.pickup_date).utc().format('DD-MM-YYYY')
        const time = moment(item.pickup_date).utc().format('h:mm A')

        return (
            <View style={{ elevation: 5, marginHorizontal: 5, marginTop: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10, }}>

                {/* icon_image NAME rating */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* icon image */}
                        {/* <Image source={require('../../../modules/Auth/BottomNavigation/Images/profile_Pic_1.png')} /> */}
                        {
                            GetPostData.map( res => {
                                    return (
                                        <View key={res.id} style={{ flexDirection: 'row', }}>
                                            <Image
                                                style = {{height: 36, width: 36, borderRadius: 100}}
                                                source={{ uri: `${IMAGE_URL}${res.user_image}`}} 
                                                />
                                        </View>
                                    );
                                })
                        }

                        <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                            {/* NAME */}
                            <Text style={{ fontSize: 14, fontFamily: 'Montserrat_500Medium', }}>{item.full_name}</Text>
                            {/* RATING  */}
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../../../modules/Auth/BottomNavigation/Images/rating.png')}
                                />
                                <Image source={require('../../../modules/Auth/BottomNavigation/Images/rating.png')}
                                />
                                <Image source={require('../../../modules/Auth/BottomNavigation/Images/rating.png')}
                                />
                                <Image source={require('../../../modules/Auth/BottomNavigation/Images/rating.png')}
                                />
                                <Image source={require('../../../modules/Auth/BottomNavigation/Images/rating.png')}
                                />
                                {/* rating number */}
                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 6, }}>3.8</Text>
                            </View>
                        </View>
                    </View>

                    {/* Chat and Call  */}
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', }}>

                        <TouchableOpacity onPress={() => navigation.navigate('ChatList')}>

                            <Image source={require('../../../modules/Auth/BottomNavigation/Images/live_chat.png')} style={{ marginLeft: 'auto', marginHorizontal: 5 }} />
                        </TouchableOpacity>

                        <Image source={require('../../../modules/Auth/BottomNavigation/Images/phone_call.png')} style={{ marginHorizontal: 5 }} />
                    </View>
                </View>

                {/* pick up dropoff date timing charges weight  */}
                <View style={{ paddingVertical: 10 }}>
                    {/* charges */}
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <Image source={require('../../../modules/Auth/BottomNavigation/Images/charges.png')}
                            style={{ alignSelf: 'center', marginRight: 12, height: 20, width: 17 }}
                        />
                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>{data ? eng.charges : Urdu.charges}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>:{' '}Rs. 76346</Text>
                    </View>
                    {/*  Pick up  */}
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <Image source={require('../../../modules/Auth/BottomNavigation/Images/pickup_loc_icon.png')}
                            style={{ alignSelf: 'center', marginRight: 12, height: 20, width: 17 }}
                        />
                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>{data ? eng.pickUp : Urdu.pickUp}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>:{' '}{item.pickup_address}</Text>
                    </View>
                    {/*  dropoff  */}
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Image source={require('../../../modules/Auth/BottomNavigation/Images/drop_off_icon.png')}
                            style={{ alignSelf: 'center', marginRight: 12, height: 22, width: 17, }}
                        />
                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>{data ? eng.dropOff : Urdu.dropOff}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>:{' '}{item.dropoff_address}</Text>
                    </View>
                    {/* Date */}
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <Image source={require('../../../modules/Auth/BottomNavigation/Images/calendar_icon.png')}
                            style={{ alignSelf: 'center', marginRight: 12, height: 20, width: 17 }}
                        />
                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>{data ? eng.dateOfPickup : Urdu.dateOfPickup}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>:{' '}{date}</Text>
                    </View>
                    {/* Timing */}
                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                        <Image source={require('../../../modules/Auth/BottomNavigation/Images/time.png')}
                            style={{ alignSelf: 'center', marginRight: 12, height: 20, width: 17 }}
                        />
                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>{data ? eng.timing : Urdu.timing}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>:{' '}{time}</Text>
                    </View>
                    {/* weight */}
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('../../../modules/Auth/BottomNavigation/Images/weight.png')}
                            style={{ alignSelf: 'center', marginRight: 12, height: 20, width: 17 }}
                        />
                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>{data ? eng.weight : Urdu.weight}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>:{' '}{item.details}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                style={{ zIndex: 1 }}
                data={GetPostData}
                keyExtractor={item => item.post_id}
                renderItem={item => dataCards(item)}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SinglePost