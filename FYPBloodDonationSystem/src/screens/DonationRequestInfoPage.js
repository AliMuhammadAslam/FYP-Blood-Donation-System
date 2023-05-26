import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header";
import checkLocation from "../components/Location";
import { MoreOrLess } from "@rntext/more-or-less";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import MapView, { Marker } from 'react-native-maps';


const DonationRequestInfoPage = ({ route, navigation }) => {

    const { docId } = route.params;

    const sample_image = require('../../assets/sample_image.jpg');
    const star = require('../../assets/star_icon.png');
    const blood_drop = require('../../assets/blood_drop.jpg');
    const [collapsed, setCollapsed] = useState(true);

    const [request, setRequest] = useState();
    const [userDetails, setDetails] = useState();
    const [reqID, setReqId] = useState();

    useEffect(() => {
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
            <TouchableOpacity style={{ top: -380, marginLeft: 15, marginTop: -25}} onPress={() => {
                navigation.goBack();
            }}>
                <FontAwesomeIcon icon={faArrowLeft} size={22} color='black' />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                {request && userDetails ? (

                <ScrollView>
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={{ uri: userDetails.image}} />
                        <View>
                            <Text style={{ color: '#353535', fontSize: 20 }}>{request.userName}</Text>
                            <Text style={styles.text}>{userDetails.address}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                <Image style={{ width: 15, height: 15 }} source={star} />
                                <Text style={{color: '#969696', fontSize: 12}}>4.5/5 Ratings</Text>
                            </View>
                        </View>
                        <ImageBackground style={{ width: 40, height: 60, alignItems: 'center', justifyContent: 'center' }} source={blood_drop}>
                            <Text style={{ color: 'white', fontSize: 24, paddingTop: 15 }}>{request.bloodType}</Text>
                        </ImageBackground>
                        <TouchableOpacity style={styles.chatButton} onPress={ () => navigation.navigate("ChatScreen", {name: request.userName, id:request.uid})}>
                        
                        <FontAwesomeIcon icon={faMessage} size={22} color={"#DE0A1E"} />
                    </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Donation Details</Text>
                        <Text style={styles.text}>{request.hospitalName}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                            <Text style={styles.text}>Request Expiry Date: </Text>
                            <Text style={styles.text}>{request.expiryDate.toDate().toLocaleDateString()}</Text>
                        </View>
                        <MoreOrLess
                            numberOfLines={3}
                            textButtonStyle={{ color: '#DE0A1E' }}
                            animated
                            textStyle={{ color: '#353535' }}
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
                    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Create Appointment', {reqId: reqID, receiverName: request.userName, receiverId: request.uid , hospital: request.hospitalName, bloodType: request.bloodType, maxDateLimit: request.expiryDate.toDate().toISOString()})}>
                        <Text style={{fontSize: 22, color: 'white', paddingHorizontal: 20}}>Create An Appointment</Text>
                    </TouchableOpacity>
                    
                    <View style={{height: 60}}></View>
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
        justifyContent: 'flex-end',

    },
    text: {
        color: '#353535',
    },
    mapContainer: {
        width: '100%',
        height: '100%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '45%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingHorizontal: 20        
    },
    button: {
        backgroundColor: '#DE0A1E',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5
    },
    chatButton: {
        top: -15,
    }
});

export default DonationRequestInfoPage;