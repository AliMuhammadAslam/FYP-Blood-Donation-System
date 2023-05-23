import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrgPatientsStack from './OrgPatientsStack';
import OrgRequestsStack from './OrgRequestsStack';


const Tab = createBottomTabNavigator();

const TabNavigationOrganizations = ({ route }) => {

  const HomeIcon = require('../../assets/HomeIcon.png');
  const UserIcon = require('../../assets/person.png');
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

          if (route.name === 'Patients') {
            iconName = focused ? <Image style={{ width: 40, height: 40 }} source={UserIcon} /> : <Image style={{ width: 35, height: 35 }} source={UserIcon} />;
          }
          //else if (route.name === 'Home') {
            //iconName = focused ? <View style={HomeTabStyle}><Image style={{ width: 35, height: 35 }} source={HomeIcon} /></View> : <View style={HomeTabStyle}><Image style={{ width: 35, height: 35 }} source={HomeIcon} /></View>;
          //}
          else if (route.name === 'Requests') {
            iconName = focused ? <Image style={{ width: 25, height: 25 }} source={RequestIcon} /> : <Image style={{ width: 25, height: 25 }} source={RequestIcon} />;
          }
          
          return iconName;
        },

      })}>
      
      <Tab.Screen name='Patients' component={OrgPatientsStack} options={{ tabBarLabel: 'Patients' }} />
      {/*<Tab.Screen name='Home' component={OrganizationRegPatients} options={{ tabBarLabel: 'Home' }} />*/}
      <Tab.Screen name='Requests' component={OrgRequestsStack} options={{ tabBarLabel: 'Requests' }} />

    </Tab.Navigator>
  );
}

export default TabNavigationOrganizations;
