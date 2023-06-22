import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, ScrollView, ImageBackground } from "react-native";

function VehicleSelectionComponent({ navigation }) {
    const [selection, setSelection] = useState(true)
    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginTop: '-20%', marginHorizontal: 20,
                    borderRadius: 10, elevation: 3, marginBottom: '10%'
                }}>

                    <ScrollView>
                        <View style={{ marginVertical: 35, marginHorizontal: 15 }}>
                            {/* prograass bar  */}
                            <Image source={require('../../../assets/VehicleSelection/progressbar_3.png')} style={{ alignSelf: "center" }} />
                            {/* Basic Info text */}
                            <Text style={{ fontSize: 24, color: '#444BFF', marginTop: 15 }}>Select Vehicle</Text>
                            {/* welcome Text */}
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Welcome Jhon Smith!</Text>
                            <Text style={{ fontSize: 12 }}>Please complete your profile to proceed</Text>

                            {/* First Row Design */}
                            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                                {/* Card Design Box */}
                                <View style={{
                                    elevation: 5, backgroundColor: 'white', borderRadius: 15, padding: 10,

                                }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}
                                        onPress={() => setSelection(false)}
                                    >
                                        {/* unselected image */}

                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }} />

                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/1_LoaderRickshaw.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Loader Rickshaw</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Suzuki Pick up</Text> */}
                                    </TouchableOpacity>
                                </View>


                                
                                {/* Card Design Box */}
                                <View style={{
                                    elevation: 5, backgroundColor: 'white', borderRadius: 15, padding: 10,

                                }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselected image */}
                                        <Image source={require('../../../assets/A_Vehicle/select.png')}
                                            style={{ alignSelf: "flex-end", }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/2_PickUpLoader.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Pickup Loader</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Shahzor Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                            </View>


                            {/* Second Row Design */}
                            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/3_MiniTruck.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Mini Truck</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Shahzor Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/4_Container.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Container</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g Reefer Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                            </View>



                            {/* Third Row Design */}
                            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/5_BedFordTruck.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Bed-Ford Truck</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 20 feet Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/6_Mazda.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Mazda</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 40 feet Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Fourth Row Design */}
                            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/7_DumpTruck.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Dump Truck</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 20 feet Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/8_TractorTrali.png')}
                                            style={{ height: 72, width: 58  }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Tractor Trali</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 40 feet Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                            </View>



                            {/* Fifth Row Design */}
                            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>

                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/9_Truck.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Truck</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 20 feet Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                                {/* Card Design Box */}
                                <View style={{ elevation: 5, backgroundColor: 'white', borderRadius: 15, marginBottom: 15, padding: 10 }}>
                                    <TouchableOpacity style={{ alignItems: "center", maxWidth: 110, minWidth: 110 }}>
                                        {/* unselect image */}
                                        <Image source={require('../../../assets/A_Vehicle/unselect.png')}
                                            style={{ alignSelf: "flex-end" }}
                                        />
                                        {/* truck image */}
                                        <Image source={require('../../../assets/A_Vehicle/9_Truck.png')}
                                            style={{ height: 72, width: 58 }}
                                        />
                                        {/* truck name */}
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Truck</Text>
                                        {/* <Text style={{ marginTop: 10, fontSize: 16, marginBottom: 10 }}>e.g 40 feet Truck</Text> */}
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <TouchableOpacity style={{ marginTop: 20, alignSelf: "center" }}
                                onPress={() => navigation.navigate('Vehicle_Info')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40, paddingHorizontal: 57,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10,
                                }}>Next</Text>
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
}
export default VehicleSelectionComponent


