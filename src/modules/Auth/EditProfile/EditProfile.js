import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, style, Dimensions, TextInput } from 'react-native';
const { height, width } = Dimensions.get('window');
import DatePicker from 'react-native-date-picker';

export default function EditProfile({ navigation }) {



    // const CNICIssueDate = () => {
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


    // const CNICExpiryDate = () => {
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




    return (
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    {/* main container */}
                    <View style={{ flex: 1, margin: 30, }}>
                        {/* Profile Picture and rating  */}
                        <View style={{ marginBottom: 20, alignSelf: 'baseline', alignItems: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/EditProfile_Icons/Profile_Pic.png')} />
                            </TouchableOpacity>
                            {/* Camera Image */}
                            <View style={{ marginLeft: 30 }}>
                                <Image source={require('../../../assets/EditProfile_Icons/Camera_Image.png')}
                                    style={{ position: 'absolute', bottom: 0, }} />
                            </View>

                            <Text style={{ fontSize: 16, marginTop: 10, color: '#4448FF' }}>Ali khan</Text>
                            {/* Rating Starts */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../../assets/EditProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/EditProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/EditProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/EditProfile_Icons/rating.png')}
                                />
                                <Image source={require('../../../assets/EditProfile_Icons/rating.png')}
                                />
                                {/* rating number */}
                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 4, }}>(4.6)</Text>
                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 9, marginLeft: 8, color: '#4448FF' }}>View all reviews</Text>
                            </View>
                        </View>

                        {/* Full Name */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                            }}> Full Name</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                <TextInput placeholder='Ali Khan' style={{ padding: 10 }} 
                                    maxLength = {15}
                                />

                            </View>
                        </View>

                        {/* Secondary Mobile Number */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                            }}> Secondary Mobile Number</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                <TextInput placeholder='923274829372' style={{ padding: 10 }} 
                                    maxLength = {12}
                                    keyboardType = 'numeric'
                                />
                            </View>
                        </View>

                        {/* Mobile Number / Email */}
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                            }}> Mobile Number/Email</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                <TextInput placeholder='92327482937' style={{ padding: 10 }} 
                                    maxLength = {30}
                                />
                            </View>
                        </View>

                        {/* CNIC Number
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                            }}> CNIC Number</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                <TextInput placeholder='3520226327311' style={{ padding: 10 }} 
                                    maxLength = {13}
                                />
                            </View>
                        </View> */}


{/* 
                        <CNICIssueDate />
                        <CNICExpiryDate /> */}




                        {/* License Number
                        <View style={{ paddingTop: 10, marginTop: 10 }}>
                            <Text style={{
                                position: 'absolute', left: 10, zIndex: 1, backgroundColor: 'white',
                            }}> License Number</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 5, paddingHorizontal: 5, }}>
                                <TextInput placeholder='74287621' style={{ padding: 10 }} 
                                    maxLength = {8}
                                />
                            </View>
                        </View> */}


                        {/* <LicenseIssueDate />
                        <LicenseExpiryDate /> */}



                        {/* Save and Cancel Button*/}
                        <View style={{ alignSelf: 'center' }}>
                            <View style={{ marginTop: 25, alignSelf: 'baseline', }}>
                                {/* Submit Button  */}
                                <TouchableOpacity >
                                    <Text style={{
                                        fontSize: 14, paddingVertical: 10, paddingHorizontal: 70, color: 'white', marginBottom: 15, borderWidth: 1, textAlign: 'center',
                                        borderColor: '#4448FF', backgroundColor: '#4448FF', borderRadius: 10,
                                    }}>Save</Text>
                                </TouchableOpacity>
                                {/* Close Button  */}
                                <TouchableOpacity >
                                    <Text style={{
                                        fontSize: 14, paddingVertical: 10, borderColor: '#4448FF', color: '#4448FF', textAlign: 'center',
                                        borderWidth: 1, backgroundColor: 'white', borderRadius: 10,
                                    }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
