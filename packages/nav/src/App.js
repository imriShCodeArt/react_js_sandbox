import React from 'react'
import ReactDOM from 'react-dom/client'
import AppBar from './AppBar'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import Theme from './Theme'

const appbarProps = {
  hasMenuButton: true,
  hasLogo: true,
  hasLinksbar: [
    { text: 'Home', href: '' },
    { text: 'Blog', href: 'blog' },
    { text: 'About', href: 'about' },
    { text: 'Contact', href: 'contact' },
  ],
  hasAddButton: true,
  hasNotificationButton: true,
  HasAvatar: true,
}

const App = () => (
  <Theme>
    <AppBar {...appbarProps}/>
  </Theme>
)
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
