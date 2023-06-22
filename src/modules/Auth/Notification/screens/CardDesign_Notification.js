import * as React from 'react';
import { View, Text, Image, style, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

export default function CardDesign_Notification(props) {
    return (
        // background white and rounded all side
        <View style={{
            justifyContent: 'space-between', flexDirection: 'row', elevation: 5, marginHorizontal: 3,
            backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10
        }}>
            {/* Notification icon and details */}
            <View style={{ flexDirection: 'row', }}>
                {/* Notification Icon */}
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ alignSelf: 'baseline', alignItems: 'center', }}>
                        <Image source={props.person_img} />
                        <View style={{ marginLeft: 15 }}>
                            <Image source={props.notification_img}
                                style={{ position: 'absolute', bottom: 0, }} />
                        </View>
                    </View>
                </View>
                {/* TEXT DETAILS */}
                <View style={{ marginLeft: 15, alignSelf: 'center' }}>
                    <Text style={{ fontSize: 12, }}>{props.heading1}</Text>
                    <Text style={{ fontSize: 10 }}>{props.heading2}</Text>
                </View>

            </View>
            <View>
                <Text style={{ fontSize: 10 }}>
                    {props.time}
                </Text>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/Notification/menu_Btn.png')}
                        style={{ alignSelf: 'flex-end', marginTop: 5 }}
                    />
                </TouchableOpacity>
            </View>
        </View>



    )
}

