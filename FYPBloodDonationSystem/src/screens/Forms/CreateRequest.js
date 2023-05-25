import React, { useState, useEffect } from "react";
import { Alert, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import Header from "../../components/Header";
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faCalendarDays } from "@fortawesome/free-solid-svg-icons";


const CreateRequest = ({ navigation }) => {

    const isFocused = useIsFocused();

    const [name, setName] = useState("");
    const [bloodType, setBloodType] = useState(null);
    const [bloodItems, setBloodItems] = useState(["A+", "B+", "O+", "O-", "AB+"]);
    const [notes, setNotes] = useState("");

    var currentDate = new Date();

    const [expiryDate, setExpiryDate] = useState(currentDate);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onExpiryDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        setExpiryDate(selectedDate || expiryDate);
    };

    const renderPicker = () => {
        setShowDatePicker(true);
    };

    useEffect(() => {
        if (isFocused) {
            setName("");
            setBloodType(null);
            setNotes("");
            currentDate = new Date();
            setExpiryDate(currentDate);
        }
    }, [isFocused]);

    const postRequest = async () => {

        if (name.length == 0 || bloodType == null || notes.length == 0) {
            Alert.alert("Please provide the required information");
            console.log(name.length);
            console.log(notes.length);
            console.log(bloodType);
        }
        else {

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
                    postedAt: currentDate,
                    expiryDate: expiryDate
                });

                //navigation.navigate('Slideshow');
                Alert.alert("Request successfully posted");
                navigation.navigate('Home');

            } catch (error) {
                console.log(error);
                Alert.alert(error.code);

            }

        }

    };


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Create a Request" isRed={true} navigation={navigation} />
            <View style={styles.innerContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        underlineColorAndroid="transparent"
                        placeholder="Select Hospital"
                        placeholderTextColor='#969696'
                        mode="outlined"
                        outlineStyle={{
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: '#b6b6b6',
                        }}
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
                        buttonTextStyle={{ fontSize: 16, color: '#969696', textAlign: 'left' }}
                    />
                    <Text style={{ fontSize: 16, color: '#969696' }}>Current Date: {currentDate.toLocaleDateString()}</Text>

                    <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>

                        <Text style={{ fontSize: 16, color: '#969696' }}>Expiry Date: {expiryDate.toLocaleDateString()}</Text>
                        <TouchableOpacity onPress={renderPicker}>
                            <FontAwesomeIcon icon={faCalendarDays} size={26} color='#DE0A1E' />
                        </TouchableOpacity>

                    </View>

                    {showDatePicker && (
                        <DateTimePicker
                            value={expiryDate}
                            mode="date"
                            minimumDate={currentDate}
                            onChange={onExpiryDateChange}
                        />
                    )}

                    <TextInput
                        style={styles.multiline_input}
                        underlineColorAndroid="transparent"
                        underlineColor="transparent"
                        placeholder="Note"
                        placeholderTextColor='#969696'
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
        alignItems: 'center',
    },
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
        backgroundColor: "white",
    },
    multiline_input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#b6b6b6',
        backgroundColor: "white",
    },
    picker: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#b6b6b6',
        backgroundColor: "white",
    },
});

export default CreateRequest;