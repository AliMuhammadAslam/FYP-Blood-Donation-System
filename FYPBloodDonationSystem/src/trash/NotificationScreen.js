import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const NotificationScreen = () => {
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
    const iconName = item.read ? faCheckCircle : faCircle;
    const iconColor = item.read ? '#00b300' : '#ff4500';
    return (
      <TouchableOpacity
        onPress={() => handleReadNotification(item.id)}
        style={styles.notification}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={iconName} size={24} color={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <FontAwesomeIcon icon={faChevronRight} size={24} color="#808080" />
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = item => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Text style={styles.headerTitle}>Notifications</Text> */}
        <Header title="Notifications" isRed={true} />
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
  header: {
    height: 60,
    backgroundColor: '#b30000',
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
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: '#666',
  },
  arrowContainer: {
    marginLeft: 10,
  },
});

export default NotificationScreen;
