import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account/AccountScreen';
import ManageAddresses from '../screens/Account/Manage_Addresses';
import DonationHistory from '../screens/Account/DonationHistory';
import OrganizationsList from '../screens/organizations_list';
import OrganisationInfo from '../screens/OrganisationInfo/OrganisationInfo';
import ApplicationForm from '../screens/Forms/ApplicationForm';

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
                <Stack.Screen name="OrganizationsList" component={OrganizationsList} />
                <Stack.Screen name="OrganizationInfo" component={OrganisationInfo} />
                <Stack.Screen name="ApplicationForm" component={ApplicationForm} />
                
        </Stack.Navigator>
    );
}

export default AccountStack;