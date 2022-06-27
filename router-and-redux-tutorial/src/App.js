import React from 'react'
import Theme from './theme'

import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Page from 'pages/Page'
import About from 'pages/About'
import Contact from 'pages/Contact'

function App() {
  return (
    <Theme>
      <Routes>
        <Route path='/*'>
          <Route index element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path={'contact'} element={<Contact />} />
        </Route>
        <Route path='entry'>
          <Route path=':posts' element={<>ELM</>} />
        </Route>
      </Routes>
    </Theme>
  )
}

export default App
