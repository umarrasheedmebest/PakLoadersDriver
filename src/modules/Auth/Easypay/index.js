import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    Modal,
    TextInput
} from 'react-native';

import CustomText from "../../Common/CustomText";
import { colors } from "../../../globalStyle";
const { width, height } = Dimensions.get('window');

const EasypayComponent = ({
    navigation,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        // background White and Round 
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>

                    <View style={{ flex: 1, margin: 20, marginTop: 20, }}>

                        {/* Top Plan Details */}
                        <View style={{
                            elevation: 5, backgroundColor: 'white', borderRadius: 15,
                            padding: 10
                        }}>
                            {/* Essential 4 feature View Details TEXT  */}
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 10 }}>
                                <Text style={{ color: '#4448FF', fontSize: 12 }}>Essential     4 Feature</Text>
                                <TouchableOpacity >
                                    <Text style={{
                                        fontSize: 8, fontFamily: 'Poppins', color: '#4448FF', marginRight: -10,
                                        textDecorationLine: "underline"
                                    }}>
                                        View Details
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Unlock 4 Powerful Features */}
                            <Text style={{ color: '#4448FF', fontSize: 18 }}>Unlock 4 Powerful Features</Text>
                            {/* premium icon and details  */}
                            <View style={{ flexDirection: "row", marginTop: 15, }}>
                                <Image source={require('../../../assets/premium_icon.png')}
                                    style={{ width: 18, height: 25 }} />
                                <View style={{ marginLeft: 10, }}>
                                    <Text style={{ fontSize: 14 }}>Unlimited Load Views</Text>
                                    <Text style={{ fontSize: 10, color: '#A5A5A5', marginTop: 5 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum ....</Text>
                                </View>
                            </View>

                            {/* Annual Plan details  */}
                            <View style={{
                                flexDirection: "row", marginTop: 15, padding: 10, alignSelf: "center",
                                backgroundColor: '#D8CFCF',
                                marginHorizontal: 15, borderRadius: 5
                            }}>
                                <Text style={{ fontSize: 16, alignSelf: "center",  fontWeight: "bold" }}>Annual Plan</Text>
                                <View style={{ marginLeft: 10, }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16, color: '#444BFF' }}>16.67</Text>
                                        <Text style={{ fontSize: 12,  alignSelf: "center" }}> USD/month</Text>
                                    </View>
                                    <Text style={{ fontSize: 12,  marginTop: 2 }}>&199.99 Billed Annually</Text>
                                </View>
                            </View>
                        </View>


                        {/* USER DETAIL CARD */}
                        <View style={style.cardDesign}>
                            <Image source={require('../../../assets/Payment/easypaisa.png')} />
                            <View>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Wasif Parvez</Text>
                                <Text style={{ fontSize: 12 }}>92 302 8373627</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12 }}>Current Balance</Text>
                                <Text style={{ fontSize: 12 }}>Rs. 6252</Text>
                            </View>
                            <Image source={require('../../../assets/Payment/current_payment.png')} />
                        </View>
                        {/* USER DETAIL CARD */}
                        <View style={style.cardDesign}>
                            <Image source={require('../../../assets/Payment/easypaisa.png')} />
                            <View>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Wasif Parvez</Text>
                                <Text style={{ fontSize: 12 }}>92 302 8373627</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12 }}>Current Balance</Text>
                                <Text style={{ fontSize: 12 }}>Rs. 6252</Text>
                            </View>
                            <Image source={require('../../../assets/Payment/previous_payment.png')} />
                        </View>
                        {/* USER DETAIL CARD */}
                        <View style={style.cardDesign}>
                            <Image source={require('../../../assets/Payment/easypaisa.png')} />
                            <View>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Wasif Parvez</Text>
                                <Text style={{ fontSize: 12 }}>92 302 8373627</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 12 }}>Current Balance</Text>
                                <Text style={{ fontSize: 12 }}>Rs. 6252</Text>
                            </View>
                            <Image source={require('../../../assets/Payment/previous_payment.png')} />
                        </View>


                        {/* Paynow button */}
                        <View style={{ marginTop: 35, alignSelf: 'center', }}>

                            <TouchableOpacity >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 70, color: 'white', marginBottom: 15, borderWidth: 1, textAlign: 'center',
                                    borderColor: '#4448FF', backgroundColor: '#4448FF', borderRadius: 10,
                                }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(true)}
                            style={{ alignSelf: 'flex-end', marginTop: 10 }}>
                            <Image source={require('../../../assets/Payment/add_card.png')} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* =================================================MODAL SCREEN========================================= */}
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    {/* PopUP window */}
                    <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(true)} >
                        <View style={{ flex: 1, backgroundColor: '#000000aa', alignItems: 'center', }}>

                            {/* background white  */}
                            <View style={{ backgroundColor: 'white', marginTop: 35, borderRadius: 10, padding: 20, margin: 20}}>

                                {/* Detail Text */}
                                <Image source={require('../../../assets/Payment/easypaisa_modalLogo.png')}
                                    style={{alignSelf: 'center'}}/>
                                <Text style={{ textAlign: 'center', marginTop: 30 }}>Pay with your Easypaisa Direct account. Enter the Easypaisa registered mobile number</Text>
                                <Text style={{ marginTop: 5, textAlign: 'center', color: '#444BFF' }}>Note: Ensure your Easypaisa Direct account is active and has sufficient balance.</Text>


                                <View style={{ paddingTop: 10, marginTop: 10 }}>
                                    {/* Easypaisa Mobile Number*/}
                                    <Text style={{
                                        position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                                    }}> Easypaisa Mobile Number </Text>
                                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                        <TextInput placeholder='923164788' style={{ padding: 10 }} 
                                        maxLength = {12}
                                        keyboardType = 'numeric'
                                        />
                                    </View>
                                </View>

                                {/* 4 Digit Pin */}
                                <View style={{ paddingTop: 10, marginTop: 10 }}>
                                    <Text style={{
                                        position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                                    }}> 4 Digit Pin</Text>
                                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                        <TextInput 
                                        placeholder='Pin' 
                                        style={{ padding: 10 }}
                                        secureTextEntry = {true}
                                        maxLength = {4}
                                        keyboardType = 'numeric'
                                         />
                                    </View>
                                </View>



                                {/* Cancel Confirm Button  */}
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                                    {/* Close Button  */}
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                                        <Text style={{
                                            fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                            borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
                                            borderRadius: 10, marginRight: 10,
                                        }}>Cancel</Text>
                                    </TouchableOpacity>
                                    {/* Submit Button  */}
                                    <TouchableOpacity onPress={() => setModalVisible(false)} >
                                        <Text style={{
                                            fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                            color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                            borderRadius: 10, marginLeft: 10,
                                        }}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </Modal>
                </View>


            </View>
        </View>
    )
};

const style = StyleSheet.create({
    cardDesign: {
        elevation: 5, backgroundColor: 'white', borderRadius: 15,
        padding: 10, marginTop: 20, flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', paddingVertical: 10
    }
})

export default EasypayComponent