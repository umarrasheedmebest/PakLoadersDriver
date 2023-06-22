import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, style, Dimensions, TextInput } from 'react-native';
const { height, width } = Dimensions.get('window');
import DatePicker from 'react-native-date-picker';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import { updateUserRequest,getUserRequest,updateUserImageRequest } from '../../../Redux/slices/UserSlice';
import { updateUserImage,updateUserName } from './index.service';

export default function EditProfile({ navigation }) {
    const userData= useSelector((state)=>state.user.getUserResponse);
    const [editName, setEditName] = useState('')
    const dispatch=useDispatch();
    // Update User Name
    const updateUserName=()=>{
       const data={
        "full_name":editName
    }
        console.log("Request editName",data)
        dispatch(updateUserRequest(data));
        dispatch(getUserRequest());
        }
        // Update User Name
        // Update User Image
        const updateUserImage=async()=>{
            try {
                let res=await DocumentPicker.pick({
                type:[DocumentPicker.types.images],
            });
            console.log("Chose Image file Data",res)
            const formData=new FormData();
            formData.append('images',
            {
              uri:res[0].uri,
              type:res[0].type,
              name:res[0].name,
              fileName:'image'
            
            }
            
            );
            console.log("Converted into form Data",formData)
            dispatch(updateUserImageRequest(formData));
                dispatch(getUserRequest());
            
              
            
              
            
            
            
            
            
            } catch (error) {
                if(DocumentPicker.isCancel(err))
                console.log('User Not slected Image',err)
                else 
                console.log(error)
            }
            }
    const dataCards=({item})=>{
        
        return(
            <View>
                    {/* main container */}
                    <View style={{ flex: 1, margin: 30, }}>
                        {/* Profile Picture and rating  */}
                        <View style={{ marginBottom: 20, alignSelf: 'baseline', alignItems: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={()=>updateUserImage()}>
                                <Image source={require('../../../assets/EditProfile_Icons/Profile_Pic.png')} />
                            </TouchableOpacity>
                            {/* Camera Image */}
                            <View style={{ marginLeft: 30 }}>
                                <Image source={require('../../../assets/EditProfile_Icons/Camera_Image.png')}
                                    style={{ position: 'absolute', bottom: 0, }} />
                            </View>

                            <Text style={{ fontSize: 16, marginTop: 10, color: '#4448FF' }}>{item.full_name}</Text>
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
                                    value={editName}
                                    onChangeText={(e)=>setEditName(e)}
                                />

                            </View>
                        </View>
                        {/* Save and Cancel Button*/}
                        <View style={{ alignSelf: 'center' }}>
                            <View style={{ marginTop: 25, alignSelf: 'baseline', }}>
                                {/* Submit Button  */}
                                <TouchableOpacity  onPress={()=>updateUserName()}>
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
                </View>
        )
    }




    return (

        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
            <FlatList
            data={userData}
            keyExtractor={(item)=>item.number}
            renderItem={(item)=>dataCards(item)}
            showsVerticalScrollIndicator={false}
            />
             </View>
        </View>
    )
}
