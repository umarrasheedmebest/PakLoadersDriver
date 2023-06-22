import DocumentPicker from 'react-native-document-picker';
import { useDispatch } from "react-redux";
import { updateUserImageRequest,updateUserRequest,getUserRequest } from '../../../Redux/slices/UserSlice';
const dispatch=useDispatch()
console.log('Pakistan Zindabad')

export const updateUserName=(data)=>{
console.log("Request editName",data)
// dispatch(updateUserRequest(data));
// dispatch(getUserRequest());
}
export const updateUserImage=async()=>{
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