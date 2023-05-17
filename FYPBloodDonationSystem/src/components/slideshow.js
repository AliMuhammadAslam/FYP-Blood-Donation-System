import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Alert, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import TimedSlideshow from 'react-native-timed-slideshow';
import App from '../../App';
import Chat from '../screens/chat';
import Login from '../screens/login';
import tabNavigation from '../screens/tabNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faCancel, faCross, faX } from '@fortawesome/free-solid-svg-icons';

const win = Dimensions.get('window');
const ratio = win.width / 602;

function Slideshow() {
  const navigation = useNavigation();
    return (
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        <View style={styles.slide1}>
        <View style={{position:'absolute', right:15, top:20}}>
          <TouchableOpacity 
           onPress={() =>
            navigation.navigate('home')
          }>
            <FontAwesomeIcon icon={faX} size={20} color={"#DE0A1E"} />
          </TouchableOpacity>
          </View>
          <Text style={styles.text}>Add Image 1</Text>
          <Text style={styles.text}>with some text</Text>
        </View>
        <View style={styles.slide2}>
          <View style={{position:'absolute', right:15, top:20}}>
          <TouchableOpacity 
           onPress={() =>
            navigation.navigate('home')
          }>
            <FontAwesomeIcon icon={faX} size={20} color={"#DE0A1E"} />
          </TouchableOpacity>
          </View>
          <Text style={styles.text}>Add Image 2</Text>
          <Text style={styles.text}>with some text</Text>
        </View>
        <View style={styles.slide3}>
        <View style={{position:'absolute', right:15, top:20}}>
          <TouchableOpacity 
           onPress={() =>
            navigation.navigate('home')
          }>
            <FontAwesomeIcon icon={faX} size={20} color={"#DE0A1E"} />
          </TouchableOpacity>
          </View>
          <Text style={styles.text}>Add Image 3</Text>
          <Text style={styles.text}>with some text</Text>
        </View>
      </Swiper>
    );
}

// const styles = StyleSheet.create({
//   image: {
//     //flex: 1,
//     resizeMode: 'stretch',
//     width: win.width,
//     height: 576 * ratio,
//   }
// });

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default Slideshow;
