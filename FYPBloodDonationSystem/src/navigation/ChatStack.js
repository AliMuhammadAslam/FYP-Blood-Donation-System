import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../screens/Chat/chat';
import ChatScreen from '../screens/Chat/ChatScreen';

const Stack = createNativeStackNavigator();


const ChatStack = () => {
    return (
        <Stack.Navigator initialRouteName="Chat"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                
        </Stack.Navigator>
    );
}

export default ChatStack;