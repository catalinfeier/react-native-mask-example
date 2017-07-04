
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Mask extends Component {

  render() {
    const background = StyleSheet.flatten( [styles.container, this.props.background]);
    return (
      <View style={styles.container} >
        <TouchableWithoutFeedback  onPress={this.props.onClose}>
          <View style={background}/>
        </TouchableWithoutFeedback>
        <View style={{position: 'absolute', top: this.props.y, left: this.props.x}}>
          {this.props.children}
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
});

