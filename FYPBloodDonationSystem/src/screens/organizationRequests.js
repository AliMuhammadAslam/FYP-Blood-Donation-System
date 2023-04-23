import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DonorsList from './donorsList';
import ReceiversList from './receiversList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';  
import { faArrowLeft, faBold, faDroplet } from '@fortawesome/free-solid-svg-icons';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Donors"
      screenOptions={{
        tabBarActiveTintColor: '#DE0A1E',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarAndroidRipple: { borderless: false },
        tabBarIndicatorStyle: { backgroundColor: '#DE0A1E', height: 2 }
      }}
    >
      <Tab.Screen
        name="Donors"
        component={DonorsList}
        options={{ tabBarLabel: 'Donors' }}
      />
      <Tab.Screen
        name="Receivers"
        component={ReceiversList}
        options={{ tabBarLabel: 'Receivers' }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      /> */}
    </Tab.Navigator>
  );
}
export default function organizationRequests() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{"Requests"}</Text>
            <View style={{ width: 30 }} />
        </View>
      <MyTabs />
    </NavigationContainer>
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