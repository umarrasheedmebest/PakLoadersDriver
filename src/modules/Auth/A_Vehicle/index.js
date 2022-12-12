import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions

} from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.7;

const images = [
    // 'https://images.pexels.com/photos/5920659/pexels-photo-5920659.jpeg?cs=srgb&dl=pexels-kampus-production-5920659.jpg&fm=jpg',
    // 'https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?cs=srgb&dl=pexels-quintin-gellar-6563903.jpg&fm=jpg',
    // 'https://images.pexels.com/photos/6470756/pexels-photo-6470756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    require('../../../assets/A_Vehicle/slider_image_1.png'),
    require('../../../assets/A_Vehicle/slider_image_1.png'),
    require('../../../assets/A_Vehicle/slider_image_1.png')
]

export default class A_VehicleComponent extends React.Component {
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
                <View style={{ backgroundColor: 'white', flex: 1, }}>
                    <ScrollView>
                        <View style={{ margin: 10 }}>

                            {/* Vehicle Details */}
                            <Text style={{ fontSize: 13, color: '#4448FF', fontWeight: "bold", marginBottom: 5 }}>Vehicle Details</Text>
                            {/* Card Design box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>

                                {/* Registration Number and edit button */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={style2.vehicle_Style1}>Vehicle Registration No: </Text>
                                        <Text style={style2.vehicle_Style2}>H3837437 </Text>
                                    </View>
                                    {/* Edit Button */}
                                    <View style={{ marginRight: 10, alignSelf: 'center' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Struck')}>
                                            <Image source={require('../../../assets/A_Vehicle/edit_btn.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Expiry Date */}
                                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                    <Text style={style2.vehicle_Style1}>Expiry Date: </Text>
                                    <Text style={style2.vehicle_Style2}>12-02-2026 </Text>
                                </View>
                                {/* Insurance Number */}
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={style2.vehicle_Style1}>Insurance Number: </Text>
                                    <Text style={style2.vehicle_Style2}>433423325 </Text>
                                </View>
                                {/* Expiry Date */}
                                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                    <Text style={style2.vehicle_Style1}>Expiry Date: </Text>
                                    <Text style={style2.vehicle_Style2}>12-02-2024 </Text>
                                </View>
                                {/* Vehicle Model */}
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={style2.vehicle_Style1}>Vehicle Model: </Text>
                                    <Text style={style2.vehicle_Style2}>2009 </Text>
                                </View>
                            </View>


                            {/* Ownlership Details
                            <Text style={{ fontSize: 13, color: '#4448FF', fontWeight: "bold", marginBottom: 5 }}>Ownership Details</Text>
                            Card Design box
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>

                                Owner Name and edit button
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={style2.vehicle_Style1}>Owner name: </Text>
                                        <Text style={style2.vehicle_Style2}>Sadiq Ameen </Text>
                                    </View>
                                    Edit Button
                                    <View style={{ marginRight: 10, alignSelf: 'center' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('VDetails')}>
                                        <TouchableOpacity>
                                            <Image source={require('../../../assets/A_Vehicle/edit_btn.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                CNIC Number
                                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                    <Text style={style2.vehicle_Style1}>CNIC Number: </Text>
                                    <Text style={style2.vehicle_Style2}>54698789 </Text>
                                </View>
                                Mobile Number
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={style2.vehicle_Style1}>Mobile Number: </Text>
                                    <Text style={style2.vehicle_Style2}>92 312456789 </Text>
                                </View>
                            </View>
 */}
                            {/* Close Button  */}


                            <TouchableOpacity
                            // onPress={() => this.props.navigation.navigate('Bid_request')}
                            >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10, marginLeft: 10, alignSelf: 'center', marginTop: 25
                                }}>Close</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
};
const style2 = StyleSheet.create({
    pagingText: {
        fontSize: (width / 30), color: '#fff', margin: 3
    },
    pagingActiveText: {
        fontSize: (width / 30), color: '#4448FF', margin: 3
    },
    vehicle_Style1: {
        fontSize: 12,
        fontWeight: 'bold'

    },
    vehicle_Style2: {
        fontSize: 12
    }


})