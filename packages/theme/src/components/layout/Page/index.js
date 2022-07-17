import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { Outlet } from 'react-router-dom'

function Page({ children, location, context }) {
  const [pageTitle, setPageTitle] = useState()
  const updatePageTitle = () =>
    setPageTitle(location.length === 1 && location[0])

  const [highHeader, setHighHeader] = useState(location.length === 0 && true)
  const updateHeader = () => setHighHeader(location.length === 0 ? true : false)

  // LOCATION EFFECTS:
  useEffect(() => {
    updatePageTitle()
    updateHeader()
  }, [location])

  const imgUrl = 
  () => {
    switch (pageTitle) {
      case false:
        return 'https://img.freepik.com/free-vector/abstract-low-poly-orange-yellow-background_1017-32111.jpg?w=2000'
      case 'contact':
        return 'https://www.designrush.com/uploads/users/customer-11/image_1530667878_gQ0EfQfL9GHKYrCdjsUuKRjzTU2JwMZYKso6vcpp.jpeg'
      default:
        return 'https://previews.123rf.com/images/oneinchpunch/oneinchpunch1403/oneinchpunch140300100/27097182-tropical-beach-wide-angle-view.jpg'
    }
  }

  return (
    <Card component={'article'}>
      <CardHeader
        component='header'
        titleTypographyProps={{ textTransform: 'capitalize', variant: 'h1' }}
        title={pageTitle || 'Home'}
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
      <CardContent
        component={'main'}
        className='Page_Content'
        sx={{ p: '0', pb: '4em!important', pt: '4em' }}
      >
        {children || <Outlet />}
      </CardContent>
    </Card>
  )
}

export default Page
