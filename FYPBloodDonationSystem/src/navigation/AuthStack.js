import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from '../screens/Auth/AuthenticationScreen';
//import Signup from '../screens/Auth/Signup';
import Signup_first from '../screens/signup_first';
import Signup_second from '../screens/signup_second';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import OTPVerification from '../screens/Auth/OTPVerification';
import Questionnaire from '../screens/Auth/Questionnaire';
import ChangePassword from '../screens/Auth/ChangePassword';
import TabNavigation from './TabNavigation';
import TabNavigationOrganizations from './TabNavigationOrganizations';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Authentication"
            screenOptions={
                {
                    headerShown: false,
                    animationEnabled: true
                }
            }>
            <Stack.Screen name="Authentication" component={AuthenticationScreen} />
            <Stack.Screen name="SignupFirst" component={Signup_first} />
            <Stack.Screen name="SignupSecond" component={Signup_second} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
            <Stack.Screen name="Questionnaire" component={Questionnaire} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="TabNavigationOrganizations" component={TabNavigationOrganizations} />
        </Stack.Navigator>
    );
}

export default AuthStack;