import { Box } from '@mui/material'
import React from 'react'

const ImpAvatar = React.lazy(() => import('components/Avatar'))
const MyAvatar = () => (
  <React.Suspense fallback={<div />}>
    <ImpAvatar sx={{ position: 'relative', right: 0 }} text={'A'}>
      <>item 1</>
      <>item 2</>
      <>item 3</>
    </ImpAvatar>
  </React.Suspense>
)

function Avatar() {
  return (
    <Box order={15}>
      <MyAvatar />
    </Box>
  )
}

export default Avatar
