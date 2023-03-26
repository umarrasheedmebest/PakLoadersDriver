import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Auth } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../AuthProvider';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { requestUserPermission,notificationListener } from '../modules/Components/NotificationService/NotificationService';
import NavigationToScreens from './AuthNavigator';

const AppNavigator = () => {
    const { userToken, login,isLoading,setisLoading } = useContext(AuthContext);
    console.log("userToken"+userToken)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       
        requestUserPermission()
        notificationListener()
    }, []);

    

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <NavigationContainer>
            {/* <Auth/> */}
        {/* <MainNavigator/> */}
            {userToken !==null ? <MainNavigator /> : <Auth />}

        {/* <NavigationToScreens /> */}


        </NavigationContainer>
    );
};

export default AppNavigator;    