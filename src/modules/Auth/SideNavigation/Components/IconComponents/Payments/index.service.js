import { useEffect, useState } from "react";


const PaymentsServiceComponent = ({
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

export default PaymentsServiceComponent;
