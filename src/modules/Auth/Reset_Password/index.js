import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Reset_PasswordComponent = ({
    navigateToHome,
    email,
    onPress,
    navigation,
    onSignup,


}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [visiblePassword, setVisiblePassword] = React.useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(true);
    return (

        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    backgroundColor: 'white', marginTop: '-20%',
                    marginHorizontal: 20, borderRadius: 10, elevation: 3, marginBottom: '10%'
                }}>

                    <ScrollView>
                        <View style = {{paddingVertical: 35, paddingHorizontal: 15}}>

                            {/* sign in image "locker" */}
                            <Image source={require('../../../assets/signin.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                            {/* Reset Password */}
                            <Text style={{ fontSize: 25, paddingVertical: 30, color: '#4448ff', marginLeft: 10, fontWeight: 'bold' }}>
                                Reset Password
                            </Text>


                            {/*  New Password */}
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                {/* <Text style={{
                                position: 'absolute', left: 15, zIndex: 1, backgroundColor: 'white',
                            }}> Password</Text> */}
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1,
                                    borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, alignItems: 'center'
                                }}>

                                    <TextInput style={{ padding: 15 }}
                                        placeholder='New Password'
                                        secureTextEntry={visiblePassword}
                                    />
                                    <TouchableOpacity style={{ marginRight: 5, }} onPress={() => {
                                        setVisiblePassword(!visiblePassword)
                                        setShowPassword(!showPassword)
                                    }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Icon
                                                name={showPassword === false ? 'eye' : 'eye-off'} color={'black'} size={26}
                                            />
                                            <Text style={{ marginLeft: 5, marginTop: 3 }}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>


                            {/* Confirm Password */}
                            <View style={{ paddingTop: 10, marginTop: 20 }}>
                                {/* <Text style={{
                                position: 'absolute', left: 15, zIndex: 1, backgroundColor: 'white',
                            }}> Confirm Password</Text> */}
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                                    borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5,
                                }}>
                                    <TextInput placeholder='Confirm Password' style={{ padding: 15 }} secureTextEntry={visibleConfirmPassword} />
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


                            {/* Confirm Button */}
                            <TouchableOpacity style={{ alignSelf: "center", marginTop: 25 }} onPress={() => navigation.navigate('Ride Request')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10, marginLeft: 10,
                                }}>Confirm</Text>
                            </TouchableOpacity>


                        </View>

                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    );
};

export default Reset_PasswordComponent;