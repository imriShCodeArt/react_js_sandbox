import { Box, Typography } from '@mui/material'
import React from 'react'

const ImpLink = React.lazy(() => import('components/Link'))
const MyLink = ({ text, href }) => (
  <React.Suspense fallback={<div />}>
    <ImpLink text={text} to={href} />
  </React.Suspense>
)

function Logo({ order }) {
  return (
    <Box textAlign={'center'} order={order || 1} flexGrow={order && 1} >
      <MyLink text={<Typography>LOGO</Typography>} href={''}>
      </MyLink>
    </Box>
  )
}

export default Logo
