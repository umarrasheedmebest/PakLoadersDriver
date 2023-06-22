import { useEffect, useState } from "react";

const SplashScreenServiceComponent = ({
    children,
    navigation,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([]);

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

    return children({
        navigation,
        navigateToHome,
        carouselItems,
        activeIndex,
        setActiveIndex
    });
};

export default SplashScreenServiceComponent;
