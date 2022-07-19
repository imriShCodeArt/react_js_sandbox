import React, { useContext } from 'react'
import { Drawer as Root, useTheme } from '@mui/material'
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

function Drawer({}) {
  const theme = useTheme()
  const { closeDrawer, anchor, open, variant, content } =
    useContext(ThemeContext).drawerData
  console.log()
  return (
    <Root
      BackdropProps={{ sx: { bgcolor: 'transparent' } }}
      open={open}
      anchor={window.innerWidth < theme.breakpoints.values.md ? 'top' : anchor}
      onClose={closeDrawer}
      variant={variant}
      SlideProps={{direction:'down'}}
    >
      {content || (
        <Box width={{ xs: '100vw', md: '300px' }} pt={'5em'}>
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

// Drawer.propsTypes = {
//   anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
//   variant: PropTypes.oneOf(['temporary', 'permanent', 'persistant']),
//   content: PropTypes.element,
//   open: PropTypes.func,
// }

export default Drawer
