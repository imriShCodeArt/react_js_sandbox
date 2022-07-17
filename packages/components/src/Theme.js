import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  Drawer,
  ListItem,
  ListItemText,
  ThemeProvider,
} from '@mui/material'
import React from 'react'
import Link from 'components/Link'

const ItemLink = ({ children, ...rest }) => {
  return (
    <ListItem>
      <ListItemText>
        <Link {...rest} />
      </ListItemText>
    </ListItem>
  )
}

function Theme({ children, items=[{},{},{}] }) {
  return (
    <ThemeProvider theme={createTheme({})}>
      <CssBaseline />
      <AppBar>
        <Box ml={'20em'} px={'2em'} py={'.25em'}>
          {children}
        </Box>
      </AppBar>
      <Drawer
        BackdropProps={{ sx: { bgcolor: 'transparent' } }}
        PaperProps={{ sx: { width: '20em' } }}
        open
        variant='permanent'
      >
        {/* {items.map()} */}
      </Drawer>
    </ThemeProvider>
  )
}

export default Theme
