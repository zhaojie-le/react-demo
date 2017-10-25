
import AppDispatcher from '../AppDispatcher.js'
import * as ActionTypes from '../ActionTypes.js'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'changed'

const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 30
}
/**
 * CounterStore扩展了EventEmitter.prototype，CounterStore成了EventEmitter对象
 */
const CounterStore = Object.assign({}, EventEmitter.prototype, {

  getCounterValue: function () {
    return counterValues
  },
  /**
   * EventEmitter实例支持的相关函数：
   * emit 函数，广播一个特定事件，第一个参数是字符串类型的事件名称
   * on 函数，增加挂在实例上的处理函数，第一个参数是字符串类型的事件名称，第二个参数是处理函数
   * removeListener, 同on相反，删除挂在实例上的处理函数
   */

  //  状态更新的广播
  emitChange: function () {
    this.emitChange(CHANGE_EVENT)
  },
  // 添加监听函数
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  // 删除监听函数
  removeChangeListener: function (callback) {
    this.removeChangeListener(CHANGE_EVENT, callback)
  }
})
/**
 * 把CounterStore注册到全局唯一的Dispatcher上
 */
CounterStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption] ++
    CounterStore.emitChange()
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption] --
    CounterStore.emitChange()
  }
})