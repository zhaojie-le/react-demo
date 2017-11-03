import * as ActionTypes from './ActionTypes.js'

// 返回一个对象，把这个对象中执行动作交给调用者
export const increment = (counterCaption) => {
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  }
}

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  }
}