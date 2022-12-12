import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, style, Dimensions, } from 'react-native';
const { height, width } = Dimensions.get('window');


export default function MyProfile({ navigation }) {
    return (

        // background blue
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            
            {/* background white */}
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    {/* main container */}
                    <View style={{ flex: 1, margin: 15, }}>
                        {/* Edit button */}
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                                <Image source={require('../../../assets/MyProfile_Icons/editBtn.png')} />
                            </TouchableOpacity>
                        </View>
                        {/* Profile Picture and rating  */}
                        <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 30 }}>

                            <Image source={require('../../../assets/MyProfile_Icons/Profile_Pic.png')} />

                            {/* USER NAME */}
                            <Text style={{ fontSize: 16, marginTop: 10, color: '#4448FF' }}>Ali khan</Text>
                            {/* Rating Starts */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../../assets/MyProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/MyProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/MyProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/MyProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/MyProfile_Icons/rating.png')}
                                />
                                {/* rating number */}
                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 4, }}>(4.6)</Text>
                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 8, color: '#4448FF' }}>View all reviews</Text>
                            </View>
                        </View>
                        {/* Trips Completed, Cancelled, inprogress  */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 30 }}>
                            {/* Trips Completed  */}
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <View style={{ backgroundColor: 'white', elevation: 5, padding: 20, borderRadius: 60, marginBottom: 5 }}>
                                    <Image source={require('../../../assets/MyProfile_Icons/Trip_Completed.png')} />
                                </View>
                                <Text style={{ fontSize: 12 }}>Trips Completed</Text>
                                <Text style={{ fontSize: 12, color: '#444F88', fontWeight: 'bold' }}>3663</Text>
                            </View>
                            {/* Trips Inprogress  */}
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <View style={{ backgroundColor: 'white', elevation: 5, padding: 15, borderRadius: 60, marginBottom: 5 }}>
                                    <Image source={require('../../../assets/MyProfile_Icons/Trip_InProgress.png')} />
                                </View>
                                <Text style={{ fontSize: 12 }}>Trips Inprogress</Text>
                                <Text style={{ fontSize: 12, color: '#444F88', fontWeight: 'bold' }}>35</Text>
                            </View>
                            {/* Trips Cancelled  */}
                            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                                <View style={{ backgroundColor: 'white', elevation: 5, padding: 20, borderRadius: 60, marginBottom: 5 }}>
                                    <Image source={require('../../../assets/MyProfile_Icons/Trip_Cancelled.png')} />
                                </View>
                                <Text style={{ fontSize: 12 }}>Trips Cancelled</Text>
                                <Text style={{ fontSize: 12, color: '#444F88', fontWeight: 'bold' }}>26</Text>
                            </View>
                        </View>

                        {/* Subscripions Details */}
                        <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#4448FF', fontSize: 14, fontWeight: 'bold' }}>Subscripions Details</Text>
                                <Text style={{
                                    color: 'white', fontSize: 14, backgroundColor: '#D7373F',
                                    paddingVertical: 5, paddingHorizontal: 15, borderRadius: 60,
                                }}>Re-Subscribe</Text>
                            </View>
                            {/*  Subscripion Date  */}
                            <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                                <Image source={require('../../../assets/MyProfile_Icons/Date_of_Subscription.png')}
                                    style={{ alignSelf: 'center', marginRight: 10 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'poppins', color: '#4448FF' }}>Date of Subscripion: 29-09-2021</Text>
                            </View>
                            {/*  Subscripion explain  */}
                            <View style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                                <Image source={require('../../../assets/MyProfile_Icons/Expire_Time.png')}
                                    style={{ alignSelf: 'center', marginRight: 10 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'poppins', flexShrink: 1 }}>Your subscripion for preferred annual plan has expired please re-subscribe to get access.</Text>
                            </View>
                        </View>


                        {/* Vehicle Added Button */}
                        <View style={{
                            borderRadius: 10, flexDirection: 'row', borderWidth: 1, color: 'black', marginBottom: 10,
                            justifyContent: 'space-between', borderColor: '#4448FF', paddingVertical: 10, paddingHorizontal: 10,
                        }}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Image source={require('../../../assets/MyProfile_Icons/Vehicle_Added.png')}
                                    style={{ marginRight: 20, alignSelf: 'center' }} />
                                <TouchableOpacity onPress={() => navigation.navigate('A_Vehicle')}>
                                    <Text style={{ fontSize: 15, alignSelf: 'center' }}>Edit / Update Vehicle</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Arrow icon */}
                            <Image source={require('../../../assets/MyProfile_Icons/arrow_next.png')} />
                        </View>


                        {/* Packages Button */}
                        <View style={{
                            borderRadius: 10, flexDirection: 'row', borderWidth: 1, color: 'black', marginBottom: 10,
                            justifyContent: 'space-between', borderColor: '#4448FF', paddingVertical: 10, paddingHorizontal: 10,
                        }}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Image source={require('../../../assets/MyProfile_Icons/Packages.png')}
                                    style={{ marginRight: 20, alignSelf: 'center' }} />
                                <TouchableOpacity onPress={() => navigation.navigate('Packages')}>
                                    <Text style={{ fontSize: 15, alignSelf: 'center' }}>Packages</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Arrow icon */}
                            <Image source={require('../../../assets/MyProfile_Icons/arrow_next.png')} />
                        </View>


                        {/* Change Password Button */}
                        <View style={{
                            borderRadius: 10, flexDirection: 'row', borderWidth: 1, color: 'black', marginBottom: 10,
                            justifyContent: 'space-between', borderColor: '#4448FF', paddingVertical: 10, paddingHorizontal: 10,
                        }}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Image source={require('../../../assets/MyProfile_Icons/Change_Password.png')}
                                    style={{ marginRight: 20, alignSelf: 'center' }} />
                                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                                    <Text style={{ fontSize: 15, alignSelf: 'center' }}>Change Password</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Arrow icon */}
                            <Image source={require('../../../assets/MyProfile_Icons/arrow_next.png')} />
                        </View>


                        {/* Logout Button */}
                        <View style={{
                            borderRadius: 10, backgroundColor: '#F44336', flexDirection: 'row', borderWidth: 1, color: 'black', marginBottom: 10,
                            justifyContent: 'space-between', borderColor: '#4448FF', paddingVertical: 10, paddingHorizontal: 10,
                        }}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Image source={require('../../../assets/MyProfile_Icons/Logout.png')}
                                    style={{ marginRight: 20, alignSelf: 'center' }} />
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, alignSelf: 'center', color: '#fff', marginLeft: 5 }}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>
                </ScrollView>
            </View>
        </View>
    )
}