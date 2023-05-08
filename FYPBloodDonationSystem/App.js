import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/navigation/TabNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const Stack = createNativeStackNavigator();

const App = () => {  

  return (
    <NavigationContainer>
      {/* <TabNavigation /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
