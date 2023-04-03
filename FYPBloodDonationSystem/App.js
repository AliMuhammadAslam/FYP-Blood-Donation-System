/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
  Dimensions,
} from 'react-native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Signup from './src/screens/signup';

const win = Dimensions.get('window');
const ratio = win.width/602;

const AuthenticationScreen = () => {

  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
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
            backgroundColor: "#DE0A1E"
          }}>

          <Image style={styles.image}
          resizeMode={'contain'}
          source={require('./assets/StartupPic.png')} />

          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingTop: 20,
              fontSize: 15

            }}>
            {"The more details the better\nWrite a nice title and description\nSelect a category and add photos"}
          </Text>

          <View style={styles.fixToText}>
            <View style={styles.buttonView}>
              <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.buttonText}>
                {"Signup"}
              </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle2}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>
                {"Login"}
              </Text>
              </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.fixToColumn}>
            <View style={styles.buttonView2}>
              <TouchableOpacity
              style={styles.buttonStyle3}
              onPress={() => Alert.alert('Left button pressed')}>
              <Image style={styles.imageIcon}
              //resizeMode={'contain'}
              source={require('./assets/google.png')} />
              <Text style={styles.buttonText2}>
                {"Continue With Google"}
              </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle3}
              onPress={() => Alert.alert('Right button pressed')}>
              <Image style={styles.imageIcon}
              resizeMode={'contain'}
              source={require('./assets/facebook.png')} />
              <Text style={styles.buttonText2}>
                {"Continue With Facebook"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.plainPaddingBottom}/>
          
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );

}

const App = () => {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={AuthenticationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen name="Login" 
        component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
  },
  fixToColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
  buttonView: {
    paddingRight: 100
  },
  buttonView2: {
    paddingBottom: 40
  },
  buttonStyle: {
    // width: '50%',
    backgroundColor: '#00CC66',
    //paddingRight: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    //width: 105
  },
  buttonStyle2: {
    // width: '50%',
    backgroundColor: '#0080FF',
    //paddingRight: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    //width: 105
  },
  buttonStyle3:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    //paddingHorizontal: 0,
    paddingVertical: 5,
    //paddingLeft: 50
  },
  buttonText: {

    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center'

  },
  buttonText2: {

    paddingLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    //justifyContent: 'center'

  },
  image:{
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: 576 * ratio,
  },
  imageIcon:{
    //flex: 1,
    //alignSelf: 'stretch',
    width: 15,
    height: 15,
  },
  divider:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    //marginVertical: 10,
    marginHorizontal: 30,
    marginBottom: 40
    
  },
  plainPaddingBottom:{
    paddingBottom:100
  }
});

export default App;
