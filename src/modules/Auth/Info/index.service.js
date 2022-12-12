import { useEffect, useState } from "react";
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const InfoServiceComponent = ({
    
    children,
    navigation,
}) => {
   
    

    const navigateToHome= ()=> {
        navigation.navigate('Identity');


        

        
    }

    return children({
        navigation,
        navigateToHome,

    });
};

export default InfoServiceComponent;
