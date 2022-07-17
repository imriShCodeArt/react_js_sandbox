import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css'
import { store } from './store'
import Theme from './Theme'

const App = () => {
  const state = useSelector((state) => state)

  return (
    <Theme state={state}>
      <Route path={'*'} element={<>Hello</>} />
    </Theme>
  )
}
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
