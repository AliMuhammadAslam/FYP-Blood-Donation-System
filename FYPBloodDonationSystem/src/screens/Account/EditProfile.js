import React, { useState, useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Dropdown } from 'react-native-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';




const EditProfile = () => {

  const [userDetails, setUserDetails] = useState();
  const navigation = useNavigation();

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]);
  // console.log(genderValue);

  const [bloodOpen, setBloodOpen] = useState(false);
  const [bloodValue, setBloodValue] = useState(null);
  const [bloodItems, setBloodItems] = useState([
    { label: 'A+', value: 'a+' },
    { label: 'O+', value: 'o+' },
    { label: 'B+', value: 'b+' },
    { label: 'AB+', value: 'ab+' },
    { label: 'A-', value: 'a-' },
    { label: 'O-', value: 'o-' },
    { label: 'B-', value: 'b-' },
    { label: 'AB-', value: 'ab-' },
  ]);
  // console.log(bloodValue);

  // const [email, onChangeEmail] = React.useState('');
  const [mobileNumber, onChangeMobNum] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [image, setImage] = useState('');


  useEffect(() => {

    const UserRef = firestore().collection('users').doc(auth().currentUser.uid);

    UserRef.get().then((doc) => {
      if (doc.exists) {

        setUserDetails(doc.data());
        
        
        

        onChangeName(doc.data().name);
        // onChangeEmail(doc.data().email);
        onChangeMobNum(doc.data().mobileNumber);
        onChangeAddress(doc.data().address);
        setBloodValue(doc.data().bloodValue);
        setGenderValue(doc.data().genderValue);
        setImage(doc.data().image);



      } else {
        console.log('Document doesnot exist.');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });

  }, [auth().currentUser.uid]);

  const userUpdateProfile = async () => {

    try {
      
      const UserRef = firestore().collection('users').doc(auth().currentUser.uid); // Replace 'YOUR_USER_ID' with the actual user ID
      
      // Update the value of 'name' field
      await UserRef.update({
        
        name: name,
        // email: email,
        mobileNumber: mobileNumber,
        address: address,
        bloodValue: bloodValue,
        genderValue: genderValue,
        

      });
      
      console.log('User name updated successfully!');
      Alert.alert("Your data has been successfully updated!");
    } catch (error) {
      console.error('Error updating user name:', error);
    }






    //   if(email.length == 0 || password.length == 0 || name.length == 0 || mobileNumber.length == 0 || address.length == 0 || genderValue == null || bloodValue == null){
    //     Alert.alert("Please provide the required information");
    //   }
    //   else{

    //     try {
    //       const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    //       const { uid } = userCredential.user;

    //       const userRef = firestore().collection('users').doc(uid);
    //       await userRef.set({
    //         name,
    //         address,
    //         mobileNumber,
    //         genderValue,
    //         bloodValue,
    //         email,
    //         password
    //       });

    //       navigation.navigate('Slideshow');

    //     } catch (error) {
    //       console.log(error.code);
    //       Alert.alert(error.code);

    //     }

    //   }

  };


  return (

    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.header}>EditProfile</Text> */}
      <Header title="Edit Profile" style={styles.header} isRed={true} navigation={navigation}/>


      <View style={styles.avatarContainer}>
        <Image
          // source={{ uri: 'https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?w=2000' }}
          source={{ uri: image}}
          style={styles.avatar}
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Full Name"
        placeholderTextColor="#808080"
        FontAwesomeIcon={faEdit}
      //inputMode='email'
      //keyboardType=''
      />

      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email Address"
        inputMode='email'
        keyboardType='email-address'
        placeholderTextColor="#808080"
      /> */}

      {/* <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEdit} style={styles.editIcon} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email Address"
          inputMode="email"
          keyboardType="email-address"
          placeholderTextColor="#808080"
        />
      </View> */}

      <View style={styles.dropdown}>
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
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeMobNum}
        value={mobileNumber}
        placeholder="Mobile Number"
        inputMode='numeric'
        keyboardType='numeric'
        placeholderTextColor="#808080"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeAddress}
        value={address}
        placeholder="Address"
        placeholderTextColor="#808080"
      //inputMode='email'
      //keyboardType=''
      />

      <View style={styles.dropdown}>
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
      </View>

      {/* <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={userDetails.password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor= "#808080"
        /> */}

      <TouchableOpacity style={styles.button} onPress={userUpdateProfile}>
        <Text style={styles.btnText}>Save Changes</Text>
      </TouchableOpacity>

      {/* <View style={styles.button}>
            <Button title="Log In" />
        </View> */}
      {/* <Text style={styles.footer}>Already have an account? 
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Login')
        } 
        ><Text style={{color: "#DE0A1E"}}>Login</Text></TouchableOpacity></Text> */}
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
      borderRadius: 8,
      color: "black",
      //backgroundColor: "white",
    },
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        marginTop: 0,
        marginBottom: 100,
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
    avatarContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    avatar: {
      width: 110,
      height: 110,
      borderRadius: 40,
    },
    // inputContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   borderColor: '#808080',
    //   borderWidth: 1,
    //   borderRadius: 5,
    //   padding: 10,
    // },
    // input: {
    //   flex: 1,
    //   // Add your input styles here
    // },
    // editIcon: {
    //   marginRight: 10,
    //   // Add your edit icon styles here
    // },
  });

export default EditProfile;