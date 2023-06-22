import React, { Component } from "react";
import { TouchableOpacity, ImageBackground, Image, Text, View, Dimensions } from "react-native";

import { useNavigation, DrawerActions } from '@react-navigation/native';

import { BASE_URL } from "../../../../../Redux/constent/constent";
import { changeLanguage } from '../../../../../Redux/Actions'
import { languageReducer, english, urdu } from "../../../../../Redux/slices/LanguageSlice";


import { useDispatch, useSelector } from 'react-redux';
import { eng, Urdu } from "../../../../../modules/Components/Api/Language";

//import MyProfile from "../../../MyProfile/MyProfile";

const UpperDesignCode = () => {
    // Top Design
    const userData = useSelector((state) => state.user.getUserResponse);
    const counter = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View>
            {/* Truck Image */}
            <ImageBackground source={require('../../Images/BackSpace_Language/truck.png')} style={{ height: 210, width: '100%', }}>
                {/* Truck Image Color */}
                <View style={{ backgroundColor: 'rgba(68,72,255, .4)', width: '100%', height: 210, }}>
                    {/*Back Arrow and Languages*/}
                    {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}> */}
                    {/* Back Arrow */}
                    {/* <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                            <Image source={require('../../Images/BackSpace_Language/Back_Arrow.png')} style={{ width: 24, height: 24, margin: 21, }} />
                        </TouchableOpacity> */}
                    {/* Languages */}
                    <View style={{ flexDirection: "row", margin: 21, alignSelf: "flex-end" }}>
                        {/* English */}
                        <TouchableOpacity onPress={() => { dispatch(english()) }}
                            style={{ flexDirection: "row", backgroundColor: counter ? '#CCCCCC' : 'white', width: 52, height: 23, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }}>
                            <Image source={require('../../Images/BackSpace_Language/Uk.png')} style={{ alignSelf: "center", marginLeft: 2 }} />
                            <Text style={{ color: '#4448FF', alignSelf: "center", marginLeft: 2 }}>ENG</Text>
                        </TouchableOpacity>
                        {/* Urdu */}
                        <TouchableOpacity onPress={() => { dispatch(urdu()) }}
                            style={{ backgroundColor: counter ? 'white' : '#CCCCCC', flexDirection: "row", width: 52, height: 23, borderTopRightRadius: 7, borderBottomRightRadius: 7 }}>
                            <Image source={require('../../Images/BackSpace_Language/Pakistan.png')} style={{ alignSelf: "center", marginLeft: 2 }} />
                            <Text style={{ alignSelf: "center", marginLeft: 4 }}>UR</Text>
                        </TouchableOpacity>
                    </View>
                    {/* </View> */}
                    {/*Profile Icon*/}
                    {userData.map((item) => {
                        return <View key={item.number}>
                            <Image source={item.driver_image ? { uri: `${BASE_URL}images/${item.driver_image}` } : require('../../Images/BackSpace_Language/Person.png')} style={{ width: 68, height: 68, marginLeft: 23 }} />

                            {/*Ali Khan*/}
                            <Text style={{ fontSize: 20, marginLeft: 23, color: 'white', marginTop: 5, fontWeight: "bold" }}>{item.full_name}</Text>
                            {/*Number*/}
                            <Text style={{ fontSize: 20, marginLeft: 23, color: 'white', marginBottom: 10 }}>{item.number}</Text>


                        </View>
                    })}

                </View>
            </ImageBackground>
        </View>
    )
}

export default UpperDesignCode;