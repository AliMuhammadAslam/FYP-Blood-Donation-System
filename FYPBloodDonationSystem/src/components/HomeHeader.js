import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faRightFromBracket, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import auth from '@react-native-firebase/auth';

const HomeHeader = (props) => {

    const { title, isOrgHeader, navigation } = props;
    const userLogout = async () => {
        try {
          await auth().signOut();
          Alert.alert("You have been successfully logged out.");
          navigation.navigate('Authentication');
        }
        catch (error) {
          console.log(error.code);
          Alert.alert(error.code);
        }
      }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {isOrgHeader ? (
                <TouchableOpacity style={styles.bellIcon} onPress={userLogout}>
                    <FontAwesomeIcon icon={faPowerOff} size={22} color='#353535' />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.bellIcon} onPress={() => {
                    navigation.navigate('Notifications');
                }}>
                    <FontAwesomeIcon icon={faBell} size={26} color='black' />
                    <View style={{
                        width: 18, height: 18, backgroundColor: '#DE0A1E', borderRadius: 10, left: -12, top: -3
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', color: 'white' }}>1</Text>
                    </View>
                </TouchableOpacity>
            )}
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
        fontSize: 22,
        flex: 1,
        color: '#353535',
        fontWeight: 600,
    },
});

export default HomeHeader;