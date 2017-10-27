/**
 * Action.js用来定义action的构造函数
 */

import * as ActionTypes from './ActionTypes.js'
import AppDispatcher from './AppDispatcher.js'
// 引入AppDispatcher对象，用来派发action
export const increment = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  })
}

export const decrement = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  })
}