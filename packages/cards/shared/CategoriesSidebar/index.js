import {
  List,
  ListItem,
  ListItemButton,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CategoriesSidebar({ items = [] }) {
  const navigate = useNavigate()
  return (
    <Paper sx={{ my: '.5em' }}>
      <Typography p={'.25em 0 .25em .25em'} variant='h4'>
        More Categories:
      </Typography>
      <List disablePadding>
        {items.map((i) => (
          <ListItem key={i.id} disableGutters>
            <ListItemButton onClick={() => navigate(`/category/${i.slug}`)}>
              {i.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default CategoriesSidebar
