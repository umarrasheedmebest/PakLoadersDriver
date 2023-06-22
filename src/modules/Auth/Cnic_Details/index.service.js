import { useEffect, useState } from "react";

const CNIC_DetailsServiceComponent = ({
    
    children,
    navigation,
    
    
}) => {
    console.log('Pakistan  Zindabad');
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () =>{
        console.log('show')
        if(showModal){
            setShowModal(false);
        }
        else{
            setShowModal(true);
        }
    }
    const navigateToHome= ()=> {
        navigation.navigate('Identity');


        

        
    }

    return children({
        navigation,
        navigateToHome,
        showModal,
        // setShowModal,
        toggleModal


    
    });
};

export default CNIC_DetailsServiceComponent;
