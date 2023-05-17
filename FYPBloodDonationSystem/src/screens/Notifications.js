import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Notifications = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'New message', message: 'You have a new message from John', read: false },
        { id: 2, title: 'New follower', message: 'You have a new follower on Twitter', read: false },
        { id: 3, title: 'New order', message: 'You have a new order from Amazon', read: true },
        { id: 4, title: 'New comment', message: 'You have a new comment on your post', read: true },
        { id: 5, title: 'New friend request', message: 'You have a new friend request from Jane', read: false },
    ]);

    const handleReadNotification = (id) => {
        const updatedNotifications = notifications.map(notification => {
            if (notification.id === id) {
                return { ...notification, read: true };
            }
            return notification;
        });
        setNotifications(updatedNotifications);
    };

    const renderItem = ({ item }) => {
        const iconName = item.read ? 'check-circle' : 'circle';
        const iconColor = item.read ? '#00b300' : '#ff4500';
        return (
            <TouchableOpacity
                onPress={() => handleReadNotification(item.id)}
                style={styles.notification}>
                <View style={styles.iconContainer}>
                    <Icon name={iconName} size={24} color={iconColor} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Icon name="chevron-right" size={24} color="#808080" />
                </View>
            </TouchableOpacity>
        );
    };

    const keyExtractor = item => item.id.toString();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        height: 60,
        backgroundColor: '#ff4500',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    iconContainer: {
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    message: {
        fontSize: 16,
        color: '#666',
    },
    arrowContainer: {
        marginLeft: 10,
    },
});

export default Notifications;