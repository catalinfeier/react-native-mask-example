/**
 * Created by catalinfeier on 01/07/2017.
 */
/**
 * Created by catalinfeier on 01/07/2017.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import TouchComponent from './touchComponent';

export default class Mask extends Component {
  test(){
    console.log('kkk')
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableWithoutFeedback  onPress={this.props.onClose}>
          <View style={styles.background}/>
        </TouchableWithoutFeedback>
        <View style={{position: 'absolute', top: this.props.y, left: this.props.x}}>
          <TouchComponent active={true} id={this.props.id}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    backgroundColor: 'rgba(0, 0, 152, 0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

