import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@rneui/themed';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './login';
import Signup from './signup';
import forgotPassword from './forgotPassword';
import Settings from './settings';
import Home from './home';
import Chat from './chat';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


// const navigation = useNavigation();
function MyDrawer() {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    
  );

}

const Tab = createBottomTabNavigator();

export default function tabNavigation() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Home') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
            else if (route.name === 'Account') {  
                iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
            else if (route.name === 'Menu') {  
                iconName = focused ? 'ios-list' : 'ios-list-outline';
                }


            // You can return any component that you like here!
            return <Icon name= "13mp" size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Account" component={Signup} />
        <Tab.Screen name="Menu" component={forgotPassword} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}