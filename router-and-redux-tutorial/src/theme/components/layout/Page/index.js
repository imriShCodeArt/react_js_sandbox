import React from 'react'
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
function Page({ children, title, highHeader }) {
  const imgUrl =
    'https://previews.123rf.com/images/oneinchpunch/oneinchpunch1403/oneinchpunch140300100/27097182-tropical-beach-wide-angle-view.jpg'
  return (
    <Card>
      <Box>
        <CardHeader
          titleTypographyProps={{ textTransform: 'capitalize', variant: 'h1' }}
          title={title || 'Home'}
          subheader={'Page Layout'}
          subheaderTypographyProps={{
            variant: 'h2',
          }}
          sx={{
            backgroundImage: `linear-gradient(rgba(251,251,251,0.5), rgba(251,251,251,0.3)), url(${imgUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: highHeader ? '30em' : '13em',
            transition: 'height .3s ease-in-out',
          }}
        />
        <CardContent>
          {children || <Outlet />}
        </CardContent>
      </Box>
    </Card>
  )
}

export default Page
