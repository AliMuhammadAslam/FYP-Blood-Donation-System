import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChalkboardTeacher, faMessage } from '@fortawesome/free-solid-svg-icons';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';

const ChatHeader = (props) => {
    // const navigation = useNavigation();
    const {title, isRed} = props;
    return(
        <View style={isRed ? stylesRed.container : stylesWhite.container}>
        
        <Text style={isRed ? stylesRed.title : stylesWhite.title}>{title}</Text>
        <TouchableOpacity style={stylesRed.chatButton} >
            
            <FontAwesomeIcon icon={faMessage} size={20} color={isRed ? "white" : "#DE0A1E"} />
            
        </TouchableOpacity>
        <View style={{ width: 30 }} />
      </View>
    );
}

const stylesWhite = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      height: 60,
      paddingHorizontal: 10,
    },
    backButton: {
      marginLeft: 10,
    },
    title: {
      fontSize: 18,
      flex: 1,
      textAlign: 'center',
      color: '#DE0A1E',
      fontWeight: 'bold',
    },
});
const stylesRed = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#DE0A1E',
      height: 60,
      paddingHorizontal: 10,
    },
    chatButton: {
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      flex: 1,
      textAlign: 'center',
      color: '#FFF',
      fontWeight: 'bold',
    },
});

export default ChatHeader;