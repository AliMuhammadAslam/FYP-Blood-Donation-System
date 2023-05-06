import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from '../screens/Auth/AuthenticationScreen';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import OTPVerification from '../screens/Auth/OTPVerification';
import Questionnaire from '../screens/Auth/Questionnaire';
import ChangePassword from '../screens/Auth/ChangePassword';


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
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
            <Stack.Screen name="Questionnaire" component={Questionnaire} />
        </Stack.Navigator>
    );
}

export default AuthStack;