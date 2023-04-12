import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';



function Settings() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
    }

    const styles = StyleSheet.create({
    
});

export default Settings;