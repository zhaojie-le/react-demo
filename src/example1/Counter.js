import React, { Component } from 'react';
// 官网资料引入方法
import PropTypes from 'prop-types';
class Counter extends Component {
  constructor (props) {
    super(props);
    // 定义事件需要在构造函数中绑定this
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    // 定义组件内变量
    this.state = {
      count: props.initValue || 0
    }
  }

  onClickIncrementButton () {
    // this.setState({count: this.state.count + 1})
    this.updataCount(true)
  }

  updataCount (isIncrement) {
    const oldValue = this.state.count
    const newValue = isIncrement ? oldValue + 1 : oldValue - 1
    this.setState({count: newValue})
    // 向父组件通信函数，传递参数
    this.props.onUpdate(newValue, oldValue)
  }

  onClickDecrementButton () {
    // if (this.state.count > 0){
    //   this.setState({count: this.state.count - 1})
    // }
    this.updataCount(false)
  }


  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps'+ this.props.caption)
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
  initValue: PropTypes.number || 0,
  onUpdate: PropTypes.func
}
Counter.defaultProps = {
  initValue: 0,
  // 父子组件通信函数
  onUpdate: f => f   // 默认是一个什么都不做的函数
}
export default Counter