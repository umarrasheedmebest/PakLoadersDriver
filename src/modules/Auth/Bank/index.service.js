import { useEffect, useState } from "react";


const BankServiceComponent = ({
    children,
    navigation,
}) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        console.log('show')
        if(showModal){
            setShowModal(false);
        }
        else{
            setShowModal(true);
        }
    }
   
    const navigateToHome= ()=> {
        navigation.navigate('License');

        

        
    }

    return children({
        navigation,
        navigateToHome,
        showModal,
        toggleModal
       

    });
};

export default BankServiceComponent;
