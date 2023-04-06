import React from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
// import {eye, eyeOff} from 'react-native-vector-icons/Feather';
function changePassword()  {
    // const isDarkMode = useColorScheme() === 'dark';
    // const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };

    // const navigation = useNavigation();

    
    const [password, onChangePassword] = React.useState('');
    const [password1, onChangePassword1] = React.useState('');
    const [password2, onChangePassword2] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(true);
    const [isVisible1, setIsVisible1] = React.useState(true);
    const [isVisible2, setIsVisible2] = React.useState(true);
    return(
        <SafeAreaView style={
            {//styles.container
                justifyContent: 'center',
            alignItems: 'center',
             flex: 1,
            }        
            }>
        <Text style={styles.header}>Change Password</Text>
        <Text style={{marginLeft:-130, marginTop:10, fontSize:20}}>Current Password:</Text>
        <TextInput
          //label="Password"
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={isVisible}
          // icon={<TouchableOpacity><Text>Show</Text></TouchableOpacity>}
          // iconPosition="right"
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
        <Text style={{marginLeft:-155, marginTop:10, fontSize:20}}>New Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword1}
          value={password1}
          secureTextEntry={isVisible1}
          // Icon={<TouchableOpacity><Text>Show</Text></TouchableOpacity>}
          // iconPosition="right"
          placeholder="Password"
          placeholderTextColor= "#808080"
        />
        <Text style={{marginLeft:-80, marginTop:10, fontSize:20}}>Confirm New Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword2}
          value={password2}
          secureTextEntry={isVisible2}
          // icon={
          //   <TouchableOpacity
          //       onPress={() => {
          //         setIsVisible2((prev) => !prev);
          //       }}>
          //       <Text>{isVisible2 ? require('../../assets/eye.png') : 'Hide'}</Text>
          //     </TouchableOpacity>
          // }
          // iconPosition="right"
          placeholder="Password"
          placeholderTextColor= "#808080"
        />

        <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Change Password</Text>
            </TouchableOpacity>

        {/* <View style={styles.button}>
            <Button title="Log In" />
        </View> */}
        {/* <Text style={styles.footer}>Don't have an account? 
        <TouchableOpacity 
         onPress={() =>
           navigation.navigate('Signup')
         }
        >
          <Text style={{color: "#DE0A1E"}}>Signup</Text></TouchableOpacity></Text> */}
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
        marginBottom: 50,
        color:"black",
        marginTop: -50,
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

export default changePassword;