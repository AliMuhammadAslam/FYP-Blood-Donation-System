import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import AccountStack from './src/navigation/AccountStack';
import TabNavigation from './src/navigation/TabNavigation';

const Stack = createNativeStackNavigator();

const App = () => {  

  return (
    <NavigationContainer>
      <TabNavigation />
      {/* <Stack.Navigator initialRouteName="Account"
            screenOptions={
                {
                    headerShown: false,
                    animationEnabled: true
                }
            }>
        <Stack.Screen name="Account" component={AccountStack} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
