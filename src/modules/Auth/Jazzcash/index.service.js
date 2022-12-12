import { useEffect, useState } from "react";

const JazzcashServiceComponent = ({
    
    children,
    navigation,
    
    
}) => {
    console.log('Pakistan  Zindabad');
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        console.log('Jmodal')
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
        toggleModal


    
    });
};

export default JazzcashServiceComponent;
