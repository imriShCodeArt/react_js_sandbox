import React from 'react'
import ReactDOM from 'react-dom'

import Heading5 from 'components/Typography/Heading/Heading5'

import './index.css'

const App = () => (
  <div>
    <Heading5 text={'App'} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
