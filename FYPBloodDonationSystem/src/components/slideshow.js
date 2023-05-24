import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
const Slideshow = () => {
  const slide1 = require('../../assets/slide1.jpg');
  const slide2 = require('../../assets/slide2.jpg');
  const slide3 = require('../../assets/slide3.jpg');
  const slide4 = require('../../assets/slide4.png');
  const slide5 = require('../../assets/slide5.jpg');

  const images = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
    { image: slide5 },
  ]

  return (
    <Swiper
      autoplay={true}
      showsPagination={false}
      autoplayTimeout={2.5}
    >
      {images.map((data, index) => {
        return (
            <Image source={data.image} style={styles.image} key={index} />
        );
      })}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  image: {
    // resizeMode: 'contain',
    width: '100%',
    height: '100%',    
    
  }
})

export default Slideshow;
