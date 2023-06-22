import React, { useState } from "react";
import {
    Text,
    Modal,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,

} from 'react-native';
import { signinRequest } from '../../../Redux/slices/AuthSlice';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import unselectImage from '../../../assets/Login/unselect.png';
import selectImage from '../../../assets/Login/select.png';
import { useDispatch, useSelector } from 'react-redux';
import { eng, Urdu } from '../../../modules/Components/Api/Language'
import { languageReducer, english, urdu } from "../../../Redux/slices/LanguageSlice";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SigninComponent = ({ navigation, }) => {
    const dispatch = useDispatch();
    const signinRequestData = useSelector(state => state.auth.signInResponse);
    const data = useSelector((state) => state.language)
    const validNumber = typeof signinRequestData == 'string';
    console.log(validNumber)
    const [showPassword, setShowPassword] = React.useState(false);
    const [visiblePassword, setVisiblePassword] = React.useState(true);
    const [modalVisible, setModalVisible] = useState(true)
    const [number, setNumber] = useState('')
    const [errors, setErrors] = useState('')
    
    const ValidationNumber = (number) => {
        if (!number && number == '') {
            setErrors("Please Enter the Mobile ")
        } else {
            setErrors('')
            LoginFun(number)
        }
    }

    const LoginFun = (item) => {
        console.log(item)

        const number = { "number": item }
        dispatch(
            signinRequest(number)
        );
        navigation.navigate('Verify')
    }

    const [engSelection, setEngSelection] = useState(true)
    const [urduSelection, setUrduSelection] = useState(false)
    const toggleEnglishSelection = () => {
        setEngSelection(true)
        setUrduSelection(false)
        dispatch(english())
    }
    const toggleUrduSelection = () => {
        setEngSelection(false)
        setUrduSelection(true)
        dispatch(urdu())
    }

    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    backgroundColor: 'white', marginTop: '-20%',
                    marginHorizontal: 20, marginBottom: 30, borderRadius: 10, elevation: 3,
                }}>
                    <ScrollView>
                        <View style={{ marginVertical: 35, marginHorizontal: 15 }}>
                            {/* sign in image "locker" */}
                            <Image source={require('../../../assets/signin.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                            {/* Sign in Text */}
                            <Text style={{ fontSize: 25, color: '#4448FF', fontWeight: "bold", marginTop: 10 }}>{data ? eng.signin : Urdu.signin}</Text>
                            {/* Mobile Number */}
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> {data ? eng.mobileNum : Urdu.mobileNum}</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='+9230012345678' style={{ padding: 15 }}
                                        maxLength={13}
                                        keyboardType='email-address'
                                        value={number}
                                        onChangeText={(text) => setNumber(text)}
                                    />

                                </View>
                                <Text style={{ marginTop: 5, color: 'red' }}>{errors}</Text>
                            </View>


                            {/*  Password */}
                            {/* <View style={{ paddingTop: 10, marginTop: 10 }}>
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
                                        maxLength={16}

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
                            </View> */}




                            {/* forget password */}
                            {/* <TouchableOpacity style={{ marginTop: 5, alignSelf: "flex-end", }}
                                onPress={() => navigation.navigate('Forgot_Password')}>
                                <Text style={{ color: '#4448FF', }}>Forgot Password?</Text>
                            </TouchableOpacity> */}

                            {/* Sign in Button */}
                            <TouchableOpacity onPress={() => ValidationNumber(number)} style={{ alignSelf: "center", marginTop: 25 }}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10, marginLeft: 10,
                                }}>{data ? eng.signin : Urdu.signin}</Text>
                            </TouchableOpacity>
                            {/* do not have account and sign up button */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                <Text>{data ? eng.doNotHaveAnAccount : Urdu.doNotHaveAnAccount}</Text>
                                {/* sign up button */}
                                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                    <Text style={{ color: '#4448FF', marginLeft: 3, fontWeight: "bold" }}>{data ? eng.signUp : Urdu.signUp}</Text>
                                </TouchableOpacity>
                            </View>
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
                                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, margin: 20, marginTop: 35, width: '90%' }}>
                                    {/* language text and logo */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                        <Image source={require('../../../assets/Login/language.png')} />
                                        <Text style={{ marginLeft: 10, color: '#444BFF', fontSize: 20 }}>Language</Text>
                                    </View>
                                    <Text style={{ fontSize: 14, alignSelf: 'center', marginTop: 20, fontWeight: 'bold' }}>Please select language!!</Text>


                                    {/* Uk flag and text */}
                                    <View style={{ marginTop: 20, elevation: 3, backgroundColor: 'white', borderRadius: 5, marginBottom: 15, padding: 10, marginHorizontal: 3 }}>
                                        <TouchableOpacity style={{ elevation: 0, overflow: "hidden" }} onPress={() => dispatch(english())}>
                                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

                                                <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                                    <Image source={require('../../../assets/Login/uk_flag.png')}
                                                        style={{ alignSelf: 'center', marginRight: 20 }}
                                                    />
                                                    <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>English</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                    {data ? (
                                                        <Image source={selectImage} />
                                                    ) : (
                                                        <Image source={unselectImage} />
                                                    )}
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    {/* pakistan flag and text */}
                                    <View style={{ elevation: 3, backgroundColor: 'white', borderRadius: 5, marginBottom: 15, padding: 10, marginHorizontal: 3 }}>
                                        <TouchableOpacity style={{ elevation: 0, overflow: "hidden" }} onPress={() => dispatch(urdu())}>
                                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

                                                <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                                    <Image source={require('../../../assets/Login/pak_flag.png')}
                                                        style={{ alignSelf: 'center', marginRight: 20 }}
                                                    />
                                                    <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Urdu</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                    {data ? (
                                                        <Image source={unselectImage} />

                                                    ) : (
                                                        <Image source={selectImage} />
                                                    )}
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ alignSelf: 'center', marginTop: 10 }} >
                                        <Text style={{
                                            fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                            color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                            borderRadius: 10, marginLeft: 10,
                                        }}>Apply</Text>
                                    </TouchableOpacity>




                                </View>

                            </View>
                        </Modal>
                    </View>




                </View>
            </View>
        </React.Fragment>
    );
};

export default SigninComponent;