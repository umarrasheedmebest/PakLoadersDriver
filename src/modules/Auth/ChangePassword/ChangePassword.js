import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, style, Dimensions, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

export default function ChangePassword({ navigation }) {
    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const [visibleOldPassword, setVisibleOldPassword] = React.useState(true);

    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [visibleNewPassword, setVisibleNewPassword] = React.useState(true);

    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(true);

    return (
        // background white
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>

                {/* main container */}
                <ScrollView>
                    <View style={{ flex: 1, margin: 30, }}>

                        {/* Profile Picture and rating  */}
                        <View style={{ alignItems: 'center', marginBottom: 30 }}>
                            <Image source={require('../../../assets/MyProfile_Icons/Profile_Pic.png')} />
                            {/* USER NAME */}
                            <Text style={{ fontSize: 16, color: '#4448FF' }}>Ali khan</Text>
                        </View>

                        {/* Old Password */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 20, zIndex: 1, backgroundColor: 'white',
                            }}> Old Password</Text>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1,
                                borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, alignItems: 'center'
                            }}>

                                <TextInput style={{ padding: 20 }}
                                    placeholder='Old Password'
                                    secureTextEntry={visibleOldPassword}
                                    maxLength = {12}
                                />
                                <TouchableOpacity style={{ marginRight: 5, }} onPress={() => {
                                    setVisibleOldPassword(!visibleOldPassword)
                                    setShowOldPassword(!showOldPassword)
                                }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Icon
                                            name={showOldPassword === false ? 'eye' : 'eye-off'} color={'black'} size={26}
                                        />
                                        <Text style={{ marginLeft: 5, marginTop: 3 }}>
                                            {showOldPassword ? 'Hide' : 'Show'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* New Password */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 20, zIndex: 1, backgroundColor: 'white',
                            }}> New Password</Text>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                                borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5,
                            }}>
                                <TextInput placeholder='New Password' style={{ padding: 20 }} secureTextEntry={visibleNewPassword} 
                                    maxLength = {12}
                                />
                                <TouchableOpacity style={{ marginRight: 5, }} onPress={() => {
                                    setVisibleNewPassword(!visibleNewPassword)
                                    setShowNewPassword(!showNewPassword)
                                }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Icon
                                            name={showNewPassword === false ? 'eye' : 'eye-off'} color={'black'} size={26}
                                        />
                                        <Text style={{ marginLeft: 5, marginTop: 3 }}>
                                            {showNewPassword ? 'Hide' : 'Show'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>

                        {/* Confirm Password */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 20, zIndex: 1, backgroundColor: 'white',
                            }}> Confirm Password</Text>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                                borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5,
                            }}>
                                <TextInput placeholder='Confirm Password' style={{ padding: 20 }} secureTextEntry={visibleConfirmPassword} 
                                    maxLength = {12}
                                />
                                <TouchableOpacity style={{ marginRight: 5, }} onPress={() => {
                                    setVisibleConfirmPassword(!visibleConfirmPassword)
                                    setShowConfirmPassword(!showConfirmPassword)
                                }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Icon
                                            name={showConfirmPassword === false ? 'eye' : 'eye-off'} color={'black'} size={26}
                                        />
                                        <Text style={{ marginLeft: 5, marginTop: 3 }}>
                                            {showConfirmPassword ? 'Hide' : 'Show'}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Save and Cancel Button*/}
                        <View style={{ alignSelf: 'center' }}>
                            <View style={{ marginTop: 50, alignSelf: 'baseline', }}>
                                {/* Submit Button  */}
                                <TouchableOpacity >
                                    <Text style={{
                                        fontSize: 14, paddingVertical: 10, paddingHorizontal: 70, color: 'white', marginBottom: 15, borderWidth: 1, textAlign: 'center',
                                        borderColor: '#4448FF', backgroundColor: '#4448FF', borderRadius: 10,
                                    }}>Confirm</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}