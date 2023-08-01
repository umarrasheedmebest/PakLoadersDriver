import { useEffect, useState } from "react";


const EssentialServiceComponent = ({
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

export default EssentialServiceComponent;
