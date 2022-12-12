import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, Modal, ImageBackground } from "react-native";
// import DatePicker from 'react-native-date-picker';
import ImagePicker from 'react-native-image-crop-picker';
import selectImage from '../../../assets/Basic_Info/pcamera.png';

import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');


const InfoComponent = ({ navigation }) => {


    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const exampleImageUri = Image.resolveAssetSource(selectImage).uri
    const [image, setImage] = useState(exampleImageUri)

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);

            setImage(image.path)
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

            setImage(image.path)
            setModalVisible(false)
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
                            <Image source={require('../../../assets/Basic_Info/progressbar_1.png')} style={{ alignSelf: "center" }} />
                            {/* Basic Info text */}
                            <Text style={{ fontSize: 24, color: '#444BFF', marginTop: 15 }}>Basic Info</Text>
                            {/* welcome Text */}
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Welcome Jhon Smith!</Text>
                            <Text style={{ fontSize: 12 }}>Please complete your profile to proceed</Text>
                            {/* picture box */}
                            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ alignSelf: "center", marginVertical: 15, }}>
                                <Image source={{ uri: image }} style={{width: 180, height: 180, }} />

                                {/* <ImageBackground
                                    source = {{uri: image}}
                                    imageStyle = {{ }}
                                    style={{borderRadius: 100, alignSelf: "center",  backgroundColor: 'black', padding: 100}}>
                                </ImageBackground> */}
                            
                            </TouchableOpacity>

                            {/* First Name  */}
                            {/* <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Name</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='John Doe' style={{ padding: 15 }} 
                                        maxLength = {15}
                                    />
                                </View>
                            </View> */}

                            {/* Last Name 
                            <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Last Name</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='Doe' style={{ padding: 15 }} 
                                        maxLength = {15}
                                    />
                                </View>
                            </View> */}



                            {/* Date of Birth */}
                            {/* <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 1, backgroundColor: 'white',
                                }}> Date of Birth</Text>

                                <View style={{
                                    borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5,
                                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                    <Text style={{ padding: 15, marginVertical: 5 }}>{date.toLocaleDateString()}</Text>
                                    <TouchableOpacity onPress={() => setOpen(true)}>
                                        <Image source={require('../../../assets/Basic_Info/date_select.png')}
                                            style={{ marginRight: 10 }}
                                        />
                                    </TouchableOpacity>
                                    <DatePicker
                                        modal
                                        open={open} date={date}
                                        mode="date"
                                        onConfirm={(date) => {
                                            setOpen(false)
                                            setDate(date)
                                        }}
                                        onCancel={() => {
                                            setOpen(false)
                                        }}
                                    />
                                </View>
                            </View> */}

                            {/* Seconday Mobile Number  */}
                            {/* <View style={{ paddingTop: 10, marginTop: 10 }}>
                                <Text style={{
                                    position: 'absolute', left: 15, zIndex: 100, backgroundColor: 'white',
                                }}> Seconday Mobile Number</Text>
                                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                    <TextInput placeholder='92327145896' style={{ padding: 15 }} 
                                        maxLength = {12}
                                        keyboardType = 'numeric'
                                    />
                                </View>
                            </View> */}


                            {/* Next Button  */}
                            <TouchableOpacity style={{ marginTop: 10, alignSelf: "center" }}
                                onPress={() => navigation.navigate('Cnic_Details')}>
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
            {/* =================================================MODAL SCREEN========================================= */}

            {/* PopUP window */}
            <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}

            >
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

        </React.Fragment >
    )
};

export default InfoComponent;


