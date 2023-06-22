import React from "react";
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

import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const A_Vehicle_VerifiedComponent = ({ navigation }) => {
    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    backgroundColor: 'white', marginTop: '-20%',
                    marginHorizontal: 20, marginBottom: '40%', borderRadius: 10, elevation: 3,

                }}>
                    <ScrollView>
                        <View style={{ paddingVertical: 35, paddingHorizontal: 15 }}>
                            {/* progress bar 3 */}
                            <Image source={require('../../../assets/A_Vehicle/progress3.png')} style={{ alignSelf: "center", marginBottom: 20 }} />
                            {/* Verified */}
                            <Image source={require('../../../assets/verified.png',)} style={{ height: 125, width: 125, alignSelf: "center" }} />
                            {/* Successfully submit Text */}
                            <Text style={{ fontSize: 25, paddingVertical: 30, color: '#4448ff', textAlign: 'center', fontWeight: 'bold' }}>
                                Successful
                            </Text>

                            {/* successfully submit sub text  */}

                            <Text style={{ fontSize: 18, textAlign: "center" }}>Vehicle Selected Successfully.</Text>

                            {/* Ok Button */}
                            <TouchableOpacity style={{ alignSelf: "center", marginTop: 50 }} onPress={() => navigation.navigate('Ride Request')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10, marginLeft: 10,
                                }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    );
};

export default A_Vehicle_VerifiedComponent;
