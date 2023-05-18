import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeHeader';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot, faDroplet } from '@fortawesome/free-solid-svg-icons';


const HomeScreen = ({ navigation }) => {
    const blood_bank_icon = require('../../../assets/bloodbank.png');
    const emergency_donor = require('../../../assets/emergencydonor.png');
    const post_request = require('../../../assets/envelope.png');
    const blood_drop = require('../../../assets/blood_drop.jpg')

    const HomeBoxData = [
        { icon: <Image style={{ width: 65, height: 55, marginTop: 10 }} source={post_request} />, title: 'Post Blood Request', route: 'CreateRequest' },
        { icon: <Image style={{ width: 70, height: 90, }} source={blood_bank_icon} />, title: 'Blood Bank', route: 'Account' },
        { icon: <Image style={{ width: 55, height: 60, marginTop: 10 }} source={emergency_donor} />, title: 'Emergency Donors', route: 'Account' }
    ]
    const BloodDonationStats = [
        { blood_grp: 'A+', demand: 10000, icon: blood_drop },
        { blood_grp: 'O+', demand: 1000, icon: blood_drop },
        { blood_grp: 'B+', demand: 10500, icon: blood_drop },
        { blood_grp: 'AB+', demand: 10000, icon: blood_drop },
        { blood_grp: 'A-', demand: 2000, icon: blood_drop },
        { blood_grp: 'O-', demand: 1000, icon: blood_drop },
        { blood_grp: 'B-', demand: 100, icon: blood_drop },
        { blood_grp: 'AB-', demand: 700, icon: blood_drop },
    ]
    const RequestData = [
        { Name: 'Zulfiqar Khan', Address: 'Agha Khan Hospital Karachi', Blood_grp: 'O-'},
        { Name: 'Zulfiqar Khan', Address: 'Agha Khan Hospital Karachi', Blood_grp: 'O-'},
        { Name: 'Zulfiqar Khan', Address: 'Agha Khan Hospital Karachi', Blood_grp: 'O-'},
        { Name: 'Zulfiqar Khan', Address: 'Agha Khan Hospital Karachi', Blood_grp: 'O-'},
        { Name: 'Zulfiqar Khan', Address: 'Agha Khan Hospital Karachi', Blood_grp: 'O-'}
    ]
    const BloodStatDrop = ({ blood_grp, demand, icon }) => {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={{}}>
                    <Image style={{ width: 35, height: 45 }} source={icon} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 14, color: '#353535', textAlign: 'center' }}>{blood_grp}</Text>
                </View>
            </View>
        );
    }

    const HomeBox = ({ icon, title, route }) => {
        return (
            <TouchableOpacity style={{
                height: 120,
                flex: 1,
                borderColor: '#B6B6B6',
                borderWidth: 1,
                alignItems: 'center',
                borderRadius: 10,
            }}
                onPress={() => { navigation.navigate(route) }}
            >
                <View style={{ height: 80 }}>
                    {icon}
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, paddingBottom: 2, width: '100%' }}>
                    <Text style={{ fontSize: 14, color: '#353535', textAlign: 'center' }}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    const RequestBox = ({data}) => {
        return (
            <View style={{ borderRadius: 10, borderColor: '#B6B6B6', borderWidth: 1, padding: 10, marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View>
                        <Text style={{ fontWeight: 600, fontSize: 20, color: '#353535' }}>{data.Name}</Text>
                        <Text style={{ paddingVertical: 3, color: '#969696' }}>{data.Address}</Text>
                    </View>
                    <View style={{  }}>
                        <FontAwesomeIcon icon={faDroplet} size={45} color="#DE0A1E" />
                        <Text style={{ color: 'white', position: 'absolute', right: 14, marginTop: 14, fontWeight: 'bold', fontSize: 16 }}>{data.Blood_grp}</Text>
                    </View>
                </View>
                <View style={{ margin: 2, marginTop: 4, flex: 1, height: 1, backgroundColor: '#B6B6B6' }} />
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%'}}>
                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'white', borderRadius: 10, paddingVertical: 8, width: '50%' }}>
                        <Text style={{ fontSize: 17, color: '#8C8C8C', }}>Decline</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 10, height: '100%', width: 1, backgroundColor: '#8C8C8C' }} />
                    <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center', backgroundColor: '#00000000', borderRadius: 3, paddingVertical: 8, width: '50%' }}>
                        <Text style={{ fontSize: 17, color: '#DE0A1E' }}>Donate Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader title="Hello! Rafay" navigation={navigation} />
            <View style={{ marginTop: 6, alignItems: 'center', width: '100%', paddingHorizontal: 12, flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.headingText}>Are You Looking for Blood?</Text>
                </View>
                <View style={styles.boxRow}>
                    {HomeBoxData.map((data) => <HomeBox icon={data.icon} title={data.title} route={data.route} />)}
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.bloodStatsContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 5, alignItems: 'center' }}>
                            <Text style={{ color: '#353535' }}>Blood Needed</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faLocationDot} size={13} color='#969696' />
                                <Text style={{ color: '#969696' }}>Karachi</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bloodStatsRow}>
                            {BloodDonationStats.map((data) => <BloodStatDrop blood_grp={data.blood_grp} demand={data.demand} icon={data.icon} />)}
                        </View>
                    </View>
                    <View style={styles.donationReqsContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 5, alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ color: '#353535', fontSize: 18 }}>Donation Requests</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#969696', fontSize: 12 }}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        {RequestData.map((data) => <RequestBox data={data} />)}
                        <View style={{height: 55}}></View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headingText: {
        color: 'black',
        fontSize: 18
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 180,
        backgroundColor: 'lightblue'
    },
    boxRow: {
        marginTop: 15,
        flexDirection: 'row',
        width: '100%',
        gap: 10
    },
    scrollView: {
        width: '100%'
    },
    bloodStatsContainer: {
        height: 100,
        marginTop: 10,
        borderColor: '#B6B6B6',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
    },
    bloodStatsRow: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 8
    },
    donationReqsContainer: {
        width: '100%',
        marginTop: 10,
    }
});

export default HomeScreen;