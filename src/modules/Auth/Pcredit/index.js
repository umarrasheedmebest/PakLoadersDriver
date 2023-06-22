import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Modal,
    TextInput
} from 'react-native';
const { width, height } = Dimensions.get('window');



const windowWidth = Dimensions.get('window').width;

const PcreditComponent = ({ navigation, }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [number, setNumber] = React.useState('');


    const onChanged = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) === 1) {
                newText = newText + text[i];
                setNumber(newText);
            }
            else {
                setNumber();
            }
        }
    }


    // const onPress = () => {
    //     if (number.length !== 0) {
    //         Alert.alert(
    //             "Confirm Number",
    //             number,
    //             [
    //                 {
    //                     text: "Cancel",
    //                     onPress: () => console.log("Cancel Pressed"),
    //                 },

    //                 {
    //                     text: "OK",
    //                     onPress: () => console.log("OK Pressed"),
    //                 },
    //             ],
    //         );
    //         setNumber('');
    //         Keyboard.dismiss();
    //     }
    // }


    return (
        // background White and Round 
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    {/* 3 Card Images */}
                    <View style={{ flexDirection: 'row', marginTop: 20, alignContent: 'center', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/Payment/visa_cardImage1.png')}
                        // style={{ alignSelf: 'center' }}
                        />
                        <Image source={require('../../../assets/Payment/visa_cardImage2.png')}
                            style={{ marginHorizontal: 10 }} />
                        <Image source={require('../../../assets/Payment/visa_cardImage1.png')}
                        // style={{ alignSelf: 'center' }} 
                        />
                    </View>

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
                                <Text style={{ fontSize: 16, alignSelf: "center", fontWeight: "bold" }}>Annual Plan</Text>
                                <View style={{ marginLeft: 10, }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16, color: '#444BFF' }}>16.67</Text>
                                        <Text style={{ fontSize: 12, alignSelf: "center" }}> USD/month</Text>
                                    </View>
                                    <Text style={{ fontSize: 12, marginTop: 2 }}>&199.99 Billed Annually</Text>
                                </View>
                            </View>
                        </View>


                        {/* Paynow button */}
                        <View style={{ marginTop: 35, alignSelf: 'center', }}>

                            <TouchableOpacity >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 70, color: 'white', marginBottom: 15, borderWidth: 1, textAlign: 'center',
                                    borderColor: '#4448FF', backgroundColor: '#4448FF', borderRadius: 10,
                                }}>Pay Now</Text>
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
                            <View style={{ backgroundColor: 'white', marginTop: 35, borderRadius: 10, padding: 20, margin: 20 }}>

                                {/*  Details Text */}
                                <Text style={{ fontWeight: 'bold', fontSize: 21, alignSelf: 'center', color: '#4448FF', marginBottom: 5 }}>Add a Card</Text>
                                <Text style={{ alignSelf: 'center' }}>Please Enter your Card Details</Text>


                                <View style={{ paddingTop: 10, marginTop: 10 }}>
                                    {/* Card Holder Name */}
                                    <Text style={{
                                        position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                                    }}> Card Holder Name </Text>
                                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                        <TextInput placeholder='Ali Khan' style={{ padding: 10 }}
                                            maxLength={10}

                                        />
                                    </View>
                                </View>

                                {/* Amount Payed  */}
                                <View style={{ paddingTop: 10, marginTop: 10 }}>
                                    <Text style={{
                                        position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                                    }}> Amount Payed</Text>
                                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                        <TextInput placeholder='Punjab' style={{ padding: 10 }}
                                            maxLength={5}
                                            keyboardType='numeric'

                                        />
                                    </View>
                                </View>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                                    {/* Month  */}
                                    <View style={{ paddingTop: 10, marginTop: 10 }}>
                                        <Text style={{
                                            position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                                        }}> Month </Text>
                                        <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                            <TextInput placeholder='MM  ' style={{ marginRight: 30, marginLeft: 7 }}
                                                maxLength={2}
                                                keyboardType='numeric'
                                            />
                                        </View>
                                    </View>


                                    {/* Year  */}
                                    <View style={{ marginHorizontal: 10, paddingTop: 10, marginTop: 10 }}>
                                        <Text style={{
                                            position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                                        }}> Year </Text>
                                        <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                            <TextInput placeholder='YYYY'
                                                style={{ marginRight: 30, marginLeft: 7 }}
                                                maxLength={4}
                                             
                                            keyboardType='numeric'
                                            />
                                        </View>
                                    </View>


                                    {/* CVV */}
                                    <View style={{ paddingTop: 10, marginTop: 10 }}>
                                        <Text style={{
                                            position: 'absolute', left: 10, zIndex: 100, backgroundColor: 'white',
                                        }}> CVV </Text>
                                        <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                            <TextInput placeholder='1287'
                                                style={{ marginRight: 30, marginLeft: 7 }}
                                                maxLength={4}
                                                keyboardType='numeric'
                                            />
                                        </View>
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
    );
};


export default PcreditComponent;