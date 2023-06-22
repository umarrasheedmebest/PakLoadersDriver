import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../../../Redux/slices/AuthSlice';
const SigninServiceComponent = ({
    children,
    navigation,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([]);
    const dispatch = useDispatch();
    console.log('Pakistan Zindabad')
    useEffect(() => {
        setCarouselItems([
            {
                title: 'Signin as Owner',

            },
            {
                title: 'Signin as Driver',
            },

        ]);
    }, [])

    const navigateToHome= ()=> {

        navigation.navigate('Verify');

        

        
    }
    const LoginFun = (item) => {
        console.log(item)
        // dispatch(
        //     signinRequest(item)
        // );
        // navigation.navigate('Verify')
       
       
    }

    return children({
        navigation,
        navigateToHome,
        carouselItems,
        activeIndex,
        setActiveIndex,
        LoginFun
    });
};

export default SigninServiceComponent;
