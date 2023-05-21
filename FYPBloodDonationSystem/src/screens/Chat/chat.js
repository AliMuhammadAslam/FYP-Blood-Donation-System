import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList, SafeAreaView, StyleSheet, Button, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import Header from "../../components/Header";


const Chat = ({ navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };



    return (
        <View style={styles.container}>
            <Header title="Chat" isRed={true} navigation={navigation} />
            <Button title='Chat Screen' onPress={navigation.navigate('ChatScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Chat;