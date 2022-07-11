import React from 'react'
import { Box, Card, CardContent, CardHeader } from '@mui/material'
import { Outlet } from 'react-router-dom'
function Page({ children, title, highHeader }) {
  const imgUrl = () => {
    switch (title) {
      case false:
        return 'https://i.etsystatic.com/9947821/r/il/6e6dd1/2044263026/il_fullxfull.2044263026_j126.jpg'
      case 'contact':
        return 'https://www.designrush.com/uploads/users/customer-11/image_1530667878_gQ0EfQfL9GHKYrCdjsUuKRjzTU2JwMZYKso6vcpp.jpeg'
      default:
        return 'https://previews.123rf.com/images/oneinchpunch/oneinchpunch1403/oneinchpunch140300100/27097182-tropical-beach-wide-angle-view.jpg'
    }
  }

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
            backgroundImage: `linear-gradient(rgba(251,251,251,0.5), rgba(251,251,251,0.3)), url(${imgUrl()})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: highHeader ? '30em' : '13em',
            transition: 'height .3s ease-in-out',
          }}
        />
        <CardContent className='page-container' sx={{ p: 0 }}>
          {children || <Outlet />}
        </CardContent>
      </Box>
    </Card>
  )
}

export default Page
