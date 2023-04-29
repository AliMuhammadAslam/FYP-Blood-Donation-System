import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import ConfirmationCodeInput from 'react-native-confirmation-code-input';
import Header from "../components/Header";

  

function OTPVerification() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  

  
  return (
    <SafeAreaView style={[
      {//styles.container
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      backgroundStyle
    ]}>

      

      <Header title="OTP Verification" isRed={true} />
      <View

        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        <Image style={styles.image}
            resizeMode={'contain'}
            source={require('../../assets/OTP-Verification.png')} />  

      </View>

    
      <Text style={{marginLeft:40, marginRight:40, marginTop:10, fontSize:20}}>Enter your 5 digit verification code here.</Text>
      
      
     
        <ConfirmationCodeInput      
            codeLength={5}  
            activeColor='rgba(49, 180, 4, 1)'
            inactiveColor='rgba(49, 180, 4, 1.3)'
            autoFocus={false}
            ignoreCase={true}
            inputPosition='center'
            size={50}
            codeInputStyle={{ borderWidth: 1.5, fontWeight: '800' }}
            // onFulfill={(isValid, code) => this._onFinishCheckingCode1(isValid, code)}
            onFulfill={(code, isValid) => console.log(code, isValid)}
            containerStyle={{ marginTop: 30}}
            //codeInputStyle={{ fontWeight: '800' }}
            keyboardType='numeric'
            
        />





      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>

      {/* <View style={styles.button}>
            <Button title="Log In" />
        </View> */}
      <Text style={styles.footer}>Did not receive a code?<TouchableOpacity
      // onPress={() =>
      //   navigation.navigate('Signup')
      // }
      >
        <Text style={{color: "#DE0A1E"}}>Resend</Text></TouchableOpacity></Text>

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
  header: {
    fontSize: 30,
    marginBottom: 25,
    marginTop: 25,
  },
  footer: {
    margin: 10,
  },
  button: {
    width: 300,
    height: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    backgroundColor: "#DE0A1E",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
    image: {
        height: 150,
        width: 150,
    },
});

export default OTPVerification;