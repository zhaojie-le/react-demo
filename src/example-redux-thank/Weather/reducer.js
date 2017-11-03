import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './axtionTypes.js'
import * as Status from './status.js'

export default (state = {status: Status.LOADING}, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return {status: Status.LOADING}
    }
    case FETCH_SUCCESS: {
      // 成功取到值后，修改state的值
      return {...state, status: Status.SUCCESS, ...action.result}
    }
    case FETCH_FAILURE: {
      return {status: Status.FAILURE}
    }
    default: {
      return state
    }
  }
}