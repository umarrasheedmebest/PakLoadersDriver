import React, {useState} from 'react';
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

import {Dimensions} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const {height, width} = Dimensions.get('window');
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../../../globalStyle';
import {
  signinOtpVerifyRequest,
  signupVarifyRequest,
} from '../../../Redux/slices/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../Components/NotificationService/Loader';

const verifycomponent = ({navigation}) => {
  const otpMessage = useSelector(state => state.auth.signInResponse.message);
  console.log(otpMessage);
  const signUnRequest = useSelector(state => state.auth.signUpRequest);
  // Sign Data
  const UserNumber = useSelector(state => state.auth.signInResponse.data);
  const secret = useSelector(state => state.auth.signInResponse.secret);
  //  const token=useSelector((state)=>state.auth.signInResponse.token)
  // SignupData
  const signupUserNumber = useSelector(state => state.auth.signUpResponse.data);
  const signupsecret = useSelector(state => state.auth.signUpResponse.secret);
  const signuptoken = useSelector(state => state.auth.signUpResponse.token);
  const signupfullName = useSelector(
    state => state.auth.signUpResponse.full_name,
  );
  const signinRequest = useSelector(state => state.auth.signInRequest);
  const tokens = useSelector(state => state.auth.signInResponse.token);
  const dispatch = useDispatch();
  console.log('Pakistan Zindabad');
  const getDeviceToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    return fcmToken;
  };
  const navigateVerified = item => {
    console.log(item);

    if (tokens == item) {
      dispatch(
        signinOtpVerifyRequest({
          number: UserNumber,
          secret: secret,
          token: token,
          deviceToken: getDeviceToken(),
        }),
      );
      navigation.navigate('Verified');
    } else {
      console.log('Login Token does not match');
    }

    // }
  };
  const [token, setToken] = useState('');
  const [otp, setOtp] = useState('');
  return (
    <React.Fragment>
      {/* background white */}
      <Loader visible={signinRequest} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* background image blue */}
        <Image
          source={require('../../../assets/top.png')}
          style={{height: '25%', width: '100%'}}
        />
        {/* card design white */}
        <View
          style={{
            backgroundColor: 'white',
            marginTop: '-20%',
            marginHorizontal: 20,
            borderRadius: 10,
            elevation: 3,
          }}>
          <ScrollView>
            <View style={{paddingVertical: 35, paddingHorizontal: 15}}>
              {/* sign in image "locker" */}
              <Image
                source={require('../../../assets/verify.png')}
                style={{height: 125, width: 125, alignSelf: 'center'}}
              />
              {/* Account Verification */}
              <Text
                style={{
                  fontSize: 25,
                  paddingVertical: 20,
                  color: '#4448ff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Account Verification
              </Text>
              {/* OTp Message */}
              <Text
                style={{fontSize: 15, color: colors.text, textAlign: 'center'}}>
                Please {otpMessage}
              </Text>
              {/* Varification Code digits */}
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignSelf: 'center',
                }}>
                <OTPInputView
                  style={{
                    width: '100%',
                    height: 40,
                    backgroundColor: '#ffffff',
                    shadowColor: '#fff',
                    marginTop: 30,
                  }}
                  pinCount={6}
                  code={tokens} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  onCodeChanged={code => {
                    setOtp(code);
                  }}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={code => {
                    setToken(code);
                    console.log(`Code is ${token}, you are good to go!`);
                  }}
                />
              </View>

              {/* code send again button and text  */}
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 30,
                }}>
                <Text>Haven't received a code?</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#444BFF',
                      fontWeight: 'bold',
                      marginLeft: 3,
                    }}>
                    Send Again
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity
                style={{alignSelf: 'center', marginTop: 30}}
                onPress={() => navigateVerified(tokens)}>
                <Text
                  style={{
                    fontSize: 14,
                    paddingVertical: 10,
                    paddingHorizontal: 40,
                    color: 'white',
                    borderWidth: 1,
                    borderColor: '#4448FF',
                    backgroundColor: '#4448FF',
                    borderRadius: 10,
                    marginLeft: 10,
                  }}>
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    width: 329,
    height: 586,
    padding: 20,
    borderRadius: 11,

    backgroundColor: 'white',
    position: 'relative',
    alignItems: 'center',

    shadowColor: '#4448FF',

    elevation: 10,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: colors.text,
  },

  underlineStyleBase: {
    width: 40,
    height: 55,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: colors.text,
    fontSize: 32,
    fontWeight: '500',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
export default verifycomponent;
