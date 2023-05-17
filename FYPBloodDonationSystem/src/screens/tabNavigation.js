import * as React from 'react';
import { Button, Text, View, Image, StyleSheet} from 'react-native';
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
import Notifications from './Notifications';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBars, faBell, faBold, faCalendar, faDroplet, faGear, faHome, faMessage, faPerson, faPlusSquare, faUser } from '@fortawesome/free-solid-svg-icons';

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
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <FontAwesomeIcon icon={faHome} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Settings}
        options={{
          tabBarLabel: 'Appointments',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCalendar} size={20} color={color} />
          ),
          //tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Chat}
        options={{
          tabBarLabel: 'Requests',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faPlusSquare} size={20} color={color} />
          ),
          //tabBarBadge: 3,
        }}
      />

      
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBell} size={20} color={color} />
          ),
          //tabBarBadge: 3,
        }}
      />

        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              // <Image style={styles.image}
              //   resizeMode={'contain'}
              //   source={require('../../assets/medals.jpg')} />
              <FontAwesomeIcon icon={faUser} size={20} color={color} />
            ),

          }}
        />
    </Tab.Navigator>
    </NavigationContainer>
  );

}

// const styles = StyleSheet.create({
 
//   image: {
//     height: 25,
//     width: 25,
// },
  
// });
