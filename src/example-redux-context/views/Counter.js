import React, { Component } from 'react';
// 官网资料引入方法
import PropTypes from 'prop-types';

import store from '../Store.js'
import * as Actions from '../Actions.js'

function Counter (props) {
  const buttonStyle = {
    background: '#f1f2f6',
    margin: '10px'
  }
  const {caption, onIncrement, onDecrement, value} = props
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  )
}

class CounterContainer extends Component {
  constructor (props, context) {
    /**
     * 调用super的时候，需要带上context参数，这样才能让React组件初始化实例中的context
     * context相当于提供了一个全局可以访问的对象，使用中，只对那些子组件都可能使用，但是中间组件又可能不使用的情况
     */
    super(props, context);
    /**
     * 针对普通的函数定义
     * 若不绑定onChange到实例中，则会报错Cannot read property 'setState' of undefined
     * 若箭头函数定义，则不需要再绑定this
     */
    //this.onChange = this.onChange.bind(this)

    // 初始组件内变量
    this.state = this.getOwnState()
  }
  /**
   * store.getState()获取store上存储的状态
   * @returns 状态的部分数据
   */
  getOwnState () {
    return {
      value: this.context.store.getState()[this.props.caption]
    }
  }
  /**
   * 执行加法按钮
   * 想要修改store中的状态，改变store中的状态唯一方法就是派发action
   */
  onIncrement = () => {
    store.dispatch(Actions.increment(this.props.caption))
  }

 /**
  * 执行加法事件，箭头函数会直接将this绑定到调用的上下文中，不需要再单独的绑定this
  */
  onDecrement = () => {
    store.dispatch(Actions.decrement(this.props.caption))
  }
  /**
   * 保存store上的状态与this.state同步
   */
  onChange = () => {
    this.setState(this.getOwnState())
  }
  // DOM渲染完成后，获取数据
  componentDidMount(){
    /**
     * store.subscribe监听其变化，只要Store状态发生变化，就会调用onChange方法
     */
    store.subscribe(this.onChange)
  }
  componentWillUnmount(){
    /**
     * 对应componentDidMount中的监听函数，注销监听
     */
    store.unsubscribe(this.onChange)
  }
  /**
   * 
   * @param {any} nextProps 改变之后的Props
   * @param {any} nextState 改变之后的State
   * @returns 布尔类型，决定组件的重新渲染
   * @memberof Counter
   * @memberof this.props/this.state 都是改变之前的状态
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) || 
    (nextState.value !== this.state.value)
  } 

  render () {
    return (
     <Counter 
     caption={this.props.caption}
     onIncrement={this.onIncrement}
     onDecrement={this.onDecrement}
     value={this.state.value}
     />
    );
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
}

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default CounterContainer