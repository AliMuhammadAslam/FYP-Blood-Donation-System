import React, { useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { MoreOrLess } from "@rntext/more-or-less";
import {
    BarChart,
    PieChart,
} from "react-native-chart-kit";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { BackgroundImage } from "@rneui/themed/dist/config";
import { useNavigation } from '@react-navigation/native';


const OrganisationInfo = ({ route }) => {

    const { docId } = route.params;

    const [info, setInfo] = useState();

    const navigation = useNavigation();

    useEffect(() => {

        // checkLocation();

        const requestRef = firestore().collection('users').doc(docId);

        requestRef.get().then((doc) => {
            if (doc.exists) {
                /*const userRef = firestore().collection('users').doc(doc.data().uid);
                userRef.get().then((userDoc) => {
                    if(userDoc.exists){
                        setDetails(userDoc.data());
                    }
                });*/
                setInfo(doc.data());
            } else {
                console.log('Document doesnot exist.');
            }
        }).catch((error) => {
            console.log('Error getting document:', error);
        });

    }, [docId]);

    //const hospital_image = require('../../../assets/IndusHospital.jpg');
    const hospital_image = require('../../../assets/IndusHospital.jpg');
    const star = require('../../../assets/star_icon.png');
    const data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [{
            data: [
                50,
                20,
                2,
                86,
                71,
                100
            ],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
        }, {
            data: [
                20,
                10,
                4,
                56,
                87,
                90
            ]
        }, {
            data: [
                30,
                90,
                67,
                54,
                10,
                2
            ]
        }]
    }
    const pieChart1Data = [
        { name: 'Karachi', population: 21500, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Lahore', population: 2800, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Islamabad', population: 1527, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Quetta', population: 8538, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Peshawar', population: 9020, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 12 }
    ]
    const pieChart2Data = [
        { name: 'Karachi', population: 18000, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Lahore', population: 5800, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Islamabad', population: 7527, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Quetta', population: 10538, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Peshawar', population: 10020, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 12 }
    ]
    return (

        <View style={{flex:1}}>

            {
                info ? <SafeAreaView style={styles.container}>

                    <ImageBackground style={{ height: 270, width: '100%', backgroundColor: 'green' }} resizeMode="cover" source={hospital_image}>
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesomeIcon icon={faArrowLeft} size={20} color='black' style={{ marginTop: 20, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <ScrollView style={{ width: '100%', padding: 15 }}>
                        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 26 }}>{info.name}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                    <Image style={{ width: 15, height: 15 }} source={star} />
                                    <Text style={styles.text}>4.5/5 Ratings</Text>
                                </View>
                            </View>
                            <FontAwesomeIcon icon={faPhone} size={30} color='#DE0A1E' />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ width: '70%' }}>
                                <Text style={{ color: 'grey', fontSize: 16 }}>{info.address}</Text>
                            </View>
                            <FontAwesomeIcon icon={faLocationDot} size={30} color='#DE0A1E' />
                        </View>
                        <MoreOrLess
                            numberOfLines={3}
                            textButtonStyle={{ color: 'lightblue' }}
                            animated
                            textStyle={{ color: 'grey' }}
                        >
                            {info.description}
                        </MoreOrLess>
                        <Text style={{ color: 'black', marginTop: 10, fontSize: 16, marginBottom: 10 }}>Donation and Recieving Statistics</Text>
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>

                            <PieChart
                                data={pieChart1Data}
                                height={160}
                                width={300}
                                chartConfig={{
                                    backgroundColor: '#26872a',
                                    backgroundGradientFrom: '#43a047',
                                    backgroundGradientTo: '#66bb6a',
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${0})`,
                                    style: {
                                        borderRadius: 16
                                    }
                                }}
                                accessor="population"
                                backgroundColor={"transparent"}
                                paddingLeft={"25"}
                                style={{
                                    marginVertical: 0,
                                    borderRadius: 16,
                                }}
                            />
                            <Text style={styles.text}>Blood Donation Statistics by City</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>

                            <BarChart
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16,
                                }}
                                data={data}
                                width={300}
                                height={230}
                                yAxisLabel=""
                                chartConfig={{
                                    backgroundColor: '#ffffff',
                                    backgroundGradientFrom: '#ffffff',
                                    backgroundGradientTo: '#ffffff',
                                    color: (opacity = 1) => `rgba(0, 1, 0, ${1})`
                                }}
                                verticalLabelRotation={50}
                            />
                            <Text style={styles.text}>Blood Donation Statistics by City</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 30 }}>

                            <PieChart
                                data={pieChart2Data}
                                height={160}
                                width={300}
                                chartConfig={{
                                    backgroundColor: '#26872a',
                                    backgroundGradientFrom: '#43a047',
                                    backgroundGradientTo: '#66bb6a',
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${0})`,
                                    style: {
                                        borderRadius: 16
                                    }
                                }}
                                accessor="population"
                                backgroundColor={"transparent"}
                                paddingLeft={"25"}
                                style={{
                                    marginVertical: 0,
                                    borderRadius: 16,
                                }}
                            />
                            <Text style={styles.text}>Blood Recieving Statistics by City</Text>
                        </View>

                    </ScrollView>

                    <TouchableOpacity onPress={ () => navigation.navigate('Application Form', {orgId: docId, orgName: info.name, orgAddress: info.address})} style={styles.button}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Register</Text>
                    </TouchableOpacity>

                </SafeAreaView>

                    :

                    <SafeAreaView style={styles.container}>
                        <Text>Loading...</Text>
                    </SafeAreaView>

            }

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'grey'
    },
    button: {
        width: '90%',
        backgroundColor: '#DE0A1E',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5,
        marginBottom: 30
    }
});

export default OrganisationInfo;