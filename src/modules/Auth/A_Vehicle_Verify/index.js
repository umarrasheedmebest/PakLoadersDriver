import React, { useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    // keyboard
} from 'react-native';
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');




const A_Vehicle_Verifycomponent = ({ navigation }) => {

    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginTop: '-20%',
                    marginHorizontal: 20, marginBottom: '30%', borderRadius: 10, elevation: 3,

                }}>
                    <ScrollView>
                        <View style={{ paddingVertical: 35, paddingHorizontal: 15 }}>

                            {/* sign in image "locker" */}
                            <Image source={require('../../../assets/verify.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                            {/* Account Verification */}
                            <Text style={{ fontSize: 25, paddingVertical: 30, color: '#4448ff', textAlign: 'center', fontWeight: 'bold' }}>
                                Ownership Verification
                            </Text>

                            {/* Varification Code digits */}
                            <View style={{
                                marginTop: 20, flexDirection: 'row',
                                alignContent: "center", alignSelf: "center"

                            }}>

                                <TextInput maxLength={1}
                                    style={{
                                        width: 30,
                                        height: 60,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#5a5a5a',
                                        marginRight: 20,
                                        alignContent: 'center',
                                        textAlign: 'center',
                                        fontSize: 35
                                    }} />

                                <TextInput maxLength={1}
                                    style={{
                                        width: 30,
                                        height: 60,
                                        fontSize: 35,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#5a5a5a',
                                        marginRight: 20,
                                        alignContent: 'center',
                                        textAlign: 'center',
                                    }} />

                                <TextInput maxLength={1}
                                    style={{
                                        width: 30,
                                        height: 60,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#5a5a5a',
                                        marginRight: 20,
                                        alignContent: 'center',
                                        textAlign: 'center',
                                        fontSize: 35
                                    }} />

                                <TextInput maxLength={1}
                                    style={{
                                        width: 30,
                                        height: 60,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#5a5a5a',
                                        marginRight: 20,
                                        alignContent: 'center',
                                        textAlign: 'center',
                                        fontSize: 35
                                    }} />

                                <TextInput maxLength={1}
                                    style={{
                                        width: 30,
                                        height: 60,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#5a5a5a',
                                        marginRight: 20,
                                        alignContent: 'center',
                                        textAlign: 'center',
                                        fontSize: 35
                                    }} />

                                <TextInput maxLength={1}
                                    style={{
                                        width: 30,
                                        height: 60,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#5a5a5a',
                                        alignContent: 'center',
                                        textAlign: 'center',
                                        fontSize: 35
                                    }} />
                            </View>

                            {/* code send again button and text  */}
                            <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 10 }}>
                                <Text>Haven't received a code?</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#444BFF', fontWeight: "bold", marginLeft: 3 }}>Send Again</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Verify Button */}
                            <TouchableOpacity style={{ alignSelf: "center", marginTop: 50 }} onPress={() => navigation.navigate('A_Vehicle_Verified')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10, marginLeft: 10,
                                }}>Verify</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    );
};

export default A_Vehicle_Verifycomponent;
