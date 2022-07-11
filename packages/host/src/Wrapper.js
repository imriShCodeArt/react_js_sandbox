import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import App from './App'
import { Provider } from 'react-redux'

const Wrapper = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<Wrapper />)

export default Wrapper
