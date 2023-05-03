import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import Header from "../components/Header";


function Chat() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    
    
    return (
        <View>
            <Header title="Chat" isRed={true} />
        </View>
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
        // </View>
    );
    }

    const styles = StyleSheet.create({
    
});

export default Chat;