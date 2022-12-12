import { useEffect, useState } from "react";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const VDetailsServiceComponent = ({
    children,
    navigation,
}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal =() =>{
        if(showModal){
            setShowModal(false);
        }
        else{
            setShowModal(true)
        }
    };
//     const [imagePath, setImagePath] = useState('');

//    const launchCameraGallery = async ()=> {
//     const options = {
//         mediaType: 'photo',
//         quality: 1,
//         cameraType: 'back'
//     };

//     const result = await launchCamera(options);
//     console.warn(result.assets[0].uri)
//     // setImage(result)
//     setImagePath(result.assets[0].uri)
    
// }
   
   
    const navigateToHome= ()=> {
        navigation.navigate('License');

        

        
    }

    return children({
        navigation,
        navigateToHome,
        toggleModal,
        showModal
        // launchCameraGallery,
        // imagePath,
        // setImagePath,
       

    });
};

export default VDetailsServiceComponent;
