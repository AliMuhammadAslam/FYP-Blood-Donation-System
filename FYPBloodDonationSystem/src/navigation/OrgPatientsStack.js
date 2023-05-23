import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrganizationRegPatients from '../screens/organizationRegPatients';
import PatientDetails from '../screens/PatientDetails/PatientDetails';


const Stack = createNativeStackNavigator();


const OrgPatientsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Patient List"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name='Patient List' component={OrganizationRegPatients} />
                <Stack.Screen name='Patient Details' component={PatientDetails} />
        </Stack.Navigator>
    );
}

export default OrgPatientsStack;