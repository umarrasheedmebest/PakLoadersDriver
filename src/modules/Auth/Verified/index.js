import React from 'react';
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

import { Dimensions } from 'react-native';
import Loader from '../../Components/NotificationService/Loader';
const { height, width } = Dimensions.get('window');
import { useDispatch, useSelector } from 'react-redux';
import { eng, Urdu } from '../../../modules/Components/Api/Language'

const VerifiedComponent = ({ navigation, navigateToHome, signInOtpVarifyRequest }) => {
  const data = useSelector((state) => state.language)
  return (
    <React.Fragment>
      <Loader visible={signInOtpVarifyRequest} />
      {/* background white */}
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* background image blue */}
        <Image
          source={require('../../../assets/top.png')}
          style={{ height: '25%', width: '100%' }}
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
            <View style={{ paddingVertical: 35, paddingHorizontal: 15 }}>
              {/* Verified */}
              <Image
                source={require('../../../assets/verified.png')}
                style={{ height: 125, width: 125, alignSelf: 'center' }}
              />
              {/* Verified Text */}
              <Text
                style={{
                  fontSize: 25,
                  paddingVertical: 30,
                  color: '#4448ff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {data ? eng.verified : Urdu.verified}
              </Text>

              {/* successfully verified the account text  */}

              <Text style={{ fontSize: 18, textAlign: 'center' }}>
                {data ? eng.veriSuccess : Urdu.veriSuccess}
              </Text>

              {/* OkButton */}
              <TouchableOpacity
                style={{ alignSelf: 'center', marginTop: 50 }}
                onPress={() => navigateToHome()}>
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
                  {data ? eng.ok : Urdu.ok}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </React.Fragment>
  );
};

export default VerifiedComponent;
