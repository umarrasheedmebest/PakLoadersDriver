import React, { useEffect, useState } from 'react';
//import SplashScreen from 'react-native-splash-screen';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Text,
    Dimensions,
    Modal,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Stack = createNativeStackNavigator;




const LoginComponent = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(true)

    // useEffect(()=>{
    //     SplashScreen.hide()
    // }, [])

    // componentDidMount() {
    //     SplashScreen.hide();
    //   }

    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginTop: '-15%',
                    marginHorizontal: 20, marginBottom: '20%', borderRadius: 10, elevation: 3,

                }}>
                    <ScrollView>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ marginTop: 20, alignSelf: 'center', color: '#444BFF', fontSize: 24 }}>P A K L O A D E R S</Text>
                            <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 10 }}>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</Text>



                            {/* Card Design Box */}
                            <View style={{ marginTop: 20, elevation: 1, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", }}>
                                    {/* unselected image */}
                                    <Image source={require('../../../assets/Login/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/Login/owner.png')} />
                                    {/* truck name */}
                                    <Text style={{ marginTop: 10, fontSize: 20, marginTop: 20, marginBottom: 20 }}>Log In as Owner</Text>
                                </TouchableOpacity>
                            </View>


                            {/* Card Design Box */}
                            <View style={{ elevation: 1, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", }}>
                                    {/* unselected image */}
                                    <Image source={require('../../../assets/Login/select.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/Login/driver.png')} />
                                    {/* truck name */}
                                    <Text style={{ marginTop: 10, fontSize: 20, marginTop: 20, marginBottom: 20 }}>Log In as Driver</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Next Button  */}
                            <TouchableOpacity onPress={() => navigation.navigate('Signin')}
                                style={{ alignSelf: 'center' }}
                            >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 70, color: 'white', marginBottom: 15, borderWidth: 1, textAlign: 'center',
                                    borderColor: '#4448FF', backgroundColor: '#4448FF', borderRadius: 10,
                                }}>Next</Text>
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
        marginTop: 150

    },
});

export default LoginComponent;
