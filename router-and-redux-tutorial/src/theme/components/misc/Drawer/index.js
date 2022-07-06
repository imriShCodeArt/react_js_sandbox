import React from 'react'
import {
  Box,
  Drawer as Root,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material'
function Drawer({ open, anchor, closeAction }) {
  return (
    <Root
      BackdropProps={{ sx: { bgcolor: 'transparent' } }}
      open={open}
      anchor={anchor}
      onClose={closeAction}
    >
      <Box width={{ xs: '250px', md: '300px' }} pt={'5em'}>
        <List>
          <Typography variant='h5'>Settings</Typography>
          <ListItem>
            <ListItemText>Dark mode:</ListItemText>
            <ListItemButton>
              <Switch />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemText>Language:</ListItemText>
            <ListItemButton>
              <FormControl fullWidth>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={open}
                  label='Age'
                  onChange={() => {}}
                >
                  <MenuItem value={'english'}>English</MenuItem>
                  <MenuItem value={'hebrew'}>Hebrew</MenuItem>
                </Select>
              </FormControl>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Root>
  )
}

Drawer.defaultProps = {
  open: false,
  anchor: 'left',
}

export default Drawer
