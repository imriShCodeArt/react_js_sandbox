import { Card, CardHeader, Grid } from '@mui/material'
import React from 'react'

function Post({ id, slug, title, date, authors, categories, ...rest}) {

  return (
    <Card>
        <CardHeader title={title} subheader={date} />

    </Card>
  )
}

export default Post