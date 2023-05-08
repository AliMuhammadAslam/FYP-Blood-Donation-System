import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from '../screens/Account/AccountScreen';
import TabNavigation from './TabNavigation';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator
        initialRouteName="Tab"
        screenOptions={
            {
                // headerShown: false,
                animationEnabled: true
            }
        }>
            <Drawer.Screen name="Tab" component={TabNavigation} />
            <Drawer.Screen name="Account" component={AccountScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;