import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const MyNotifications = () => {
  const [notifications, setNotifications] = useState([
    /*{ id: 1, title: 'New message', message: 'You have a new message from John', read: false },
    { id: 2, title: 'New follower', message: 'You have a new follower on Twitter', read: false },
    { id: 3, title: 'New order', message: 'You have a new order from Amazon', read: true },
    { id: 4, title: 'New comment', message: 'You have a new comment on your post', read: true },
    { id: 5, title: 'New friend request', message: 'You have a new friend request from Jane', read: false },*/
  ]);

  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    
    const NotificationsRef = firestore().collection('notifications');
    const unsubscribe = NotificationsRef.onSnapshot((querySnapshot) => {
    const data = [];
    var message;
    querySnapshot.forEach((doc) => {
        if(doc.data().type == 'Appointment Confirmed'){
            if(auth().currentUser.uid == doc.data().donorId){
                message = "Your appointment with " + doc.data().receiverName + " has been confimed for " + doc.data().appointmentDate.toDate().toLocaleDateString()
                data.push({
                    id: doc.id,
                    title: doc.data().type,
                    name: doc.data().receiverName,
                    appointmentDate: doc.data().appointmentDate,
                    message: message,
                    read: doc.data().read,
                    time: doc.data().postedAt
                });

            }
        }
        else if(doc.data().type == 'Appointment Request Declined'){

            if(auth().currentUser.uid == doc.data().donorId){
                message = "Your appointment request for " + doc.data().appointmentDate.toDate().toLocaleDateString() + " has been declined by " + doc.data().receiverName
                data.push({
                    id: doc.id,
                    title: doc.data().type,
                    name: doc.data().receiverName,
                    appointmentDate: doc.data().appointmentDate,
                    message: message,
                    read: doc.data().read,
                    time: doc.data().postedAt
                });

            }


        }
        else if(doc.data().type == 'New Appointment Request'){

            if(auth().currentUser.uid == doc.data().receiverId){
                message = "You have a new appointment request for " + doc.data().appointmentDate.toDate().toLocaleDateString() + " sent by " + doc.data().donorName
                data.push({
                    id: doc.id,
                    title: doc.data().type,
                    name: doc.data().receiverName,
                    appointmentDate: doc.data().appointmentDate,
                    message: message,
                    read: doc.data().read,
                    time: doc.data().postedAt
                });

            }


        }
        
    });
    setNotifications(data);
    setIsLoading(false);
    });

    return () => {
      // Unsubscribe from the listener when the component is unmounted or when the user logs out
      unsubscribe();
    };
    
  }, []);

  const handleReadNotification = async (id) => {
    const updatedNotifications = notifications.map(async notification => {
      if (notification.id === id) {
        if(notification.read === false){
            console.log('1');
            const notificationsRef = firestore().collection('notifications').doc(id);
            await notificationsRef.update({read: true});
            console.log('Request updated successfully!');
            return { ...notification, read: true };
        }
        else{
            return {...notification};
        }
      }
      return {...notification};
    });
    const updatedNotificationsWithData = await Promise.all(updatedNotifications);

    setNotifications(updatedNotificationsWithData);
  };

  const renderItem = ({ item }) => {
    const iconName = item.read ? faCheckCircle : faCircle;
    const iconColor = item.read ? '#00b300' : '#ff4500';

    const options = {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formattedDate = item.time.toDate().toLocaleString('en-US', options);

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
          <Text style={styles.time}>{formattedDate}</Text>
        </View>
        {/*<View style={styles.arrowContainer}>
          <FontAwesomeIcon icon={faChevronRight} size={24} color="#808080" />
        </View>*/}
      </TouchableOpacity>
    );
  };

  //const keyExtractor = item => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Text style={styles.headerTitle}>Notifications</Text> */}
        <Header title="Notifications" isRed={true} navigation={navigation}/>
      </View>

       {isLoading ? 
       
        <Text>Loading...</Text>

        :

        <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    
       }

      
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
  time: {
    fontSize: 12,
    color: '#999',
  },
  arrowContainer: {
    marginLeft: 10,
  },
});

export default MyNotifications;