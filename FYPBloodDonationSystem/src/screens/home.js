import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import ChatHeader from "../components/ChatHeader";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function Home() {

    const navigation = useNavigation();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    
    
    return (
        <View>
            <ChatHeader 
            //title="Home" 
            isRed={true} />
            <Text style={{color:'black'}}>This is user home -- home.js </Text>
        </View>
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        // </View>
    );
    }

    const styles = StyleSheet.create({
    
});

export default Home;