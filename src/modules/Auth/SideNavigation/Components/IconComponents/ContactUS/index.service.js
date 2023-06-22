import { useEffect, useState } from "react";


const ContactUSServiceComponent = ({
    children,
    navigation,
}) => {

   const [email, setEmail] = useState('');
   const [description, setDescription] = useState('');
   
   const myemail =() =>{
    if(email !== null){
        setEmail(true);
    }
    return(null);
   };
   

   
    const navigateToHome= ()=> {
        navigation.navigate('License');

        

        
    }

    return children({
        navigation,
        navigateToHome,
       

    });
};

export default ContactUSServiceComponent;
