import React from 'react'
import ReactDOM from 'react-dom/client'

import Divider from '@mui/material/Divider'

import Link from 'components/Link'
import Avatar from 'components/Avatar'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
    <Avatar >
          <Link text={'Account'} to={'account'} />
          <Link text={'Preferences'} to={'preferences'} />
          <Link text={'Settings'} to={'settings'} />
          <Divider variant='middle' />
          <Link text={'Profile'} to={'profile'} />
          <Link text={'Logout'} to={'logout'} />
        </Avatar>

    </div>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
