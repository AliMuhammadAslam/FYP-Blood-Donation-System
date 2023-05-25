import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faDownload } from '@fortawesome/free-solid-svg-icons';
import { MoreOrLess } from "@rntext/more-or-less";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';





const PatientDetails = ({ route }) => {

    const { docId } = route.params;

    const sample_image = require('../../../assets/sample_image.jpg');
    const star = require('../../../assets/star_icon.png');
    const blood_drop = require('../../../assets/blood_drop.jpg');

    const [patientDetails, setDetails] = useState();
    const [userDetails, setUserDetails] = useState();

    const navigation = useNavigation();


    useEffect(() => {

        // checkLocation();

        const AssociationRef = firestore().collection('OrganizationAssociations').doc(docId);

        AssociationRef.get().then((doc) => {
            if (doc.exists) {
                const userRef = firestore().collection('users').doc(doc.data().userId);
                userRef.get().then((userDoc) => {
                    if (userDoc.exists) {
                        setUserDetails(userDoc.data());
                    }
                });
                setDetails(doc.data());
            } else {
                console.log('Document doesnot exist.');
            }
        }).catch((error) => {
            console.log('Error getting document:', error);
        });

    }, [docId]);



    return (
        <SafeAreaView style={styles.container}>
            <Header title="Patient Details" isRed={false} navigation={navigation} />
            <View style={{ marginTop: 20, alignItems: 'center', width: '100%' }}>
                {patientDetails && userDetails ? 


                    <><Image style={{ width: 130, height: 130, borderRadius: 70 }} source={{ uri: userDetails.image}} /><View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 65, marginLeft: 100 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 22, marginTop: 10, fontWeight: '600' }}>{patientDetails.userName}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                <Image style={{ width: 15, height: 15 }} source={star} />
                                <Text style={styles.text}>4.5/5 Ratings</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ marginTop: 15 }}>
                            <FontAwesomeIcon icon={faPhone} size={30} color='#DE0A1E' />
                        </TouchableOpacity>
                    </View><View style={{ flexDirection: 'row', width: '94%', marginTop: 10 }}>
                            <View style={{ width: '70%', gap: 5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Gender: </Text>
                                    <Text style={{ color: 'grey', fontSize: 16 }}>{userDetails.genderValue}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Age: </Text>
                                    <Text style={{ color: 'grey', fontSize: 16 }}>23</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Address: </Text>
                                    <Text style={{ color: 'grey', fontSize: 16, width: '70%' }}>{patientDetails.address}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Registration Type: </Text>
                                    <Text style={{ color: 'grey', fontSize: 16, width: '70%' }}>{patientDetails.regType}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end', gap: 5 }}>
                                <Text style={{ fontSize: 18, color: 'black' }}>Blood Group</Text>
                                <ImageBackground style={{ width: 40, height: 50, alignItems: 'center', justifyContent: 'center' }} source={blood_drop}>
                                    <Text style={{ color: 'white', fontSize: 24, paddingTop: 10 }}>{patientDetails.bloodType}</Text>
                                </ImageBackground>
                            </View>
                        </View><Text style={{ color: 'black', fontSize: 18, fontWeight: '600', marginTop: 15, marginBottom: 15 }}>I will Donate 4 times per year</Text><View style={{ width: '94%' }}>
                            <Text style={{ fontSize: 18, color: 'black' }}>Additional Note: </Text>
                            <ScrollView style={{ width: '85%', height: '15%' }}>
                                <MoreOrLess
                                    numberOfLines={4}
                                    textButtonStyle={{ color: 'lightblue' }}
                                    animated
                                    textStyle={{ color: 'grey' }}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                    a galley of type and scrambled it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem.{patientDetails.notes}

                                </MoreOrLess>
                            </ScrollView>
                        </View><View style={{ flexDirection: 'row', marginTop: 18, alignItems: 'center', gap: 5, width: '94%' }}>
                            <Text style={{ fontSize: 18, color: 'black' }}>Download Patient Questionnaire: </Text>
                            <TouchableOpacity>
                                <FontAwesomeIcon icon={faDownload} size={19} color='#DE0A1E' />
                            </TouchableOpacity>
                        </View></>

                    :

                    <Text>Loading...</Text>
                
                    
            
                }

                {/*<View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center', gap: 40, width: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <TouchableOpacity style={styles.declineButton}>
                        <Text style={{ fontSize: 22, color: 'grey' }}>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acceptButton}>
                        <Text style={{ fontSize: 22, color: '#DE0A1E' }}>Accept</Text>
                    </TouchableOpacity>
                </View>*/}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'grey',
    },
    acceptButton: {
        width: '40%',
        borderColor: '#DE0A1E',
        borderWidth: 1,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5,
        marginBottom: 30
    },
    declineButton: {
        width: '40%',
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5,
        marginBottom: 30
    }
});

export default PatientDetails;