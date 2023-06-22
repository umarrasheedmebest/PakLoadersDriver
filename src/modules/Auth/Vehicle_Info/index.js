import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, Modal, ScrollView, } from 'react-native';
// import DatePicker from 'react-native-date-picker';
import ImagePicker from 'react-native-image-crop-picker';
import selectImageFrontSide from '../../../assets/Vehicle_Info/VehicleImage1.jpeg';
import selectImageBackSide from '../../../assets/Vehicle_Info/VehicleImage2.jpeg';

const { height, width } = Dimensions.get('window');

// const VehicleExpiry = () => {
//     const [date, setDate] = useState(new Date())
//     const [open, setOpen] = useState(false)

//     return (
//         <React.Fragment>
//             {/* Expiry Date */}
//             <View style={{ paddingTop: 10, marginTop: 10 }}>
//                 <Text style={{
//                     position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
//                 }}> Expiry Date</Text>

//                 <View style={{
//                     borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5,
//                     flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
//                 }}>

//                     <Text style={{ padding: 10, marginVertical: 5 }}>{date.toLocaleDateString()}</Text>

//                     <TouchableOpacity onPress={() => setOpen(true)}>
//                         <Image source={require('../../../assets/EditProfile_Icons/date_select.png')}
//                             style={{ marginRight: 10 }}
//                         />
//                     </TouchableOpacity>
//                     <DatePicker
//                         modal

//                         open={open} date={date}
//                         mode="date"
//                         onConfirm={(date) => {
//                             setOpen(false)
//                             setDate(date)
//                         }}
//                         onCancel={() => {
//                             setOpen(false)
//                         }}
//                     />
//                 </View>
//             </View>
//         </React.Fragment>
//     )
// }


// const InsuranceExpiry = () => {
//     const [date, setDate] = useState(new Date())
//     const [open, setOpen] = useState(false)

//     return (
//         <React.Fragment>
//             {/* Expiry Date */}
//             <View style={{ paddingTop: 10, marginTop: 10 }}>
//                 <Text style={{
//                     position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
//                 }}> Expiry Date</Text>

//                 <View style={{
//                     borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5,
//                     flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
//                 }}>

//                     <Text style={{ padding: 10, marginVertical: 5 }}>{date.toLocaleDateString()}</Text>

//                     <TouchableOpacity onPress={() => setOpen(true)}>
//                         <Image source={require('../../../assets/EditProfile_Icons/date_select.png')}
//                             style={{ marginRight: 10 }}
//                         />
//                     </TouchableOpacity>
//                     <DatePicker
//                         modal

//                         open={open} date={date}
//                         mode="date"
//                         onConfirm={(date) => {
//                             setOpen(false)
//                             setDate(date)
//                         }}
//                         onCancel={() => {
//                             setOpen(false)
//                         }}
//                     />
//                 </View>
//             </View>
//         </React.Fragment>
//     )
// }



const Vehicle_InfoComponent = ({ navigation, }) => {

    const [modalVisible, setModalVisible] = useState(false)

    const ImageUriFrontSide = Image.resolveAssetSource(selectImageFrontSide).uri
    const ImageUriBackSide = Image.resolveAssetSource(selectImageBackSide).uri
    const [imageFrontSide, setImageFrontSide] = useState(ImageUriFrontSide)
    const [imageBackSide, setImageBackSide] = useState(ImageUriBackSide)
    const [side, setSide] = useState(true)

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);

            if (!side) {
                setImageBackSide(image.path)
            }
            else {
                setImageFrontSide(image.path)
            }
            setModalVisible(false)
        })
            .catch(error => {
                console.log(error)
            });
    }
    const takePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);

            if (!side) {
                setImageBackSide(image.path)
                setModalVisible(false)
            }
            else {
                setImageFrontSide(image.path)
                setModalVisible(false)
            }
        })
            .catch(error => {
                console.log(error)
            });
    }



    return (
        <React.Fragment>
            {/* background white */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* background image blue */}
                <Image source={require('../../../assets/top.png')} style={{ height: '25%', width: '100%', }} />
                {/* card design white */}
                <View style={{
                    backgroundColor: 'white', marginTop: '-20%',
                    marginHorizontal: 20, marginBottom: 30, borderRadius: 10, elevation: 3,
                }}>
                    <ScrollView>
                        <View style={{ marginVertical: 35, marginHorizontal: 15 }}>


                            {/* prograass bar  */}
                            <Image source={require('../../../assets/Vehicle_Info/progressbar_4.png')} style={{ alignSelf: "center" }} />
                            {/* Basic Info text */}
                            <Text style={{ fontSize: 24, color: '#444BFF', marginTop: 15 }}>Vehicle Info</Text>
                            {/* welcome Text */}
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Welcome Jhon Smith!</Text>
                            <Text style={{ fontSize: 12 }}>Please complete your profile to proceed</Text>

                            {/* Image Upload front and back */}
                            <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: "center" }}>
                                {/* front side image */}

                                <TouchableOpacity onPress={() => {
                                    setModalVisible(true)
                                    setSide(true)
                                }}
                                    style={{ padding: 10 }}>
                                    <Image source={{ uri: imageFrontSide }} style={{ width: 93, height: 92, }} />
                                </TouchableOpacity>

                                {/* back side image */}
                                <TouchableOpacity onPress={() => {
                                    setModalVisible(true)
                                    setSide(false)
                                }}
                                    style={{ padding: 10, }}>
                                    <Image source={{ uri: imageBackSide }} style={{ width: 93, height: 92, }} />
                                </TouchableOpacity>
                            </View>









                            {/* Vehicle Registration No 
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Vehicle Registration No</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='JHDU784378' style={{ padding: 15 }} 
                                        maxLength = {10}
                                    />
                                </View>
                            </View> */}

                            {/* <VehicleExpiry /> */}


                            {/* Insurance Number 
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Insurance Number</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='21314345' style={{ padding: 15 }} 
                                        maxLength = {8}
                                    />
                                </View>
                            </View> */}

                            {/* <InsuranceExpiry /> */}


                            {/* Model Number
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Model Number</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='2008' style={{ padding: 15 }} 
                                        maxLength = {4}
                                    />
                                </View>
                            </View> */}

                            {/* Save Button  */}
                            <TouchableOpacity style={{ marginTop: 20, alignSelf: "center" }}
                                onPress={() => navigation.navigate('Driver_License')}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40, paddingHorizontal: 57,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10,
                                }}>Save</Text>
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
            {/* =================================================MODAL SCREEN========================================= */}

            {/* PopUP window */}
            <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
                <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: "flex-end" }}>

                    {/* background white  */}
                    <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, }}>
                        {/* Profile photo */}
                        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}>Profile photo</Text>
                        {/* image selectors  */}
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={takePhotoFromCamera} style={{ alignItems: "center" }}>
                                <View style={{ marginBottom: 5, borderRadius: 100, borderColor: '#4448FF', borderWidth: 1, padding: 10 }}>
                                    <Image source={require('../../../assets/camera.png')} style={{ width: 25, height: 25, alignSelf: "center", }} />
                                </View>
                                <Text>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={takePhotoFromGallery} style={{ marginLeft: 30, alignItems: "center" }}>
                                <View style={{ marginBottom: 5, borderRadius: 100, borderColor: '#4448FF', borderWidth: 1, padding: 10 }}>
                                    <Image source={require('../../../assets/gallery.png')} style={{ width: 25, height: 25, alignSelf: "center", }} />
                                </View>
                                <Text>Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </React.Fragment>

    )
};
export default Vehicle_InfoComponent;