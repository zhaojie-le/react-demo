import React, { Component } from 'react';
import Counter from './Counter'
const style = {
  margin: '20px'
}
class ControlPanel extends Component {
  constructor (props) {
    super(props)
    this.onCounterUpdata = this.onCounterUpdata.bind(this)
    this.initN = [0,10,20]
    const initSum = this.initN.reduce((a,b) => a + b, 0)

    this.state = {
      num: initSum
    }
  }

  onCounterUpdata (newValue,oldValue) {
    const valueChange = newValue - oldValue
    this.setState({num: this.state.num + valueChange})
  }

  render () {
    console.log('ControlPanel')
    return (
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdata} caption="First" initValue={this.initN[0]}></Counter>
        <Counter onUpdate={this.onCounterUpdata} caption="Second" initValue={this.initN[1]}></Counter>
        <Counter onUpdate={this.onCounterUpdata} caption="Third" initValue={this.initN[2]}></Counter>
        <div>total: {this.state.num}</div>
      </div>
    );
  }
}
export default ControlPanel