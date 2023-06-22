import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, style, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

//screens

import CustomerReviews from '../Rating/Screens/CustomerReviews';

export default function RatingScreen({ navigation }) {
    return (
        // Background white and round  
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                {/* Profile Picture and rating  */}
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Image source={require('../../Images/Rating_Profile_Pic.png')} />
                    <Text style={{ fontSize: 16, marginTop: 20, color: '#4448FF' }}>Jhon Smith</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../Images/rating.png')}
                        />
                        <Image source={require('../../Images/rating.png')}
                        />
                        <Image source={require('../../Images/rating.png')}
                        />
                        <Image source={require('../../Images/rating.png')}
                        />
                        <Image source={require('../../Images/rating.png')}
                        />
                        {/* rating number */}
                        <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 4, }}>(4.6)</Text>
                        {/* View All Reviews */}
                        {/* <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 8, color: '#4448FF' }}>View all reviews</Text> */}
                    </View>
                </View>

                {/* Customer Reviews */}
                <View style={{ marginTop: 40, marginHorizontal: 40 }}>
                    <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 12, color: '#4448FF', marginBottom: 10, fontWeight: 'bold' }}>Customer Reviews</Text>

                    <CustomerReviews
                        person_name={'Jhone'}
                        rating={'(4.1)'}
                        review={'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem....'}
                    />
                    <CustomerReviews
                        person_name={'Edie, 6 lessons with John'}
                        rating={'(4.1)'}
                        review={'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem....'}
                    />

                </View>


            </View>
        </View>
    );
}










