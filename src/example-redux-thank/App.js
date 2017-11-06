import React, {Component} from 'react'
import {view as CitySelector} from './citySelector/'
import {view as Weather} from './Weather/'

class App extends Component {
  render() {
    return (
      <div>
        <CitySelector />
        <Weather />
      </div>
    )
  }
}

export default App