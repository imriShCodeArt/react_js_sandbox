import Stack from '@mui/material/Stack'
import React from 'react'

const ImpLink = React.lazy(() => import('components/Link'))
const MyLink = ({ text, href }) => (
  <React.Suspense fallback={<div />}>
    <ImpLink text={text} to={href} />
  </React.Suspense>
)

function LinksBar({ order, links }) {
  return (
    <Stack order={order || 3} direction={'row'} flexWrap={'wrap'} flexGrow={1}>
      {links.map((l, i) => (
        <MyLink {...l} key={i} />
      ))}
    </Stack>
  )
}

export default LinksBar
