import { Box } from '@mui/material'
import React from 'react'

import { useNavigate } from 'react-router-dom'

const PostSliderHorizontal = React.lazy(() =>
  import('cards/PostSliderHorizontal')
)

function Home() {
  const navigate = useNavigate()
  return (
    <Box>
      <React.Suspense fallback={<div />}>
        <PostSliderHorizontal nav={navigate} />
      </React.Suspense>
    </Box>
  )
}

export default Home
