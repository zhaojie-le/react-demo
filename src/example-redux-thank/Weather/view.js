import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Status from './status.js';

const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
  switch (status) {
    case Status.LOADING: {
      return <div>天气信息加载中...</div>
    }
    case Status.SUCCESS: {
      return (
        <div>
          {cityName}{weather}最低气温{lowestTemp} 最高气温{highestTemp}
        </div>
      )
    }
    case Status.FAILURE: {
      return (
        <div>天气信息加载失败</div>
      )
    }
    default: {
      throw new Error('unexpected status' + status)
    }
  }
}

Weather.PropTypes = {
  status: PropTypes.string.isRequired,
  cityName: PropTypes.string,
  weather: PropTypes.string,
  lowestTemp: PropTypes.string,
  highestTemp: PropTypes.string
}