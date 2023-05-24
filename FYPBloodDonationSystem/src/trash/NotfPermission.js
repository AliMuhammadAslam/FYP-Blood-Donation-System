import React, {Component} from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect } from 'react';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';


// const requestNotificationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_NOTIFICATION_POLICY,
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the Notification');
//       } else {
//         console.log('Notification permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

const requestNotificationPermission = async () => {

    console.log('requestNotificationPermission');
    try {
      const granted = await PermissionsAndroid.request(

        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION,
        {
        //   title: 'Cool Photo App Camera Permission',
        //   message:
        //     'Cool Photo App needs access to your camera ' +
        //     'so you can take awesome pictures.',
        //   buttonNeutral: 'Ask Me Later',
        //   buttonNegative: 'Cancel',
        //   buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Noftification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  
    const NotfPermission = () => {
        
        useEffect(() => {
            requestNotificationPermission();
          }, []);
    }
    export default NotfPermission;