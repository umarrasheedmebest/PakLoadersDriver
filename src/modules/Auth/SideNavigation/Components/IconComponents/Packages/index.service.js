import { useEffect, useState } from "react";


const PackagesServiceComponent = ({
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

export default PackagesServiceComponent;
