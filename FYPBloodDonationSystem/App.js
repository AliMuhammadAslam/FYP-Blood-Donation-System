import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import { LogBox } from 'react-native';
import { View, Text, Image } from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);
  const SplashScreen = require('./assets/splashscreen.jpg');
  const ss = require('./assets/ss.gif')

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();
  return (

    loading ? (<View style={{flex: 1, backgroundColor: '#e61021'}}>
      <Image source={ss} resizeMode='contain' style={{width: '100%', height: '100%'}} />
    </View>) : (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    )

  );


}

export default App;
