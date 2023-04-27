import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import Login from './login';
import Signup from './signup';
import forgotPassword from './forgotPassword';
import Settings from './settings';
import Home from './home';
import Chat from './chat';
import Account from './account';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBars, faBold, faDroplet, faGear, faHome, faMessage, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function tabNavigation() {
  
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faGear} size={20} color={color} />
          ),
          //tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faMessage} size={20} color={color} />
          ),
          //tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <FontAwesomeIcon icon={faHome} size={20} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBars} size={20} color={color} />
          ),
          //tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
