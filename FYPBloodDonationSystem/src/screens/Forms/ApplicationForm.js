import React, { useState, useEffect } from "react";
import {Alert, View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/Header";
import DropDownPicker from 'react-native-dropdown-picker';
import SelectDropdown from 'react-native-select-dropdown';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";


const ApplicationForm = ({route}) => {

    const navigation = useNavigation();

    const { orgId, orgName, orgAddress } = route.params;

    const [regType, setregType] = useState(null);
    const [regItems, setregItems] = useState(["Donor", "Receiver"]);

    const [bloodType, setBloodType] = useState(null);
    const [bloodItems, setBloodItems] = useState(["A+", "B+", "O+", "O-", "AB+"]);
    const [notes, setNotes] = useState("");

    const [userId, setUserId] = useState(null);
    const[userDetails, setUserDetails] = useState(null);

    useEffect(() => {

        const userRef = firestore().collection('users').doc(auth().currentUser.uid);

        userRef.get().then((doc) => {
        if (doc.exists) {
            setUserId(doc.id);
            setUserDetails(doc.data());
        } else {
            console.log('Document doesnot exist.');
        }
        }).catch((error) => {
            console.log('Error getting document:', error);
        });

    }, []);

    const handleRegister = async () => {

        if(notes.length == 0 || bloodType == null || regType == null){
            Alert.alert("Please provide the required information");
        }
        else{
    
            try {

              const AssociationRequestsRef = firestore().collection('OrganizationAssociations').doc();
              await AssociationRequestsRef.set({
                orgId,
                orgName,
                orgAddress,
                userId,
                userName: userDetails.name,
                address: userDetails.address,
                bloodType,
                notes,
                status: 'requested',
                regType
              });
    
              //navigation.navigate('Slideshow');
              Alert.alert("Association Request successfully posted");
              navigation.navigate('Account');
              
            } catch (error) {
              console.log(error);
              Alert.alert(error.code);
              
            }
    
        }
  
    };

    return (

        <>

        {
            
            userDetails ? <SafeAreaView style={styles.container}>
            <Header title="Application Form" isRed={false} navigation={navigation} />
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Kindly fill this form to get associated with {orgName}</Text>
                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        value={userDetails.name}
                        disabled={true}
                        underlineColorAndroid="transparent"
                    />
                    
                
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Text style={{ color: 'black' }}>Who do you want to register as?</Text>
                        <SelectDropdown
                            data={regItems}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                                setregType(selectedItem);
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            defaultButtonText={'Select Registration Type'}
                            buttonStyle={styles.picker2}
                            buttonTextStyle={{fontSize: 16, color: 'grey', textAlign: 'left'}}
                        />
                        <Text style={{ color: 'black' }}>Which Blood Group are you in need off or want to donate?</Text>
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
                            buttonStyle={styles.picker2}
                            buttonTextStyle={{fontSize: 16, color: 'grey', textAlign: 'left'}}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Text style={{ color: 'black' }}>Additional Notes:</Text>
                        <TextInput
                            style={styles.multiline_input}
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={4}
                            maxLength={40}
                            value={notes}
                            onChangeText={setNotes}
                        />
                    </View>
                    <Text style={{ color: 'black', fontSize: 16 }}>Your quessionnaire will be shared with Indus Hospital for proper evaluation</Text>
                    <Button mode="contained" onPress={handleRegister} buttonColor="#DE0A1E" labelStyle={{ fontSize: 18 }} style={{ height: 45, borderRadius: 10, justifyContent: 'center' }}>
                        Register
                    </Button>
                </View>
            </View>
        </SafeAreaView>

        :

        <SafeAreaView style={styles.container}>
            <Header title="Application Form" isRed={false} navigation={navigation} />
            <Text>Loading...</Text>
        </SafeAreaView>

        
        }

        </>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    innerContainer: {
        paddingTop: 20,
        width: '100%',
        // backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 18,
        lineHeight: 25,
        color: 'black',
        marginBottom: 30
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
        // height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: "white",
    },
    picker: {
        height: -10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        // backgroundColor: "white",
    },
    picker2:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: "white",
    }
})

export default ApplicationForm;