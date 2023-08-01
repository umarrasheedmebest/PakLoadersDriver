import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';
const { height, width } = Dimensions.get('window');

const Id_ConfirmationComponent = ({ navigation }) => {
    return (

        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginTop: '-20%',
                    marginHorizontal: 20, marginBottom: 30, borderRadius: 10, elevation: 3,

                }}>
                    <ScrollView>
                        <View style={{ marginVertical: 35, marginHorizontal: 15 }}>
                            {/* prograass bar  */}
                            <Image source={require('../../../assets/Id_Confirmation/progressbar_5.png')} style={{ alignSelf: "center" }} />
                            {/* Basic Info text */}
                            <Text style={{ fontSize: 24, color: '#444BFF', marginTop: 15 }}>Id Confirmation</Text>
                            {/* welcome Text */}
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Welcome Jhon Smith!</Text>
                            <Text style={{ fontSize: 12 }}>Please complete your profile to proceed</Text>
                                {/* Verification Image */}
                            <Image source={require('../../../assets/Id_Confirmation/icon_logo.png')}
                                style={{ alignSelf: 'center', marginVertical: 20 }} />



                            {/* Done Button  */}
                            <TouchableOpacity style={{ alignSelf: "center" }}
                                onPress={() => navigation.navigate('Ride Request')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40, paddingHorizontal: 57,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10,
                                }}>Done</Text>
                            </TouchableOpacity>

                            {/* Cancel Button  */}
                            <TouchableOpacity style={{ marginTop: 20, alignSelf: "center", }}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40, paddingHorizontal: 50,
                                    borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
                                    borderRadius: 10,
                                }}>Cancel</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>   
                </View>
            </View>
        </React.Fragment>

    )
};
export default Id_ConfirmationComponent;