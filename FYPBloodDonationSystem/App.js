import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import TabNavigation from './src/navigation/TabNavigation';
import AuthStack from './src/navigation/AuthStack';
import { LogBox } from 'react-native';

const App = () => {  
  

  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);
  
  //Ignore all log notifications
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );


}

export default App;
