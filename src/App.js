
import React from 'react'

import { view as TopMenu } from './base/TopMenu.js'

const App = ({children}) => {
  return (
    <div>
      <TopMenu />
      <div>{children}</div>
    </div>
  )
}

export default App