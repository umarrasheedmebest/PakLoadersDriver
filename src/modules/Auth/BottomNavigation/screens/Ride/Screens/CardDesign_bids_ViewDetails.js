import * as React from "react";
import { Text, View, Image, style, ScrollView, StyleSheet, TouchableOpacity,FlatList } from "react-native";
import SinglePost from "../../../../../Components/NotificationService/SinglePost";
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
                          
                            <SinglePost/>
                           
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
    pagingActiveText: { fontSize: (width / 30), color: '#4448FF', margin: 3 }

})
