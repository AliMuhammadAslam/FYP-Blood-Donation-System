import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RegDonorsList from './orgRegDonors';
import RegReceiversList from './orgRegReceivers';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';  
import { faArrowLeft, faBold, faDroplet } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

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
        component={RegDonorsList}
        options={{ tabBarLabel: 'Donors' }}
      />
      <Tab.Screen
        name="Receivers"
        component={RegReceiversList}
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
export default function OrganizationRegPatients({navigation}) {
  return (
    /*<NavigationContainer>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{"Registered Patients"}</Text>
            <View style={{ width: 30 }} />
        </View>
      <MyTabs />
    </NavigationContainer>*/

    <View style={{flex: 1}}>
      <Header title="Patients" isRed={true} navigation={navigation} />
      <MyTabs />
    </View>

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