import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../../AuthProvider";
const VerifiedServiceComponent = ({
    children,
    navigation,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([]);
    const userInfo = useSelector((state) => state.auth.signInOtpVarifyResponse)
    const userTokenSuc = useSelector((state) => state.auth.signInOtpVarifyResponse.accessToken)
    const signInOtpVarifyRequest = useSelector((state) => state.auth.signInOtpVarifyRequest)

    console.log('OTP Data')
    console.log(userInfo)
    console.log(userTokenSuc)
    const { login } = useContext(AuthContext);
    console.log('Pakistan Zindabad')


    const navigateToHome = () => {

        login({
            userInfo,
            userTokenSuc
        });
        navigation.navigate('Info')

    }

    return children({
        navigation,
        navigateToHome,
        carouselItems,
        activeIndex,
        setActiveIndex,
        signInOtpVarifyRequest
    });
};

export default VerifiedServiceComponent;
