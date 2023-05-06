import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppointmentRequestsList from './appointmentRequests';
import AppointmentsList from './appointmentsList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { faArrowLeft, faBold, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Requests"
      screenOptions={{
        tabBarActiveTintColor: '#DE0A1E',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarAndroidRipple: { borderless: false },
        tabBarIndicatorStyle: { backgroundColor: '#DE0A1E', height: 2 }
      }}
    >
      <Tab.Screen
        name="Requests"
        component={AppointmentRequestsList}
        options={{ tabBarLabel: 'Requests' }}
      />
      <Tab.Screen
        name="Appointments"
        component={AppointmentsList}
        options={{ tabBarLabel: 'Appointments' }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      /> */}
    </Tab.Navigator>
  );
}
export default function MyAppointments({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header title="My Appointments" isRed={true} navigation={navigation} />
      <MyTabs />
    </View>
    // <View style={styles.container}>
    //   <TouchableOpacity style={styles.backButton}>
    //     <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
    //   </TouchableOpacity>
    //   <Text style={styles.title}>{"My Appointments"}</Text>
    //   <View style={{ width: 30 }} />
    // </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DE0A1E',
    height: 60,
    paddingHorizontal: 10,
  },
  backButton: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  }
});