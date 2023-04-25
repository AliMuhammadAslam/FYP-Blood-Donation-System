import React, { useState } from "react";
import {Alert, View, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const CreateRequest = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [openPicker, setOpenPicker] = useState(false);
    const [bloodType, setBloodType] = useState(null);
    const [bloodItems, setBloodItems] = useState(["A+", "B+", "O+", "O-", "AB+"]);
    const [notes, setNotes] = useState("");

    const postRequest = async () => {

        if(name.length == 0 || bloodType == null || notes.length == 0){
            Alert.alert("Please provide the required information");
            console.log(name.length);
            console.log(notes.length);
            console.log(bloodType);
        }
        else{
    
            try {
  
              const uid = auth().currentUser.uid;
              console.log(uid);

              var userName = "";

              const userDoc = firestore().collection('users').doc(uid);

              await userDoc.get().then((doc) => {
                if (doc.exists) {
                  userName = doc.data().name;
                  console.log(userName);
                } else {
                  console.log("No such document!");
                }
              }).catch((error) => {
                console.log("Error getting document:", error);
              });

              const RequestsRef = firestore().collection('requests').doc();
              await RequestsRef.set({
                uid,
                userName,
                hospitalName: name,
                bloodType,
                notes,
                postedAt: firestore.FieldValue.serverTimestamp()
              });
    
              //navigation.navigate('Slideshow');
              Alert.alert("Request successfully posted");
              
            } catch (error) {
              console.log(error);
              Alert.alert(error.code);
              
            }
    
        }
  
    };


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Create a Request" isRed={true} />
            <View style={styles.innerContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        underlineColorAndroid="transparent"
                        placeholder="Select Hospital"
                    />
                    <SelectDropdown
                        data={bloodItems}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setBloodType(selectedItem);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        defaultButtonText={'Select Blood Group'}
                        buttonStyle={styles.picker}
                        buttonTextStyle={{fontSize: 16, color: 'grey', textAlign: 'left'}}
                    />
                    <TextInput
                        style={styles.multiline_input}
                        underlineColorAndroid="transparent"
                        underlineColor="transparent"
                        placeholder="Note"
                        multiline={true}
                        numberOfLines={4}
                        maxLength={40}
                        value={notes}
                        onChangeText={setNotes}
                    />
                    <Button mode="contained" onPress={postRequest} buttonColor="#DE0A1E" labelStyle={{ fontSize: 18 }} style={{ height: 45, borderRadius: 10, justifyContent: 'center', marginTop: 70 }}>
                        Post Request
                    </Button>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',    },
    innerContainer: {
        paddingTop: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'column',
        width: '90%',
        gap: 20
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: "white",
    },
    multiline_input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: "white",
    },
    picker: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: "white",
    },
});

export default CreateRequest;