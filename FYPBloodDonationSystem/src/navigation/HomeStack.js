import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import Notifications from '../screens/Notifications';

const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Notifications' component={Notifications} />
        </Stack.Navigator>
    );
}

export default HomeStack;