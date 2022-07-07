import React from 'react'
import ReactDOM from 'react-dom/client'

import Heading5 from 'components/Typography/Heading/Heading5'

import './index.css'

const App = () => (
  <div>
    <Heading5 text={'App'} />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
