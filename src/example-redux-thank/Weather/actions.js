
/**
 * 定义三个普通的action构造函数,驱动reducer函数去改变Redux Store上的weather字段
 */
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './axtionTypes.js'

export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
})

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchWeatherFailure = (error) => ({
  tyep: FETCH_FAILURE,
  error
})

export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    const url = '/data/cityinfo/${cityCode}.html'
    dispatch(fetchWeatherStarted())
    // 原生fetch获取数据
    fetch(url).then((response)=>{
      if(response.status !== 200){
        throw new Error('Fail to get response with status')
      }
      response.json().then((responseJson)=> {
        dispatch(fetchWeatherSuccess(responseJson.weatherinfo))
      }).catch((error) => {
        throw new Error('Invalid json response')
      })
    }).catch((error)=>{
      dispatch(fetchWeatherFailure(error))
    })
  }
}

