import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../screens/Chat/chat';
import ChatScreen from '../screens/Chat/ChatScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();


const ChatStack = () => {
    return (
        <Stack.Navigator initialRouteName="Messages"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}>
                
                <Stack.Screen name="Messages" component={MessagesScreen} />
                {/* <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}
                
        </Stack.Navigator>
    );
}

export default ChatStack;