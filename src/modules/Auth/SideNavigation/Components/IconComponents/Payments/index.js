import React from "react";
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    Fragment,

} from 'react-native';

const { width, height } = Dimensions.get('window');
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function PaymentsComponent({ navigation }) {
    return (
        // background White and Round 
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    <View style={{ flex: 1, margin: 20, marginTop: 20 }}>
                        {/* Top Plan Details */}
                        <View style={{
                            elevation: 5, backgroundColor: 'white', borderRadius: 15, marginHorizontal: 3,
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
                                <Image source={require('../../../../../../assets/premium_icon.png')}
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
                                <Text style={{ fontSize: 16, alignSelf: "center", color: '#444BFF', fontWeight: "bold" }}>Annual Plan</Text>
                                <View style={{ marginLeft: 10, }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16, color: '#444BFF' }}>16.67</Text>
                                        <Text style={{ fontSize: 12, color: '#444BFF', alignSelf: "center" }}> USD/month</Text>
                                    </View>
                                    <Text style={{ fontSize: 12, color: '#444BFF', marginTop: 2 }}>&199.99 Billed Annually</Text>
                                </View>
                            </View>
                        </View>

                        {/* Credit / Debit Card Button */}
                        <View style={style.buttonBackground}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image source={require('../../../../../../assets/Payment/creditcard.png')}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate('Pcredit')}>
                                    <Text style={{ fontSize: 15, marginLeft: 30 }}>Credit / Debit Card</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Arrow icon */}
                            <Image source={require('../../../../../../assets/Payment/arrow_next.png')} />
                        </View>

                        {/* Easypaisa Button */}
                        <View style={style.buttonBackground}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image source={require('../../../../../../assets/Payment/easypaisa.png')}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate('Easypay')}>
                                    <Text style={{ fontSize: 15, marginLeft: 35 }}>Easypaisa</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Arrow icon */}
                            <Image source={require('../../../../../../assets/Payment/arrow_next.png')} />
                        </View>

                        {/* Jazzcash Button */}
                        <View style={style.buttonBackground}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image source={require('../../../../../../assets/Payment/jazzcash.png')}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate('Jazzcash')}>
                                    <Text style={{ fontSize: 15, marginLeft: 20 }}>Jazzcash</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Arrow icon */}
                            <Image source={require('../../../../../../assets/Payment/arrow_next.png')} />
                        </View>


                        {/* Bank Account Button */}
                        <View style={style.buttonBackground}>
                            {/* ICON and Text */}
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image source={require('../../../../../../assets/Payment/bank.png')}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate('Bank')}>
                                    <Text style={{ fontSize: 15, marginLeft: 23 }}>Bank Account</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Arrow icon */}
                            <Image source={require('../../../../../../assets/Payment/arrow_next.png')} />
                        </View>



                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    buttonBackground: {
        borderRadius: 10, flexDirection: 'row', backgroundColor: '#EDEDED',
        justifyContent: 'space-between', alignItems: "center", marginTop: 20,
        paddingVertical: 15, paddingHorizontal: 10,
    }
})