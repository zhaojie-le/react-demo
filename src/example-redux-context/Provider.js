import { Component } from 'react';

import PropTypes from 'prop-types'
/**
 * 
 * 简单的把子组件渲染出来，其余不做任何附加事情
 * @class Provider
 * @extends {Component}
 */
class Provider extends Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }
  /**
   * this.props.children 代表Provider内部的子组件
   */
  render(){
    return this.props.children
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired
}

Provider.childContextTypes = {
  store: PropTypes.object
}

export default Provider