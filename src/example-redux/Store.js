import {createStore} from 'redux'
import reducer from './Reducer.js'

const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
}
/**
 * reducer 代表更新状态的reducer，第二个参数是状态的初始值
 */
const store = createStore(reducer, initValues)

export default store