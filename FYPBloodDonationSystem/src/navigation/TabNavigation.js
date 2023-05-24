import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountStack from './AccountStack';
import MyAppointments from '../screens/Appointments';
import CreateRequest from '../screens/Forms/CreateRequest';
import HomeStack from './HomeStack';
import ChatStack from './ChatStack';
import MessagesScreen from '../screens/MessagesScreen';


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
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='initialRoute'
      screenOptions={({ route }) => ({
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
          color: '#353535',
          top: -4,
          fontSize: 11
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Appointments') {
            iconName = focused
              ? <Image style={{ width: 30, height: 30 }} source={AppoinmentIcon} /> : <Image style={{ width: 30, height: 30 }} source={AppoinmentIcon} />;
          } else if (route.name === 'Chat') {
            iconName = focused ? <Image style={{ width: 30, height: 30 }} source={ChatIcon} /> : <Image style={{ width: 30, height: 30 }} source={ChatIcon} />;
          }
          else if (route.name === 'Home') {
            iconName = focused ? <View style={HomeTabStyle}><Image style={{ width: 35, height: 35 }} source={HomeIcon} /></View> : <View style={HomeTabStyle}><Image style={{ width: 35, height: 35 }} source={HomeIcon} /></View>;
          }
          else if (route.name === 'CreateRequest') {
            iconName = focused ? <Image style={{ width: 25, height: 25 }} source={RequestIcon} /> : <Image style={{ width: 25, height: 25 }} source={RequestIcon} />;
          }
          else if (route.name === 'AccountScreen') {
            iconName = focused ? <Image style={{ width: 40, height: 40 }} source={UserIcon} /> : <Image style={{ width: 35, height: 35 }} source={UserIcon} />;
          }
          return iconName;
        },

      })}>
      <Tab.Screen name='Appointments' component={MyAppointments} options={{ tabBarLabel: 'Appointments' }} />
      <Tab.Screen name='Chat' component={ChatStack} options={{ tabBarLabel: 'Chat' }} />
      <Tab.Screen name='Home' component={HomeStack} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name='CreateRequest' component={CreateRequest} options={{ tabBarLabel: 'Requests' }} />
      <Tab.Screen name='AccountScreen' component={AccountStack} options={{ tabBarLabel: 'Account' }} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
