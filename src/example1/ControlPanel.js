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
        <Counter caption="First" initValue={0}></Counter>
        <Counter caption="Second" initValue={10}></Counter>
        <Counter caption="Third" initValue={20}></Counter>
      </div>
    );
  }
}
export default ControlPanel