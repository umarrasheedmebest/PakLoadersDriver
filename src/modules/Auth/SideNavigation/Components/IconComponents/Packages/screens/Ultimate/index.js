import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';


const { width, height } = Dimensions.get('window');

const UltimateComponent = ({
    navigation
}) => {
    return (
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <View style={{ flex: 1, margin: 20, marginTop: 20 }}>
                    <ScrollView>

                    </ScrollView>
                </View>
            </View>
        </View>
    );
};


export default UltimateComponent;