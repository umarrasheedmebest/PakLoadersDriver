import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, Modal, ScrollView, } from 'react-native';
// import DatePicker from 'react-native-date-picker';
import ImagePicker from 'react-native-image-crop-picker';
import selectImageFrontSide from '../../../assets/Driver_License/LicenseFrontSide.jpeg';
import selectImageBackSide from '../../../assets/Driver_License/LicenseBackSide.jpeg';


const { height, width } = Dimensions.get('window');
import { Button, RadioButton } from 'react-native-paper';


// const LicenseIssueDate = () => {
//     const [date, setDate] = useState(new Date())
//     const [open, setOpen] = useState(false)
//     return (
//         <React.Fragment>
//             {/* Issue Date */}
//             <View style={{ paddingTop: 10, marginTop: 10 }}>
//                 <Text style={{
//                     position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
//                 }}> Issue Date</Text>

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



// const LicenseExpiryDate = () => {
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






const Driver_LicenseComponent = ({ navigation, }) => {
    // const [modalVisible, setModalVisible] = useState(false);
    // const [checked, setChecked] = React.useState('first');

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
                    marginHorizontal: 20, marginBottom: 120, borderRadius: 10, elevation: 3,

                }}>
                    <ScrollView>
                        <View style={{ marginVertical: 35, marginHorizontal: 15 }}>


                            {/* prograass bar  */}
                            <Image source={require('../../../assets/Driver_License/progressbar_5.png')} style={{ alignSelf: "center" }} />
                            {/* Drive License text */}
                            <Text style={{ fontSize: 24, color: '#444BFF', marginTop: 15 }}>Drive License</Text>
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

                            {/* License Number 
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> License Number</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='74287621' style={{ padding: 15 }} 
                                        maxLength = {8}
                                    />
                                </View>
                            </View> */}
                            {/* 
                            <LicenseIssueDate />
                            <LicenseExpiryDate /> */}


                            {/* Next Button  */}
                            <TouchableOpacity style={{ marginTop: 20, alignSelf: "center" }}
                                onPress={() => navigation.navigate('Ride Request')} >
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
            {/* =================================================IMAGE PICKER MODAL SCREEN========================================= */}

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


            {/* ====================================POP UP WINDOW FIRST RECEIVER DETAILS==================================== */}

            {/* PopUP window */}
            {/* <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(true)} >
                <View style={{ flex: 1, backgroundColor: '#000000aa', alignItems: 'center', }}> */}

            {/* background white  */}

            {/* <View style={{ backgroundColor: 'white', marginTop: 35, borderRadius: 10, padding: 20, }}> */}
            {/* Ownership Verification Text */}
            {/* <Text style={{ fontSize: 24, alignSelf: 'center', color: '#4448FF', marginBottom: 15 }}>
                            Ownership Verification</Text>


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <Text style={{ fontSize: 18 }}>I am the owner of the vehicle.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                            <Text style={{ fontSize: 18 }}>Other</Text>
                        </View>
                        {
                            checked == 'second' ? (
                                <React.Fragment> */}
            {/* Send Code Message */}
            {/* <Text style = {{marginLeft: 35}}>We will send a verification code to the owner of the vehicle</Text> */}
            {/* Full name */}
            {/* <View style={{ paddingTop: 10, marginHorizontal: 5, marginTop: 10 }}>

                                        <Text style={{
                                            position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                                        }}> Full Name</Text>
                                        <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                            <TextInput placeholder='Ali Khan' style={{ padding: 10 }} 
                                                maxLength = {15}
                                            />
                                        </View>
                                    </View> */}

            {/* Mobile Number/Email */}
            {/* <View style={{ paddingTop: 10, marginHorizontal: 5, marginTop: 10 }}>

                                        <Text style={{
                                            position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                                        }}> Mobile Number/Email</Text>
                                        <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                            <TextInput placeholder='92327456891' style={{ padding: 10 }} 
                                                maxLength = {30}
                                                keyboardType = 'email-address'
                                            />
                                        </View>
                                    </View>

                                </React.Fragment>
                            ) : null
                        } */}



            {/* Close , Submit Button  */}
            {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}> */}
            {/* Close Button  */}
            {/* <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    borderColor: '#4448FF', color: '#4448FF', borderWidth: 1, backgroundColor: 'white',
                                    borderRadius: 10, marginRight: 10,
                                }}>Close</Text>
                            </TouchableOpacity> */}
            {/* Place bid Button  */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('Ride Request')} >
                                <Text style={{
                                    fontSize: 14, paddingVertical: 10, paddingHorizontal: 40,
                                    color: 'white', borderWidth: 1, borderColor: '#4448FF', backgroundColor: '#4448FF',
                                    borderRadius: 10, marginLeft: 10,
                                }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal> */}
        </React.Fragment>

    )
};
export default Driver_LicenseComponent;