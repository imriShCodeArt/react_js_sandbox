import React from 'react'
import ReactDOM from 'react-dom/client'

import { Paper } from '@mui/material'

import Heading1 from 'components/Typography/Heading/Heading1'
import Heading2 from 'components/Typography/Heading/Heading2'
import Heading3 from 'components/Typography/Heading/Heading3'
import Heading4 from 'components/Typography/Heading/Heading4'
import Heading5 from 'components/Typography/Heading/Heading5'
import Heading6 from 'components/Typography/Heading/Heading6'
import CTATitle from 'components/Typography/CTATitle'
import Link from 'components/Link'
import ButtonBase from 'components/Button/ButtonBase'
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
      <Heading1 fontSize={'8em'} text={'My Components:'} />
      <Paper variant='outlined' elevation={0}>
        <Heading1 text={'Heading 1'} />
        <Heading2 text={'Heading 2'} />
        <Heading3 text={'Heading 3'} />
        <Heading4 text={'Heading 4'} />
        <Heading5 text={'Heading 5'} />
        <Heading6 text={'Heading 6'} />
        <CTATitle text={'CTA Title'} />

        <Link text={'Link'} to={'#'} />

        <ButtonBase onClick={() => alert('Click!')} >
          <Heading4 text={'Button Base - Wrapper'} />
        </ButtonBase>
        <Button>
          Default Button
        </Button>
        <ContrastButton>
          Contrast Button
        </ContrastButton>
        <TextButton>
          Text Button
        </TextButton>

        <Heading5 text={'Breadcrumbs:'} />
        <Breadcrumbs items={[
          { slug: 'path-1', text: 'Path 1' },
          { slug: 'path-2', text: 'Path 2' },
        ]} />

        <Heading5 text={'Avatar:'} />
        <Avatar />

      </Paper>

    </div>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
