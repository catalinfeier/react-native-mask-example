import React, { Component } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  findNodeHandle,
  UIManager
} from 'react-native';

export default class TouchComponent extends Component {
  constructor(){
    super();
    this.onLongPress = this.onLongPress.bind(this);
  }

  componentDidMount() {
    console.log("TouchComponentDidMount",this.props.id);
  }

  componentWillUnmount() {
    console.log("TouchComponentWillUnmount", this.props.id);
  }

  onLongPress(e) {
    if (!this.props.active) {
      UIManager.measure(
        findNodeHandle(this),
        (x, y, width, height) => {
          this.props.onLongPress({
            x: x,
            y: y,
            id: this.props.id,
          })
        }
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onLongPress={this.onLongPress}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://www.planet-react.org/images/feeds/_default.png'}}
        />
      </TouchableWithoutFeedback>
    );
  }
}
