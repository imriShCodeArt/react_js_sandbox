import { Button } from '@mui/material'
import React from 'react'
import Menu from '../../components/Menu'

function Home() {
  return (
    <div>
    <div>
      Home
      <Menu triggerElm={'Categories'}>
    <Button fullWidth size='small'>
      c
    </Button>
      </Menu>
      </div>
      </div>
  )
}

export default Home