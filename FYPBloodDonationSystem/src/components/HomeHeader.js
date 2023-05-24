import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowAltCircleDown, faBell } from "@fortawesome/free-solid-svg-icons";
//import { faBell } from '@fortawesome/free-regular-svg-icons';


const HomeHeader = (props) => {

    const { title, navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.bellIcon} onPress={() => {
                navigation.navigate('Notifications');
            }}>
                {/* <FontAwesomeIcon icon={faBell} size={26} color='black' /> */}
                <View style={{
                    width: 18, height: 18, backgroundColor: '#DE0A1E', borderRadius: 10, left: -12, top: -3
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', color: 'white' }}>3</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 60,
        paddingHorizontal: 12,
    },
    bellIcon: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        flex: 1,
        color: '#353535',
        fontWeight: 600,
    },
});

export default HomeHeader;