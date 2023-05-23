import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrganizationRequests from '../screens/organizationRequests';
import PatientDetails from '../screens/PatientDetails/PatientDetails';


const Stack = createNativeStackNavigator();


const OrgRequestsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Request List"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name='Request List' component={OrganizationRequests} />
                <Stack.Screen name='Patient Details' component={PatientDetails} />
        </Stack.Navigator>
    );
}

export default OrgRequestsStack;