import { Typography } from '@mui/material'
import Theme from './theme'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Theme>
      <Routes>
        <Route
          path='*'
          element={
            <>
              <Typography variant='h1' color={'primary'}>
                Hello
              </Typography>
            </>
          }
        />
      </Routes>
    </Theme>
  )
}

export default App
