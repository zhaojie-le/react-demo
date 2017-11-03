// 将ActionTypes文件中导出的内容组合成一个对象ActionTypes返回
import * as ActionTypes from './ActionTypes.js'

export default (state, action) => {
  const {counterCaption} = action
  switch (action.type) {
    case ActionTypes.INCREMENT:
      // 创建一个新的newState,替换原有的state
      return {...state, [counterCaption]: state[counterCaption] + 1}
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1}
    default:
      return state
  }
}