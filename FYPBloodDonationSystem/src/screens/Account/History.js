import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/Header";


const History = (props) => {
    const star = require('../../../assets/star_icon.png');

    const {title} = props.route.params;
    const donationData = [
        {
            key: 1,
            name: 'Ali Muhammad',
            location: 'Agha Khan Hospital',
            recieval_date: '02/03/2023',
            rating: '3',
            blood_group: 'O-'
        },
        {
            key: 2,
            name: 'Abdul Rafay',
            location: 'Jinah Hospital',
            recieval_date: '04/12/2022',
            rating: '4',
            blood_group: 'AB-'
        },
        {
            key: 3,
            name: 'Maaz Khan',
            location: 'Liaqat National Hospital',
            recieval_date: '05/10/2022',
            rating: '2',
            blood_group: 'B+'
        },
    ]
    const recievingData = [
        {
            key: 1,
            name: 'Behroz Khan',
            location: 'Jinnah Hospital',
            recieval_date: '02/12/2022',
            rating: '3',
            blood_group: 'B+'
        },
        {
            key: 2,
            name: 'Ali Shakeel',
            location: 'Liaqat National Hospital',
            recieval_date: '15/10/2022',
            rating: '1',
            blood_group: 'O-'
        },
        {
            key: 3,
            name: 'Areeba Liaqat',
            location: 'Jinnah Hospital',
            recieval_date: '03/09/2022',
            rating: '4',
            blood_group: 'A-'
        },
    ]

    const InfoBox = ({ data }) => (
        <View style={styles.box}>
            <View style={{ width: '85%' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{data.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 16 }}>Location: </Text>
                    <Text style={styles.text}>{data.location}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 16 }}>Receival Date: </Text>
                    <Text style={styles.text}>{data.recieval_date}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 16 }}>Rating: </Text>
                    <View style={{flexDirection: 'row'}}>{ratings(data.rating)}</View>
                </View>
            </View>
            <View style={{ width: '15%', alignItems: 'flex-end' }}>
                <View style={{ backgroundColor: '#DE0A1E', width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 3, paddingBottom: 3 }}>{data.blood_group}</Text>
                </View>
            </View>
        </View>
    );
    const ratings = (rating) => {
        let ratingArray = [];
        for (let i = 0; i < rating; i++) {
            ratingArray.push(
                <Image key={i} style={{width: 10, height: 10}} source={star} />
            );
          }
          return ratingArray;
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={title} isRed={true} navigation={props.navigation} />
            <View style={styles.innerContainer}>
                <View style={{ width: '85%', marginBottom: 100 }}>
                    <FlatList
                        data={title == 'Donation History' ? donationData : recievingData}
                        renderItem={({ item }) => <InfoBox data={item} />}
                        keyExtractor={(item) => item.key}
                        scrollEnabled={true}
                    />
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
    text: {
        color: 'black'
    },
    innerContainer: {
        paddingTop: 40,
        width: '100%',
        alignItems: 'center',
    },
    box: {
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        width: '100%',
    }
});

export default History;