import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/AccountScreen';
import ManageAddresses from '../screens/Account/Manage_Addresses';
import DonationHistory from '../screens/Account/DonationHistory';

const Stack = createNativeStackNavigator();


const AccountStack = () => {
    return (
        <Stack.Navigator initialRouteName="Account"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name="Account" component={AccountScreen} />
                <Stack.Screen name="ManageAddresses" component={ManageAddresses} />
                <Stack.Screen name="DonationHistory" component={DonationHistory} />
                
        </Stack.Navigator>
    );
}

export default AccountStack;