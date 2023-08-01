import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TextInput
} from 'react-native';
const { width, height } = Dimensions.get('window');

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();





function ContactUSComponent({ navigation }) {
    return (
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    <View style={{ flex: 1, margin: 20, marginTop: 20 }}>
                        <Image source={require('../../../../../../assets/Contact_us/contact_us.png')}
                            style={{ alignSelf: 'center', marginTop: 30 }} />

                        {/* Having trouble text */}
                        <Text style={{ fontSize: 20, color: '#444BFF', alignSelf: 'center', marginTop: 20 }}>
                            Having Trouble Contact Us
                        </Text>
                        {/* more detail */}
                        <Text style={{ fontSize: 14, marginTop: 20, textAlign: 'center', alignSelf: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta turpis
                        </Text>

                        {/* Email BOX */}
                        {/* <View style={{
                            flexDirection: 'row', elevation: 5, alignItems: 'center', marginTop: 20, marginHorizontal: 3,
                            backgroundColor: 'white', borderRadius: 15, marginBottom: 15, marginRight: 10, paddingHorizontal: 10
                        }}>
                            <Image source={require('../../../../../../assets/Contact_us/Email.png')}
                            />
                            <TextInput placeholder='Email' style={{ marginLeft: 20, flex: 1 }} 
                                
                            />
                        </View> */}



                        {/* Description BOX */}
                        <View style={{
                            height: 150, paddingVertical: 10, flexDirection: 'row',
                            elevation: 5, marginTop: 20, marginHorizontal: 3,
                            backgroundColor: 'white', borderRadius: 15, marginBottom: 15, paddingHorizontal: 10
                        }}>
                            <Image source={require('../../../../../../assets/Contact_us/Description.png')}
                                // style = {{alignSelf: 'flex-start'}}
                                style={{ alignSelf: 'flex-start', marginTop: 10 }} />

                            <TextInput placeholder='Description' style={{
                                marginLeft: 20, flex: 1,
                                maxHeight: 150,
                                alignSelf: 'flex-start'
                            }}
                                multiline={true}
                            />
                        </View>

                        {/* Submit button */}
                        <TouchableOpacity style={{ alignSelf: "center", marginTop: 20 }}>
                            <Text style={{
                                fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                borderRadius: 10, marginLeft: 10,
                            }}>Submit</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}




export default ContactUSComponent;