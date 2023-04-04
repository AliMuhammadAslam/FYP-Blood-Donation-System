import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const win = Dimensions.get('window');
const ratio = win.width/602;

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        require('../../assets/gif_1.png'),
        require('../../assets/gif_2.png'),
        require('../../assets/gif_3.png')
      ]
    };
  }

  render() {
    return (
      <Swiper>
        {this.state.images.map((image, index) => {
          return (
            <View key={index}>
              <Image source={image} style={styles.image} />
            </View>
          );
        })}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    //flex: 1,
    resizeMode: 'stretch',
    width: win.width,
    height: 576 * ratio,
  }
});

export default Slideshow;
