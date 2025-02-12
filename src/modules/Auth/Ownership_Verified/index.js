import React from "react";
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
} from 'react-native';

import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const Ownership_VerifiedComponent = ({ navigation }) => {
    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginTop: '-20%',
                    marginHorizontal: 20, marginBottom: '40%', borderRadius: 10, elevation: 3,
                    paddingVertical: 35, paddingHorizontal: 15
                }}>
                    <ScrollView>

                        {/* Verified */}
                        <Image source={require('../../../assets/verified.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                        {/* Verified Text */}
                        <Text style={{ fontSize: 25, paddingVertical: 30, color: '#4448ff', textAlign: 'center', fontWeight: 'bold' }}>
                            Verified!!
                        </Text>

                        {/* successfully verified the account text  */}

                        <Text style={{ fontSize: 18, textAlign: "center" }}>You have successfully verified the account</Text>

                        {/* OkButton */}
                        <TouchableOpacity style={{ alignSelf: "center", marginTop: 50 }} onPress={() => navigation.navigate('Forgot_Password')}>
                            <Text style={{
                                fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                borderRadius: 10, marginLeft: 10,
                            }}>Ok</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    );
};

export default Ownership_VerifiedComponent;
