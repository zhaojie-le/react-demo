import React, { Component } from 'react';
//通过Component创建一个名为ClickCounter的子组件
class ClickCounter extends Component {
  constructor (props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {count: 0};
  }
  onClickButton () {
    this.setState({count: this.state.count + 1})
  }
  render () {
    const counterStyle = {
      margin: '20px'
    }
    return (
      <div style={counterStyle}>
        <button onClick={this.onClickButton}>点击</button>
        <div>点击次数：{this.state.count}</div>
      </div>
    );
  }
}
export default ClickCounter;