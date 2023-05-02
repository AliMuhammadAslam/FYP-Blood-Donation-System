import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {

    const {title, isRed} = props;
    return(
        <View style={isRed ? stylesRed.container : stylesWhite.container}>
        <TouchableOpacity style={stylesRed.backButton}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color={isRed ? "white" : "#DE0A1E"} />
        </TouchableOpacity>
        <Text style={isRed ? stylesRed.title : stylesWhite.title}>{title}</Text>
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
      fontSize: 22,
      flex: 1,
      textAlign: 'center',
      color: '#DE0A1E',
      fontWeight: '600',
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
    backButton: {
      marginLeft: 10,
    },
    title: {
      fontSize: 18,
      flex: 1,
      textAlign: 'center',
      color: '#FFF',
      fontWeight: 'bold',
    },
});

export default Header;