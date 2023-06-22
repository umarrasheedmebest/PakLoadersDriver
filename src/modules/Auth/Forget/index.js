import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import CustomText from '../../Common/CustomText';

const ForgetComponent = ({
    navigateToHome,
    setEmail,
  email,
  onSignUp,
  loading,
  navigation,
  validate,
  onPress
}) => {
    return(
        <SafeAreaView>
           <Image source={require("../../../assets/top.png")} style={{
             width: 476.2,
             height: 307,
             margin:-100,
             marginLeft:0
           }} />

           <View style={{
            width:335,
            height:550,
            elevation:5,
          backgroundColor:'#fff',
          alignItems:'center',
          marginHorizontal:28,
          borderRadius: 10,
          flex:1,
          position:'absolute',
          margin:100,
          shadowColor:'#0787FF'
           }}>

            <Image source={require("../../../assets/signin.png")} style={{
                 width:110,
                 height:110,
                 margin:30
            }} />

            <Text style={{
                fontSize:24,
                fontWeight:'600',
                color:'blue',
                marginRight:110,
                marginTop:20,

            }}>Forgot Password</Text>
            
            <Text style={{
                 fontSize:15,
                 fontWeight:'400',
                 color:'#000',
                 marginRight:100,
                 marginTop:50
            }}>Mobile Number/Email</Text>


            <TextInput placeholder='  0330 1234567' style={{
                width:280,
                height:50,
                borderColor:'#000000',
                borderWidth:1,
                borderRadius:5,
                margin:-10.2
            }}>

            </TextInput>


            <TouchableOpacity style={{
               width: 166,
               height: 48,
               backgroundColor:'#4448ff',
               borderRadius: 10,
               alignSelf: 'center',
               justifyContent: 'center',
               alignItems: 'center',
               margin:70

            }} onPress={() => navigation.navigate('Reset')}>
                <CustomText 
                title={'Confirm'}
                fontSize={24}
                color={'#ffffff'}
                />

            </TouchableOpacity>

           </View>
        </SafeAreaView>
    );
};

export default ForgetComponent;