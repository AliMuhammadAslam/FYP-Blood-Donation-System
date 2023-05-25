import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Alert, BackHandler, SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Dropdown } from 'react-native-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import {TextInput} from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import emailjs from '@emailjs/browser';

function Signup_second({route}) {
    const {name, address, mobileNumber, genderValue, bloodValue, email} = route.params;
    console.log(name, address, mobileNumber, genderValue, bloodValue, email);
    // const isDarkMode = useColorScheme() === 'dark';
    // const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };
    React.useEffect(() => {
        const backAction = () => {
            navigation.goBack();
        //   Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
        //     {
        //       text: 'Cancel',
        //       onPress: () => null,
        //       style: 'cancel',
        //     },
        //     {text: 'YES', onPress: () => BackHandler.exitApp()},
        //   ]);
        //   return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
          () => true,
        );
    
        return () => backHandler.remove();
      }, []);

    const navigation = useNavigation();

//     const [genderOpen, setGenderOpen] = useState(false);
//   const [genderValue, setGenderValue] = useState(null);
//   const [genderItems, setGenderItems] = useState([
//     {label: 'Male', value: 'male'},
//     {label: 'Female', value: 'female'},
//   ]);
//   console.log(genderValue);

//   const [bloodOpen, setBloodOpen] = useState(false);
//   const [bloodValue, setBloodValue] = useState(null);
//   const [bloodItems, setBloodItems] = useState([
//     {label: 'A+', value: 'a+'},
//     {label: 'O+', value: 'o+'},
//     {label: 'B+', value: 'b+'},
//     {label: 'AB+', value: 'ab+'},
//     {label: 'A-', value: 'a-'},
//     {label: 'O-', value: 'o-'},
//     {label: 'B-', value: 'b-'},
//     {label: 'AB-', value: 'ab-'},
//   ]);
//   console.log(bloodValue);

    //const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [confirmPassword, onChangeConfirmPassword] = React.useState('');
    const [isPassVisible, setIsPassVisible] = React.useState(true);
    const [isConPassVisible, setIsConPassVisible] = React.useState(true);
    //const [mobileNumber, onChangeMobNum] = React.useState('');
    //const [address, onChangeAddress] = React.useState('');
    //const [name, onChangeName] = React.useState('');

    const checkPass = () => {
    if(password!=confirmPassword){
        Alert.alert("Passwords do not match");
        onChangePassword('');
        onChangeConfirmPassword('');
      }};

    const userSignUp = async () => {

      if(email.length == 0 || password.length == 0 || name.length == 0 || mobileNumber.length == 0 || address.length == 0 || genderValue == null || bloodValue == null){
        Alert.alert("Please provide the required information");
      }
      else if(password!=confirmPassword){
        Alert.alert("Passwords do not match");
        onChangePassword('');
        onChangeConfirmPassword('');
      }

      else{

        try {
          const userCredential = await auth().createUserWithEmailAndPassword(email, password);
          const { uid } = userCredential.user;
      
          const userRef = firestore().collection('users').doc(uid);

          if (genderValue == "male") {
            await userRef.set({
              name,
              address,
              mobileNumber,
              genderValue,
              bloodValue,
              email,
              password,
              isOrg: false,
              image: "https://static.vecteezy.com/system/resources/previews/002/002/427/original/man-avatar-character-isolated-icon-free-vector.jpg"

            });
          }
          else {
            await userRef.set({
              name,
              address,
              mobileNumber,
              genderValue,
              bloodValue,
              email,
              password,
              isOrg: false,
              image: "https://media.istockphoto.com/id/1331335536/vector/female-avatar-icon.jpg?s=170667a&w=0&k=20&c=-iyD_53ZEeZPc4SmvmGB1FJXZcHy_fvbJBv6O8HblHs="
            });
          }
          Alert.alert("User account created & signed in!");
          // // const sendEmail = (e) => {
          //   // const e = {userRef.email}
          //   // e.preventDefault();
          // UserRef.get().then((doc) => {
          //   console.log(1);
          //   const e = doc.data().email;
          //   console.log(e);
          //   emailjs.sendForm('service_jbmyhht', 'template_zhzhf4s', e, 'FNEB2PG8inA-lciwa')
          //     .then((result) => {
          //       console.log("Email sent successfully");
          //     }, (error) => {
          //       console.log("Email not sent");
          //     });
          //   // confirmAlert({
          //   //     title: 'Subscription',
          //   //     message: 'You will receive an email to confirm your subscription.',
          //   //     buttons: [
          //   //       {
          //   //         label: 'Ok',
          //   //         onClick: () => {refreshPage()}
          //   //       },
          //   //     ]
          //   //   });
          //   // console.log(form.current)
          //   // form.current.reset();
          // });
    
        //}
          navigation.navigate('TabNavigation');
          
        } catch (error) {
          console.log(error.code);
          Alert.alert(error.code);
          
        }

      }
     
    };


    return(

        <SafeAreaView style={[
            {//styles.container
                justifyContent: 'center',
            alignItems: 'center',
             flex: 1,
            }, 
            //backgroundStyle
            ]}>
            <Text style={styles.header}>Signup</Text>

            {/* <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Full Name"
          placeholderTextColor= "#808080"
          //inputMode='email'
          //keyboardType=''
        /> */}
        
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email Address"
          inputMode='email'
          keyboardType='email-address'
          placeholderTextColor= "#808080"
        /> */}

{/* <View style={styles.dropdown}>
      <DropDownPicker
      placeholder='Gender'
      open={genderOpen}
      value={genderValue}
      items={genderItems}
      setOpen={setGenderOpen}
      setValue={setGenderValue}
      setItems={setGenderItems}
      theme="LIGHT"
    />
</View> */}

{/* <TextInput
          style={styles.input}
          onChangeText={onChangeMobNum}
          value={mobileNumber}
          placeholder="Mobile Number"
          inputMode='numeric'
          keyboardType='numeric'
          placeholderTextColor= "#808080"
        /> */}
      
{/* <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Address"
          placeholderTextColor= "#808080"
          //inputMode='email'
          //keyboardType=''
        />
         */}
        {/* <View style={styles.dropdown}>
<DropDownPicker
      placeholder='Blood Group'
      open={bloodOpen}
      value={bloodValue}
      items={bloodItems}
      setOpen={setBloodOpen}
      setValue={setBloodValue}
      setItems={setBloodItems}
      theme="LIGHT"
      dropDownDirection='TOP'
      listMode="MODAL"
      searchable={true}
      scrollViewProps={true}
    />
</View> */}

        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          //secureTextEntry={true}
          secureTextEntry={isPassVisible}
          right={
            <TextInput.Icon
              icon={isPassVisible ? require('../../assets/eye-off.png') : require('../../assets/eye.png')}
            
              onPress={() =>
                setIsPassVisible(!isPassVisible)
              }
              />
          }
          placeholder="Password"
          placeholderTextColor= "#808080"
        />

<TextInput
          style={styles.input}
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
          //secureTextEntry={true}
          secureTextEntry={isConPassVisible}
          right={
            <TextInput.Icon
              icon={isConPassVisible ? require('../../assets/eye-off.png') : require('../../assets/eye.png')}
            
              onPress={() =>
                setIsConPassVisible(!isConPassVisible)
              }
              />
          }
          placeholder="Confirm Password"
          placeholderTextColor= "#808080"
        />

        <TouchableOpacity style={styles.button} onPress={userSignUp}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        {/* <View style={styles.button}>
            <Button title="Log In" />
        </View> */}
        <Text style={styles.footer}>Already have an account? 
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Login')
        } 
        ><Text style={{color: "#DE0A1E"}}>Login</Text></TouchableOpacity></Text>
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
      //borderRadius: 15,
      color: "black",
      backgroundColor: "white",
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
        color: "black",
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
    dropdown:{
      backgroundColor: '#171717',
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width:300,
      zIndex: 999,
      borderRadius:8,
      //paddingHorizontal: 15
    },
  });

export default Signup_second;
