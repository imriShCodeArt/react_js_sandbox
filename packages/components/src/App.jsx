import React from 'react'
import ReactDOM from 'react-dom/client'

import { Paper } from '@mui/material'

import CTATitle from 'components/Typography/CTATitle'
import Link from 'components/Link'
import ContrastButton from 'components/Button/ContrastButton'
import Button from 'components/Button/'
import TextButton from 'components/Button/TextButton'

import Breadcrumbs from 'components/Breadcrumbs'
import Avatar from 'components/Avatar'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Paper variant='outlined' elevation={0}>

        <CTATitle text={'CTA Title'} />

        <Link text={'Link'} to={'#'} />

        <Button>
          Default Button
        </Button>
        <ContrastButton>
          Contrast Button
        </ContrastButton>
        <TextButton>
          Text Button
        </TextButton>

        <Breadcrumbs items={[
          { slug: 'path-1', text: 'Path 1' },
          { slug: 'path-2', text: 'Path 2' },
        ]} />

        <Avatar />

      </Paper>

    </div>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
