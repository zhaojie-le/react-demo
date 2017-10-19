import React, { Component } from 'react';
import Counter from './Counter'
const style = {
  margin: '20px'
}
class ControlPanel extends Component {
  render () {
    console.log('ControlPanel')
    return (
      <div style={style}>
        <Counter></Counter>
      </div>
    );
  }
}
export default ControlPanel