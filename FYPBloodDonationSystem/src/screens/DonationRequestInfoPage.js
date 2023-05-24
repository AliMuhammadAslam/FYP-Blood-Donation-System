import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header";
import checkLocation from "../components/Location";
import { MoreOrLess } from "@rntext/more-or-less";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import MapView, { Polyline, Marker, Circle } from 'react-native-maps';


const DonationRequestInfoPage = ({ route, navigation }) => {

    const { docId } = route.params.docId;

    // const navigation = useNavigation();

    const sample_image = require('../../assets/sample_image.jpg');
    const star = require('../../assets/star_icon.png');
    const blood_drop = require('../../assets/blood_drop.jpg');
    const [collapsed, setCollapsed] = useState(true);

    const [request, setRequest] = useState();
    const [userDetails, setDetails] = useState();
    const [reqID, setReqId] = useState();

    useEffect(() => {

        // checkLocation();

        const requestRef = firestore().collection('requests').doc(docId);

        requestRef.get().then((doc) => {
            if (doc.exists) {
                setReqId(doc.id);
                const userRef = firestore().collection('users').doc(doc.data().uid);
                userRef.get().then((userDoc) => {
                    if (userDoc.exists) {
                        setDetails(userDoc.data());
                    }
                });
                setRequest(doc.data());
            } else {
                console.log('Document doesnot exist.');
            }
        }).catch((error) => {
            console.log('Error getting document:', error);
        });

    }, [docId]);


    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map}
                region={{
                    latitude: 24.891975,
                    longitude: 67.072861,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{latitude: 24.891975, longitude: 67.072861}}/>
            </MapView>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }}>
                <FontAwesomeIcon icon={faArrowLeft} size={22} color='black' style={{ marginTop: -340, marginLeft: 10 }} />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                {request && userDetails ? (

                <ScrollView>
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={sample_image} />
                        <View>
                            <Text style={{ color: 'black', fontSize: 20 }}>{request.userName}</Text>
                            <Text style={styles.text}>{userDetails.address}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                <Image style={{ width: 15, height: 15 }} source={star} />
                                <Text style={styles.text}>4.5/5 Ratings</Text>
                            </View>
                        </View>
                        <ImageBackground style={{ width: 50, height: 70, alignItems: 'center', justifyContent: 'center' }} source={blood_drop}>
                            <Text style={{ color: 'white', fontSize: 28, paddingTop: 15 }}>{request.bloodType}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Donation Details</Text>
                        <Text style={styles.text}>{request.hospitalName}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text}>Request Expiry Date: </Text>
                            <Text style={styles.text}>{request.expiryDate.toLocaleDateString()}</Text>
                        </View>
                        <MoreOrLess
                            numberOfLines={3}
                            textButtonStyle={{ color: 'lightblue' }}
                            animated
                            textStyle={{ color: 'black' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem.{request.notes}
                        </MoreOrLess>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Create Appointment', { reqId: reqID, receiverName: request.userName, receiverId: request.uid, hospital: request.hospitalName, bloodType: request.bloodType, maxDateLimit: request.expiryDate.toDate().toISOString() })}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Create An Appointment</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10 }}></View>
                </ScrollView>

                 ) : (

                    <Text style={{color: 'black'}}>Loading...</Text>

                )}

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    text: {
        color: 'black',
    },
    mapContainer: {
        width: '100%',
        height: '100%',
    },
    map: {
        width: '100%',
        height: '47.5%',
    },
    infoContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '45%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20
    },
    button: {
        backgroundColor: '#DE0A1E',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5
    }
});

export default DonationRequestInfoPage;