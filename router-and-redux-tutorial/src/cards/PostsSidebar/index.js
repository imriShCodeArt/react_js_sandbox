import {
  List,
  ListItem,
  ListItemButton,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'

function PostsSidebar() {
  return (
    <Paper sx={{my:'.5em'}} >
      <Typography p={'.25em 0 .25em .25em'} variant='h4'>
        Recent posts:
      </Typography>
      <List disablePadding>
        <ListItem disableGutters>
          <ListItemButton>Post 1</ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton>Post 2</ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton>Post 3</ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton>Post 4</ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton>Post 5</ListItemButton>
        </ListItem>
      </List>
    </Paper>
  )
}

export default PostsSidebar
