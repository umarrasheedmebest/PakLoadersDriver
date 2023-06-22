import { useEffect, useState } from "react";

const Reset_PasswordServiceComponent = ({
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

export default Reset_PasswordServiceComponent;
