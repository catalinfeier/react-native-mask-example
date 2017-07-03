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
  TouchableHighlight
} from 'react-native';
import Mask from './mask';
import TouchComponent from './touchComponent';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      maskVisible: false,
      maskParams: null,
    };
    this.hideMask = this.hideMask.bind(this);
    this.showMask = this.showMask.bind(this);
  }

  hideMask(){
    this.setState({
      maskVisible: false,
      anchor: null
    });
  }

  showMask(params){
    this.setState({
      maskVisible: true,
      maskParams: params
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchComponent onLongPress={this.showMask} id="1"/>
        <TouchComponent onLongPress={this.showMask} id="2"/>
        <TouchComponent onLongPress={this.showMask} id="3"/>
        <TouchComponent onLongPress={this.showMask} id="4"/>
        {
          this.state.maskVisible
            ? <Mask onClose={this.hideMask} {...this.state.maskParams}/>
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
});


