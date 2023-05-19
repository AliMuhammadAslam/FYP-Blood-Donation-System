import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import Header from "../components/Header";


function Notifications({navigation}) {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    
    
    return (
        <View>
            <Header title="Notifications" isRed={true} navigation={navigation} />
        </View>
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        // </View>
    );
    }

    const styles = StyleSheet.create({
    
});

export default Notifications;