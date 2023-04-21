import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/Header";
import DropDownPicker from 'react-native-dropdown-picker';


const ApplicationForm = () => {

    const [openPicker, setOpenPicker] = useState(false);
    const [reqBloodType, setReqBloodType] = useState("AB+");
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
    const [notes, setNotes] = useState("");

    const handleRegister = () => {
        console.log('Pressed')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Application Form" isRed={false} />
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Kindly fill this form to get associated with Indus Hospital </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={"Zulfiqar Khan"}
                        disabled={true}
                        underlineColorAndroid="transparent"
                    />
                    <DropDownPicker
                        style={styles.picker}
                        open={false}
                        value={""}
                        placeholder={<Text style={{color: 'grey'}}>AB+</Text>}
                        items={bloodItems}
                        // setOpen={}
                        // setValue={setValue}
                        // setItems={setBloodItems}
                        disabled={true}
                    />
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Text style={{ color: 'black' }}>Which Blood Group are you in need off?</Text>
                        <DropDownPicker
                            style={styles.picker}
                            open={openPicker}
                            value={reqBloodType}
                            placeholder=""
                            items={bloodItems}
                            setOpen={setOpenPicker}
                            setValue={setReqBloodType}
                            setItems={setBloodItems}
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
})

export default ApplicationForm;