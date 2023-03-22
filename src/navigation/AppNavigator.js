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
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
        requestUserPermission()
        notificationListener()
    }, []);

    const getData = async () => {
        try {
            const retrievedItem = await AsyncStorage.getItem('@user');
            const user = JSON.parse(retrievedItem);
            if (user !== null) {
                login(user);
            }
            setLoading(false);
            // SplashScreen.hide();
        } catch (e) {
            console.log('error getting stored data');
        }
    };

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <NavigationContainer>
        <MainNavigator/>
            {/* {user ? <MainNavigator /> : <Auth />} */}

        {/* <NavigationToScreens /> */}


        </NavigationContainer>
    );
};

export default AppNavigator;    