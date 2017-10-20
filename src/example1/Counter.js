import React, { Component } from 'react';
// 官网资料引入方法
import PropTypes from 'prop-types';
class Counter extends Component {
  constructor (props) {
    super(props)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
    this.state = {
      count: props.initValue || 0
    }
  }

  onClickIncrementButton () {
    this.setState({count: this.state.count + 1})
  }

  render () {
    const {caption} = this.props
    const buttonStyle = {
      background: '#f1f2f6',
      margin: '10px'
    }
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}
Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
}
export default Counter