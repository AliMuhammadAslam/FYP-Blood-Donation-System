import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Settings from '../screens/settings';
import Home from '../screens/home';
import Chat from '../screens/chat';
import Account from '../screens/Account/AccountScreen';
import Notifications from '../screens/Notifications';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBars, faBell, faBold, faCalendar, faDatabase, faDroplet, faGear, faHome, faMessage, faPerson, faPlusSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu } from 'react-native-paper';
import OrganisationInfo from '../screens/OrganisationInfo/OrganisationInfo';
import PatientDetails from '../screens/PatientDetails/PatientDetails';
import AccountStack from './AccountStack';
import ChatScreen from '../screens/ChatScreen';
import MyAppointments from '../screens/Appointments';
import CreateAppointment from '../screens/createAppointment';


const Tab = createBottomTabNavigator();

const TabNavigation = ({ route }) => {

  const HomeIcon = require('../../assets/HomeIcon.png');
  const UserIcon = require('../../assets/person.png');
  const ChatIcon = require('../../assets/chat.png')
  const AppoinmentIcon = require('../../assets/appointment.png');
  const RequestIcon = require('../../assets/request.png');

  const HomeTabStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DE0A1E',
    width: 52,
    height: 52,
    top: -20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 30,
  }

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 55,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingLeft: 5
      },
      tabBarLabelStyle: {
        color: 'black',
        top: -4,
        fontSize: 11
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Appointments') {
          iconName = focused
            ? <Image style={{ width: 30, height: 30 }} source={AppoinmentIcon} /> : <Image style={{ width: 30, height: 30 }} source={AppoinmentIcon} />;
        } else if (route.name === 'ChatScreen') {
          iconName = focused ? <Image style={{ width: 30, height: 30 }} source={ChatIcon} /> : <Image style={{ width: 30, height: 30 }} source={ChatIcon} />;
        }
        else if (route.name === 'OrganisationIn') {
          iconName = focused ? <View style={HomeTabStyle}><Image style={{ width: 35, height: 35 }} source={HomeIcon} /></View> : <View style={HomeTabStyle}><Image style={{ width: 35, height: 35 }} source={HomeIcon} /></View>;
        }
        else if (route.name === 'CreateAppointment') {
          iconName = focused ? <Image style={{ width: 25, height: 25 }} source={RequestIcon} /> : <Image style={{ width: 25, height: 25 }} source={RequestIcon} />;
        }
        else if (route.name === 'Account') {
          iconName = focused ? <Image style={{ width: 40, height: 40 }} source={UserIcon} /> : <Image style={{ width: 35, height: 35 }} source={UserIcon} />;
        }
        return iconName;
      },

    })}>
      <Tab.Screen name='Appointments' component={MyAppointments} options={{ tabBarLabel: 'Appointments' }} />
      <Tab.Screen name='ChatScreen' component={ChatScreen} options={{ tabBarLabel: 'Chat' }} />
      <Tab.Screen name='OrganisationIn' component={OrganisationInfo} options={{
          // tabBarIcon: ({focused}) => {
          //   return(
          //     <View style={{
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       backgroundColor: '#16247D',
          //       width: 60,
          //       height: 60,
          //       top: -30,
          //       borderRadius: 30
          //     }}>
          //       <FontAwesomeIcon icon={faHome} size={20} color='black' />
          //     </View>
          //   );
          // },
          tabBarLabel: 'Home'
      }} />
      <Tab.Screen name='CreateAppointment' component={CreateAppointment} options={{ tabBarLabel: 'Requests' }} />
      <Tab.Screen name='Account' component={AccountStack} options={{ tabBarLabel: 'Account' }} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
