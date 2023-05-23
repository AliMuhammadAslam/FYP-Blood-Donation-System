import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
//import Notifications from '../screens/Notifications';
import PrivateReceiversRequestList from '../screens/privateRequests';
import DonationRequestInfoPage from '../screens/DonationRequestInfoPage';
import CreateAppointment from '../screens/createAppointment';
import MyOrganizations from '../screens/MyOrganizations';
import MyNotifications from '../screens/MyNotifications';

const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Notifications' component={MyNotifications} />
                <Stack.Screen name='ReceiversList' component={PrivateReceiversRequestList} />
                <Stack.Screen name='Request Info' component={DonationRequestInfoPage} />
                <Stack.Screen name='Create Appointment' component={CreateAppointment} />
                <Stack.Screen name='My Organizations' component={MyOrganizations} />
        </Stack.Navigator>
    );
}

export default HomeStack;