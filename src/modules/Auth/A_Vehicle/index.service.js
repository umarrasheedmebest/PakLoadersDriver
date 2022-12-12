import { useEffect, useState } from "react";


const A_VehicleServiceComponent = ({
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

export default A_VehicleServiceComponent;
