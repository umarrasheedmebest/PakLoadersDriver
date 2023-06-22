import { useEffect, useState } from "react";

const A_Vehicle_VerifyServiceComponent = ({
    children,
    navigation,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        setCarouselItems([
            {
                title: 'Login as Owner',

            },
            {
                title: 'Login as Driver',
            },

        ]);
    }, [])

    const navigateToHome= ()=> {
        navigation.navigate('Verified');

        

        
    }

    return children({
        navigation,
        navigateToHome,
        carouselItems,
        activeIndex,
        setActiveIndex
    });
};

export default A_Vehicle_VerifyServiceComponent;
