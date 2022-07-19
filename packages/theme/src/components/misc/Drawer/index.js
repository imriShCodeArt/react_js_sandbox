import React, { useContext } from 'react'
import { Drawer as Root } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import ThemeContext from 'assets/ThemeContext'

function Drawer() {
  const {closeDrawer, anchor, open, variant, content} = useContext(ThemeContext).drawerData
  // console.log(closeDrawer, anchor, open, variant, content)
  return (
    <Root
      BackdropProps={{ sx: { bgcolor: 'transparent' } }}
      open={open}
      anchor={anchor}
      onClose={closeDrawer}
      variant={variant}
    >
      {content || (
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
      )}
    </Root>
  )
}

Drawer.defaultProps = {
  open: false,
  anchor: 'left',
}

export default Drawer
