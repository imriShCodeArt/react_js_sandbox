import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css'
import Theme from './Theme'

const App = () => {
  
  return (
      <Theme state={{}}>
        <Route path={'*'} element={<>Hello</>} />
      </Theme>
  )
}
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
