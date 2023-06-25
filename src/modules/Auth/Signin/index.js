import React, { useState } from "react";
import {
    Text,
    Modal,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    Keyboard

} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../../../Redux/slices/AuthSlice';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SigninComponent = ({ navigation, }) => {
    const dispatch=useDispatch();
    const signinRequestData = useSelector(state => state.auth.signInResponse);
    const validNumber=typeof signinRequestData =='string';
    console.log(validNumber)
    const [showPassword, setShowPassword] = React.useState(false);
    const [visiblePassword, setVisiblePassword] = React.useState(true);
    const [modalVisible, setModalVisible] = useState(true)
    const [number, setNumber] = useState('')
   const [errors, setErrors] = useState('')
    const ValidationNumber=(number)=>{
        if(!number && number==''){ 
            setErrors("Please Enter the Mobile ")
        }else {
            setErrors('')
            
            let space= number.trim();
            let part = space.slice(1,11);
            let newText = space.replace(space, "+92"+part);
            console.log("new String"+newText)
            if(newText.length==13){
                LoginFun(newText)
            }else{
                setErrors("Your Number is invalid")
            }
            
            
        }
       
        
            
        
    }
    
    const LoginFun = (item) => {
        console.log(item)
        
        const number={"number":item}
        dispatch(
            signinRequest(number)
        );
        navigation.navigate('Verify')
       
       
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
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <View style={{ marginVertical: 35, marginHorizontal: 15 }}>
                            {/* sign in image "locker" */}
                            <Image source={require('../../../assets/signin.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                            {/* Sign in Text */}
                            <Text style={{ fontSize: 25, color: '#4448FF', fontWeight: "bold", marginTop: 10 }}>Sign In</Text>
                            {/* Mobile Number */}
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Mobile Number</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='030012345678' style={{ padding: 15 }}
                                        maxLength={11}
                                        keyboardType='numeric'
                                        value={number}
                                        onChangeText={(text)=>setNumber(text)}
                                        
                                    />
                                    
                                </View>
                                <Text style={{marginTop:5,color:'red'}}>{errors}</Text>
                            </View>

                                {/* Add New comment */}
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
                            <TouchableOpacity onPress={()=>{ValidationNumber(number)
                        Keyboard.dismiss();  
                        }} style={{ alignSelf: "center", marginTop: 25 }}
                            >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10, marginLeft: 10,
                                }}>Sign In</Text>
                            </TouchableOpacity>
                            {/* do not have account and sign up button */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                <Text>Do not have an account?</Text>
                                {/* sign up button */}
                                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                    <Text style={{ color: '#4448FF', marginLeft: 3, fontWeight: "bold" }}>Sign up</Text>
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



                                    {/* pakistan flag and text */}
                                    <View style={{ marginTop: 20, elevation: 3, backgroundColor: 'white', borderRadius: 5, marginBottom: 15, padding: 10, marginHorizontal: 3 }}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

                                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                                <Image source={require('../../../assets/Login/uk_flag.png')}
                                                    style={{ alignSelf: 'center', marginRight: 20 }}
                                                />
                                                <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>English</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                <Image source={require('../../../assets/Login/select.png')} />
                                            </View>
                                        </View>
                                    </View>





                                    {/* pakistan flag and text */}
                                    <View style={{ elevation: 3, backgroundColor: 'white', borderRadius: 5, marginBottom: 15, padding: 10, marginHorizontal: 3 }}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

                                            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                                <Image source={require('../../../assets/Login/pak_flag.png')}
                                                    style={{ alignSelf: 'center', marginRight: 20 }}
                                                />
                                                <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Urdu</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                <Image source={require('../../../assets/Login/unselect.png')} />
                                            </View>
                                        </View>
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