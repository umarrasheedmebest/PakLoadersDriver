import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Dimensions,

    // keyboard
} from 'react-native';

const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

const SignupComponent = ({ navigation }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [visiblePassword, setVisiblePassword] = React.useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(true);

    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '30%', width: '100%' }} />
                {/* card design white */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginTop: '-40%',
                    marginHorizontal: 20, marginBottom: '10%', borderRadius: 10, elevation: 3,
                    
                }}>
                    <ScrollView>
                    <View style={{ marginVertical: 35, marginHorizontal: 15 }}>

                        {/* sign in image "locker" */}
                        <Image source={require('../../../assets/signin.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                        {/* Sign Up Text */}
                        <Text style={{ fontSize: 25, color: '#4448FF', fontWeight: "bold", marginTop: 10 }}>Sign Up</Text>


                        {/* Full Name  */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                            }}> Full Name</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                <TextInput placeholder='Ali Khan' style={{ padding: 15 }} 
                                    maxLength = {15}

                                />
                            </View>
                        </View>

                        {/* Mobile Number  */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                            }}> Mobile Number</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                <TextInput placeholder='+9230012345678' style={{ padding: 15 }} 
                                    maxLength = {30}
                                    keyboardType = 'email-address'
                                />
                            </View>
                        </View>


                        {/*  Password */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 15, zIndex: 1, backgroundColor: 'white',
                            }}> Password</Text>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1,
                                borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, alignItems: 'center'
                            }}>

                                <TextInput style={{ padding: 15 }}
                                    placeholder='Password'
                                    secureTextEntry={visiblePassword}
                                    maxLength = {12}
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
                            <Text style={{
                                position: 'absolute', left: 15, zIndex: 1, backgroundColor: 'white',
                            }}> Confirm Password</Text>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                                borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5,
                            }}>
                                <TextInput placeholder='Confirm Password' style={{ padding: 15 }} 
                                maxLength = {12}
                                secureTextEntry={visibleConfirmPassword} />
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


                        {/* Sign Up Button */}
                        <TouchableOpacity style={{ alignSelf: "center", marginTop: 25 }} onPress={()=>navigation.navigate('Verify')}>
                            <Text style={{
                                fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                borderRadius: 10, marginLeft: 10,
                            }}>Sign Up</Text>
                        </TouchableOpacity>

                        {/* do not have account and sign up button */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            <Text>Do not have an account?</Text>
                            {/* sign in button */}
                            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                                <Text style={{ color: '#4448FF', marginLeft: 3, fontWeight: "bold" }}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    );
};


export default SignupComponent;
