import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import Header from "../../components/Header";
import { useNavigation } from '@react-navigation/native';



const ForgotPassword = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState('');
  
  return (
    <SafeAreaView style={[
      {//styles.container
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      backgroundStyle
    ]}>

      

      <Header title="Forgot Password" isRed={true} navigation={navigation}/>
      <View

        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        <Image style={styles.image}
            resizeMode={'contain'}
            source={require('../../../assets/forgotPassPic.png')} />  

      </View>

    
      <Text style={{marginLeft:40, marginRight:40, marginTop:10, fontSize:20}}>Enter the email address associated with your account.</Text>
      <Text style={{marginLeft:40, marginRight:25, marginTop:10, fontSize:20}}>We will email you a link to reset your password.</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email Address"
        inputMode='email'
        keyboardType='email-address'
      />
      

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>

      {/* <View style={styles.button}>
            <Button title="Log In" />
        </View> */}
      <Text style={styles.footer}>Did not receive an email?<TouchableOpacity
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
    marginBottom: 15,
    marginTop: -50,
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
    elevation: 3,
    backgroundColor: "#DE0A1E",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
});

export default ForgotPassword;