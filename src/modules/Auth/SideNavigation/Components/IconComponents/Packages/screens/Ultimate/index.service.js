import { useEffect, useState } from "react";


const UltimateServiceComponent = ({
    children,
    navigation,
}) => {

   
   
    const navigateToHome= ()=> {
        navigation.navigate('License');

        

        
    }

    return children({
        navigation,
        navigateToHome,
       

    });
};

export default UltimateServiceComponent;
