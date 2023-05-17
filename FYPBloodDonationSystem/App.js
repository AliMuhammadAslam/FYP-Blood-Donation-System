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
import Signup_first from './src/screens/signup_first';
import Signup_second from './src/screens/signup_second';
import Slideshow from './src/components/slideshow';
import forgotPassword from './src/screens/forgotPassword';
import ChatScreen from './src/screens/ChatScreen';
import CreateRequest from './src/screens/Forms/CreateRequest';
import DonationRequestInfoPage from './src/screens/DonationRequestInfoPage';
import PrivateReceiversRequestList from './src/screens/privateRequests';
import CreateAppointment from './src/screens/createAppointment';
//import MyAppointments from './src/screens/Appointments';
import MessagesScreen from './src/screens/MessagesScreen';
import Home from './src/screens/home';
const win = Dimensions.get('window');
const ratio = win.width/602;


  // const Stack = createStackNavigator();
  // const MessageStack = ({ navigation }) => (
  //   <Stack.Navigator>
  //     <Stack.Screen name="Messages" component={MessagesScreen} />
  //     <Stack.Screen
  //       name="Chat"
  //       component={ChatScreen}
  //       options={({ route }) => ({
  //         title: route.params.userName,
  //         headerBackTitleVisible: false,
  //       })}
  //     />
  //   </Stack.Navigator>
  // );

const AuthenticationScreen = () => {

  const navigation = useNavigation();

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    
    <SafeAreaView //style={backgroundStyle}
    >
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        //style={backgroundStyle}
        >
        
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
              onPress={() => navigation.navigate('Signup_first')}>
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
              onPress={() => Alert.alert('Google button pressed')}>
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
              onPress={() => Alert.alert('Facebook button pressed')}>
              <Image style={styles.imageIcon}
              resizeMode={'contain'}
              source={require('./assets/facebook.png')} />
              <Text style={styles.buttonText2}>
                {"Continue With Facebook"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop:15}}
              onPress={() => navigation.navigate('Slideshow')}>
              <Text style={styles.buttonText2}>
                {"View an Excellent Slideshow"}
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup_first"
          component={Signup_first}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Signup_second"
          component={Signup_second}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Create Request" 
        component={CreateRequest} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Donation Requests"
          component={PrivateReceiversRequestList}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Request Info"
          component={DonationRequestInfoPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Create Appointment"
          component={CreateAppointment}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Slideshow"
          component={Slideshow}
        //options={{headerShown: false}}
        />
        <Stack.Screen name="forgotPassword"
          component={forgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MessagesScreen"
          component={MessagesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
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
    //flex:1,
    flexDirection: 'row',
    paddingRight: 20
  },
  buttonView2: {
    paddingBottom: 40
  },
  buttonStyle: {
    //width: '100%',
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
    // width: '40%',
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
