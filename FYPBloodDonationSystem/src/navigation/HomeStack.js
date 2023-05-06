import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>

        </Stack.Navigator>
    );
}

export default HomeStack;