/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Alert,
  Dimensions,
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={Signup}
          //options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" 
        component={Login} />
        <Stack.Screen name="Startup" 
        component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const win = Dimensions.get('window');
const ratio = win.width/602;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <View

          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Image style={styles.image}
          resizeMode={'contain'}
          //source={require('./assets/StartupPic.png')} 
          source={require('./assets/StartupPic.png')} 
          />

          <View style={styles.fixToText}>
          <View style={styles.buttonView}>
          <Button
          title="Signup"
          onPress={() => Alert.alert('Left button pressed')}
          // onPress={() =>
          //   navigation.navigate('Signup')
          // }
        />
        </View>
        <Button 
          
          title="Login"
          onPress={() => Alert.alert('Right button pressed')}
          
        />
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 50,
  },
  buttonView: {
    // width: '50%',
    paddingRight: 25,
    fontSize: 40,
  },
  image:{
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: 576 * ratio,
  },
});

export default App;
