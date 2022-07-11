import React from 'react'
import Grid from '@mui/material/Grid'
import Thumbnile from '../Thumbnile'

const MyHeading = React.lazy(() => import('components/WidgetHeading'))
const Heading = ({ text, children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyHeading sx={{ textAlign: 'center' }} {...rest}>
      {children || text}
    </MyHeading>
  </React.Suspense>
)
const MyText = React.lazy(() => import('components/BodyText'))
const Text = ({ text, children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyHeading sx={{ textAlign: 'center' }} {...rest}>
      {children || text}
    </MyHeading>
  </React.Suspense>
)

function Author({
  img = 'https://cdn4.vectorstock.com/i/1000x1000/26/38/professional-programmer-character-smiling-man-vector-21172638.jpg',
}) {
  return (
    <Grid container width={'100%'}>
      <Grid item xs={12} display={'block'}>
        <Thumbnile bgImg={img} />
        <Heading text={'Author'} />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ea,
          asperiores optio tempora debitis provident deleniti ullam id enim odio
          soluta facilis, obcaecati dicta fugit dignissimos non excepturi
          consectetur praesentium.
        </Text>
      </Grid>
    </Grid>
  )
}

export default Author
