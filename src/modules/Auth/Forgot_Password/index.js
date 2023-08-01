import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import CustomText from '../../Common/CustomText';

const Forgot_PasswordComponent = ({ navigation }) => {
    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    backgroundColor: 'white', marginTop: '-20%', 
                    marginHorizontal: 20,  borderRadius: 10, elevation: 3,

                }}>
                    <ScrollView>
                        <View style={{ marginVertical: 35, marginHorizontal: 15 }}>
                            {/* sign in image "locker" */}
                            <Image source={require('../../../assets/signin.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                            {/* Sign in Text */}
                            <Text style={{ fontSize: 25, color: '#4448FF', fontWeight: "bold", marginTop: 25 }}>Forgot Password</Text>
                            
                            {/* Mobile Number/Email  */}
                            <View style={{ paddingTop: 10, marginTop: 25 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Mobile Number/Email</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='925202121234' style={{ padding: 15 }} 
                                        maxLength = {13}
                                    />
                                </View>
                            </View>

                            {/* Confirm Button  */}
                            <TouchableOpacity style={{ marginTop: 40, alignSelf: "center" }}
                                onPress={() => navigation.navigate('Forgot_Password_Verify')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40, paddingHorizontal: 57,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10,
                                }}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    )
}

export default Forgot_PasswordComponent;