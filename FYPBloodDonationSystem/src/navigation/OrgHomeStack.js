import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyNotifications from '../screens/MyNotifications';
import OrgHomeScreen from '../screens/Home/OrgHomeScreen';

const Stack = createNativeStackNavigator();


const OrgHomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name='OrgHome' component={OrgHomeScreen} />
                <Stack.Screen name='Notifications' component={MyNotifications} />
        </Stack.Navigator>
    );
}

export default OrgHomeStack;