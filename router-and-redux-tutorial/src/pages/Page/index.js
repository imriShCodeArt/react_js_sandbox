import { Box, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import PageHeader from 'cards/PageHeader'
import Layout from '../../theme/components/Layout'

function Page({ children, location, ...rest }) {
  const [highHeader, setHighHeader] = useState(
    location.length === 0 ? 'high' : undefined
  )
  const indexPage = location.length === 0 ? 'high' : undefined
  useEffect(() => {
    setHighHeader(location.length === 0 ? 'high' : undefined)
  }, [location])
  return (
    <Box minHeight={'91vh'}>
      <PageHeader high={highHeader} />
      <Divider sx={{ borderBottom: 'solid 1px transparent', my: 2 }} />
      <Layout>{children || <Outlet />}</Layout>
    </Box>
  )
}

export default Page
