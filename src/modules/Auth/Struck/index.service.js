import { useEffect, useState } from "react";


const StruckServiceComponent = ({
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

export default StruckServiceComponent;
