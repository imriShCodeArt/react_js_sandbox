import { Typography } from '@mui/material'
import Theme from './theme'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Theme>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </Theme>
  )
}

export default App
