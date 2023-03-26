import * as React from "react";
import { Text, View, Image, style, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
const { width } = Dimensions.get('window');
const height = width * 0.7;


const images = [
    // 'https://images.pexels.com/photos/5920659/pexels-photo-5920659.jpeg?cs=srgb&dl=pexels-kampus-production-5920659.jpg&fm=jpg',
    // 'https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?cs=srgb&dl=pexels-quintin-gellar-6563903.jpg&fm=jpg',
    // 'https://images.pexels.com/photos/6470756/pexels-photo-6470756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    require('../../../Images/slider_image_1.png'),
    require('../../../Images/slider_image_2.png'),
    require('../../../Images/slider_image_3.png'),
]


export default class CardDesign_bids_ViewDetails extends React.Component {

    state = {
        active: 0,
    }

    change = ({ nativeEvent }) => {

        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }
    render() {
        const PostSingleData = useSelector(state => state.post.singlePostResponse);
console.log("Single Post")
console.log(PostSingleData)
        return (
                // background white and corner
            <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
                <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                    <ScrollView>
                        <View style={{ width, height }}>

                            <ScrollView pagingEnabled horizontal
                                onScroll={this.change}
                                show showsHorizontalScrollIndicator={false}
                                style={{ width, height }}>
                                {
                                    images.map((item, index) => (
                                        <Image
                                            key={index}
                                            source={item}
                                            // source ={{uri: image}}
                                            style={{ width, resizeMode: "cover", height, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                                        />))
                                }
                            </ScrollView>
                            <View style={{ flexDirection: "row", alignSelf: "center", bottom: 0, position: "absolute" }}>
                                {
                                    images.map((i, k) => (
                                        <Text key={k} style={k == this.state.active ? style2.pagingActiveText : style2.pagingText}>⬤</Text>
                                    ))
                                }
                            </View>
                        </View>

                        {/* Card Box with All Details */}
                        <View style={{ margin: 10 }}>

                            {/* Bid Details */}
                            <Text style={{ fontSize: 13, color: '#4448FF', fontWeight: "bold", marginBottom: 5 }}>Bid Details</Text>

                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>

                                {/* icon_image NAME rating */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* icon image */}
                                        <Image source={require('../../../Images/profile_Pic_1.png')} />
                                        <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                                            {/* NAME */}
                                            <Text style={{ fontSize: 14, fontFamily: 'Montserrat_500Medium', }}>Muhammads wasesem</Text>
                                            {/* RATING  */}
                                            <View style={{ flexDirection: 'row', }}>
                                                <Image source={require('../../../Images/rating.png')}
                                                />
                                                <Image source={require('../../../Images/rating.png')}
                                                />
                                                <Image source={require('../../../Images/rating.png')}
                                                />
                                                <Image source={require('../../../Images/rating.png')}
                                                />
                                                <Image source={require('../../../Images/rating.png')}
                                                />
                                                {/* rating number */}
                                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 6, }}>3.8</Text>
                                            </View>
                                        </View>
                                    </View>
                                    {/* Chat and Call  */}
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', }}>

                                        <Image source={require('../../../Images/live_chat.png')} style={{ marginLeft: 'auto', marginHorizontal: 5 }} />
                                        <Image source={require('../../../Images/phone_call.png')} style={{ marginHorizontal: 5 }} />
                                    </View>
                                </View>

                                {/* pick up dropoff date timing charges weight  */}
                                <View style={{ paddingVertical: 10 }}>

                                    {/*  Pick up  */}
                                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                        <Image source={require('../../../Images/pickup_loc_icon.png')}
                                            style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 17 }}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Pick up: </Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>Clark Pharmacy, 442 Rawalpindi</Text>
                                    </View>
                                    {/*  dropoff  */}
                                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                        <Image source={require('../../../Images/drop_off_icon.png')}
                                            style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 17 }}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Drop off: </Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>Clark Pharmacy, 442 Islamabad</Text>
                                    </View>
                                    {/* Date */}
                                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                        <Image source={require('../../../Images/calendar_icon.png')}
                                            style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 17 }}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Date of pick up: </Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>12-02-2022, Monday</Text>
                                    </View>
                                    {/* Timing */}
                                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                        <Image source={require('../../../Images/time.png')}
                                            style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 17 }}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Timing: </Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>12:50 pm</Text>
                                    </View>
                                    {/* charges */}
                                    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                        <Image source={require('../../../Images/charges.png')}
                                            style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 17 }}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Charges: </Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>Rs. 76346</Text>
                                    </View>
                                    {/* weight */}
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Image source={require('../../../Images/weight.png')}
                                            style={{ alignSelf: 'center', marginRight: 12, height: 17, width: 17 }}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold' }}>Weight: </Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'poppins' }}>500kg</Text>
                                    </View>
                                </View>
                            </View>


                            {/* Ignore Bid Button  */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                                <TouchableOpacity>
                                    <Text style={{
                                        fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                        borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
                                        borderRadius: 10, marginRight: 10,
                                    }}>Ignore</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bid_request')}>
                                    <Text style={{
                                        fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                        color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                        borderRadius: 10, marginLeft: 10,
                                    }}>Bid</Text>
                                </TouchableOpacity>
                            </View>






                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const style2 = StyleSheet.create({
    pagingText: { fontSize: (width / 30), color: '#fff', margin: 3 },
    pagingActiveText: { fontSize: (width / 30), color: '#4448FF', margin: 3 }

})