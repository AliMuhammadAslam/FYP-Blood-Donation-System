import React from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth'

function Login()  {
    // const isDarkMode = useColorScheme() === 'dark';
    // const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };

    const navigation = useNavigation();

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(true);
    const userLogin = () => {

      if(email.length == 0 || password.length == 0){

        Alert.alert('Please fill in the required fields')

      }
      else{

        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('Signed in!');
            //navigation.navigate('Create Request')
            navigation.navigate('MessagesScreen')
          })
          .catch(error => {

            if (error.code === 'auth/user-not-found') {
              console.log('User not found!');
            }

            if(error.code === 'auth/wrong-password'){
              console.log('That password is invalid!');
            }

            Alert.alert(error.code);

            console.error(error);
        });
        
      }  

    }


    return(
        <SafeAreaView style={
            {//styles.container
                justifyContent: 'center',
            alignItems: 'center',
             flex: 1,
            }        
            }>
            <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email Address"
          inputMode='email'
          keyboardType='email-address'
          placeholderTextColor= "#808080"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={isVisible}
          right={
            <TextInput.Icon
              icon={isVisible ? require('../../assets/eye-off.png') : require('../../assets/eye.png')}
            
              onPress={() =>
                setIsVisible(!isVisible)
              }
              />
          }
          placeholder="Password"
          placeholderTextColor= "#808080"
        />

        <TouchableOpacity style={styles.button} onPress={userLogin}>
                <Text style={styles.btnText}>Log In</Text>
                
            </TouchableOpacity>

        {/* <View style={styles.button}>
            <Button title="Log In" />
        </View> */}
        <Text style={styles.footer}>Don't have an account? 
        <TouchableOpacity 
         onPress={() =>
           navigation.navigate('Signup_first')
         }
        >
        <Text style={{color: "#DE0A1E"}}>Signup</Text></TouchableOpacity></Text>

        <Text style={styles.footer}>Forgot Your Password? 
        <TouchableOpacity 
         onPress={() =>
           navigation.navigate('forgotPassword')
         }
        >
        <Text style={{color: "#DE0A1E"}}>Forgot Password</Text></TouchableOpacity></Text>
      </SafeAreaView>
    );
}

  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 12,
      //elevation: 20,
      //borderRadius: 5,
      backgroundColor: "white",
      borderTopEndRadius: 15,
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 15, 
      borderTopStartRadius: 15
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        //width: "80%",
    },
    header:{
        fontSize: 30,
        marginBottom: 30,
        color:"black",
    },
    footer: {
        margin: 10,
        color: "#808080"
    },
    button: {
        width:300,
        height:40,
        margin:10,
        alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#DE0A1E",
    borderRadius: 5,
    },
    btnText:{
        fontSize: 18,
        color: "white",
    },
  });

export default Login;