import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import TabNavigation from './src/navigation/TabNavigation';
import AuthStack from './src/navigation/AuthStack';


const App = () => {  

  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );


}

export default App;
