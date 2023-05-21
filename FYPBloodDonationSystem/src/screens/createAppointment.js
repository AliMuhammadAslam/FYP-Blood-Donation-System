import React, { useState, useEffect } from "react";
import {Alert, View, StyleSheet, Text} from "react-native";
import Header from "../components/Header";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';


const CreateAppointment = ({route, navigation}) => {

    // const {reqId, receiverName, receiverId, hospital, bloodType, maxDateLimit} = route.params;
    const reqId = 1;
    const receiverName = "Ali Muhammad";
    const receiverId = 2;
    const hospital = "Agha Khan";
    const bloodType = "O-";
    const maxDateLimit = new Date();

    const [notes, setNotes] = useState("");

    const currentDate = new Date();

    const [appointmentDate, setAppointmentDate] = useState(currentDate);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [donorId, setDonorId] = useState(null);
    const[donorDetails, setDonorDetails] = useState(null);

    const onAppointmentDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        setAppointmentDate(selectedDate || appointmentDate);
    };

    const renderPicker = () => {
        setShowDatePicker(true);
    };

    useEffect(() => {

        const donorRef = firestore().collection('users').doc(auth().currentUser.uid);

        donorRef.get().then((doc) => {
        if (doc.exists) {
            setDonorId(doc.id);
            setDonorDetails(doc.data());
        } else {
            console.log('Document doesnot exist.');
        }
        }).catch((error) => {
            console.log('Error getting document:', error);
        });

    }, []);

    const createAppointment = async () => {

        if( donorId == null || donorDetails == null || notes.length == 0){
            Alert.alert("Please provide the required information");
        }
        else{
    
            try {

              const AppointmentsRef = firestore().collection('appointments').doc();
              await AppointmentsRef.set({
                reqId,
                donorId,
                receiverId,
                donorName: donorDetails.name,
                receiverName,
                hospital,
                bloodType,
                notes,
                postedAt: currentDate,
                appointmentDate: appointmentDate,
                status: 'requested'
              });
    
              //navigation.navigate('Slideshow');
              Alert.alert("Appointment request successfully posted");
              
            } catch (error) {
              console.log(error);
              Alert.alert(error.code);
              
            }
    
        }
  
    };


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Create an Appointment" isRed={true} navigation={navigation} />
            <View style={styles.innerContainer}>

                {donorId && donorDetails ? (

                    <View style={styles.inputContainer}>

                    <Text style={{fontSize: 16, color:'black'}}>Donor Name: {donorDetails.name}</Text>

                    <Text style={{fontSize: 16, color:'black'}}>Receiver Name: {receiverName}</Text>

                    <Text style={{fontSize: 16, color:'black'}}>Hospital Name: {hospital}</Text>

                    <Text style={{fontSize: 16, color:'black'}}>Blood Group: {bloodType}</Text>

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                    <Text style={{fontSize: 16, color:'black'}}>Appointment Date: {appointmentDate.toLocaleDateString()}</Text>
                    <Button mode="contained" onPress={renderPicker} buttonColor="#DE0A1E" labelStyle={{ fontSize: 18 }} style={{ height: 45, borderRadius: 10, justifyContent: 'center'}}>
                        Select Date
                    </Button>

                    </View>

                    {showDatePicker && (
                        <DateTimePicker
                        value={appointmentDate}
                        mode="date"
                        minimumDate={currentDate}
                        maximumDate={new Date(maxDateLimit)}
                        onChange={onAppointmentDateChange}
                        />
                    )}

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
                    <Button mode="contained" onPress={createAppointment} buttonColor="#DE0A1E" labelStyle={{ fontSize: 18 }} style={{ height: 45, borderRadius: 10, justifyContent: 'center', marginTop: 70 }}>
                        Create Appointment
                    </Button>

                    </View>

                ) : (

                    <Text>Loading...</Text>

                )

                }

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

export default CreateAppointment;