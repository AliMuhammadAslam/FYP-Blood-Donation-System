import React from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Login() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return(
        <SafeAreaView style={[
            {//styles.container
                justifyContent: 'center',
            alignItems: 'center',
             flex: 1,
            }, 
            backgroundStyle
            ]}>
            <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email Address"
          inputMode='email'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />

        <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>

        {/* <View style={styles.button}>
            <Button title="Log In" />
        </View> */}
        <Text style={styles.footer}>Don't have an account? <TouchableOpacity><Text>Signup</Text></TouchableOpacity></Text>
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
      borderRadius: 5,
      //backgroundColor: "white",
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
    },
    footer: {
        margin: 10,
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