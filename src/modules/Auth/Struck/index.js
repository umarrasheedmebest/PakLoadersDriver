import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';

import CustomText from "../../Common/CustomText";
import { colors } from "../../../globalStyle";

const { width, height } = Dimensions.get('window');

const StruckComponent = ({ navigation }) => {
    return (
        // background White and Round 
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    <View style={{ flex: 1, margin: 20, marginTop: 20 }}>
                        {/* progress bar  */}
                        <Image source={require('../../../assets/A_Vehicle/progress1.png')}
                            style={{ alignSelf: "center" }} />

                        {/* First Row Design */}
                        <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around",  }}>

                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselected image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/1_LoaderRickshaw.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Loader Rickshaw</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Suzuki Pick up</Text> */}
                                </TouchableOpacity>
                            </View>
                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130  }}>
                                    {/* unselected image */}
                                    <Image source={require('../../../assets/A_Vehicle/select.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/2_PickUpLoader.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Pickup Loader</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Shahzor Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>



                        {/* Second Row Design */}
                        <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130  }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/3_MiniTruck.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Mini Truck</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Shahzor Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/4_Container.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Container</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Reefer Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>



                        {/* Third Row Design */}
                        <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/5_BedFordTruck.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{  fontWeight: "bold", fontSize: 16 }}>Bed-Ford Truck</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 20 feet Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/6_Mazda.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{  fontWeight: "bold", fontSize: 16 }}>Mazda</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 40 feet Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>



                        {/* Fourth Row Design */}
                        <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/7_DumpTruck.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{  fontWeight: "bold", fontSize: 16 }}>Dump Truck</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 20 feet Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/8_TractorTrali.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Tractor Trali</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 40 feet Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>



                        {/* Fifth Row Design */}
                        <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/9_Truck.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Truck</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 20 feet Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                            {/* Card Design Box */}
                            <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: "center", maxWidth: 130, minWidth: 130 }}>
                                    {/* unselect image */}
                                    <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                        style={{ alignSelf: "flex-end" }}
                                    />
                                    {/* truck image */}
                                    <Image source={require('../../../assets/A_Vehicle/9_Truck.png')}
                                        style={{ height: 102, width: 88 }}
                                    />
                                    {/* truck name */}
                                    <Text style={{  fontWeight: "bold", fontSize: 16 }}>Truck</Text>
                                    {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 40 feet Truck</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>





                        {/* Save and Cancel Button*/}

                        <View style={{ marginTop: 10, alignSelf: 'baseline', alignSelf: 'center' }}>
                            {/* Next Button  */}
                            <TouchableOpacity onPress={() => navigation.navigate('VDetails')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 70, color: 'white', marginBottom: 15, borderWidth: 1, textAlign: 'center',
                                    borderColor: '#4448FF', backgroundColor: '#4448FF', borderRadius: 10,
                                }}>Next</Text>
                            </TouchableOpacity>
                            {/* Cancel Button  */}
                            <TouchableOpacity >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, borderColor: '#4448FF', color: '#4448FF', textAlign: 'center',
                                    borderWidth: 1, backgroundColor: 'white', borderRadius: 10,
                                }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ScrollView>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({

});
export default StruckComponent;