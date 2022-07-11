import {
  List,
  ListItem,
  ListItemButton,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'

const MyLink = React.lazy(() => import('components/Link'))
const Link = ({ to, children }) => (
  <React.Suspense fallback={<div />}>
    <MyLink to={to}>{children}</MyLink>
  </React.Suspense>
)

function CategoriesSidebar({ items = [] }) {
  return (
    <Paper sx={{ my: '.5em' }}>
      <Typography p={'.25em 0 .25em .25em'} variant='h4'>
        More Categories:
      </Typography>
      <List disablePadding>
        {items.map((i) => (
          <ListItem key={i.id} disableGutters>
            <ListItemButton>
              <Link to={`/category/${i.slug}`}>{i.name}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default CategoriesSidebar
