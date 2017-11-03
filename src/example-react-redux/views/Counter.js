import React from 'react';
// 官网资料引入方法
import PropTypes from 'prop-types';
import * as Actions from '../Actions.js'
// import store from '../Store.js'
// react-redux
import {connect} from 'react-redux'

function Counter ({caption, onIncrement, onDecrement, value}) {
  const buttonStyle = {
    background: '#f1f2f6',
    margin: '10px'
  }
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

/**
 * 把Store上的状态转化为内层组件的props，实质上是一个映射关系
 * 
 * @param {any} state 
 * @param {any} ownProps 直接传递给外层容器组件的props
 * @returns 
 */
function mapStateToProps(state,ownProps){
  return {
    value: state[ownProps.caption]
  }
}
/**
 * 把内层傻瓜组件中用户动作转化为派送给Store的动作，也就是把内层傻瓜组件暴露出来的函数类型
 * 的prop关联上dispatch函数的调用
 * @param {any} dispatch 
 * @param {any} ownProps 
 * @returns 
 */
function mapDispatchToProps(dispatch,ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Counter)