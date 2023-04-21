import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from "react-native-maps";
import checkLocation from "../components/Location";
import { MoreOrLess } from "@rntext/more-or-less";


const DonationRequestInfoPage = () => {
    const sample_image = require('../../assets/sample_image.jpg');
    const star = require('../../assets/star_icon.png');
    const blood_drop = require('../../assets/blood_drop.jpg');
    const [collapsed, setCollapsed] = useState(true);
    useEffect(() => {
        // checkLocation();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.backArrow}>
                <Text style={styles.text}>back</Text>
            </View> */}
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={styles.infoContainer}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                        <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={sample_image} />
                        <View>
                            <Text style={{ color: 'black', fontSize: 20 }}>Zulfiqar Khan</Text>
                            <Text style={styles.text}>PECHS Block , Karachi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                <Image style={{ width: 15, height: 15 }} source={star} />
                                <Text style={styles.text}>4.5/5 Ratings</Text>
                            </View>
                        </View>
                        <ImageBackground style={{ width: 50, height: 70, alignItems: 'center', justifyContent: 'center' }} source={blood_drop}>
                            <Text style={{ color: 'white', fontSize: 28, paddingTop: 15 }}>O-</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Donation Details</Text>
                        <Text style={styles.text}>Liaqat National Hospital</Text>
                        <Text style={styles.text}>Agha Khan Road, Karachi</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text}>Time: </Text>
                            <Text style={styles.text}>04:00 pm 12 Jan 2023</Text>
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
                            PageMaker including versions of Lorem.
                        </MoreOrLess>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 22, color: 'white'}}>Donate Now</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    // backArrow: {
    //     ...StyleSheet.absoluteFillObject,
    //     width: 50,
    //     height: 50,
    //     backgroundColor: 'black'
    // },
    text: {
        color: 'black',
    },
    mapContainer: {
        width: '100%',
        height: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
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