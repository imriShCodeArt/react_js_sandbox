import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Post from './Post'
import PostSliderHorizontal from './PostSliderHorizontal'

const App = () => (
  <BrowserRouter>
    <div>
      <div>CARDS</div>
      <Post />
      <PostSliderHorizontal />
    </div>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
