import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Menu as Root, MenuItem } from '@mui/material'
import MenuButton from '../Button/MenuButton'

function Menu({ id, name, triggerElm, children }) {
  const anchorId = name ? `${name}_button` : 'basic-button'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
useEffect(()=>{
  console.log(anchorEl)
},[anchorEl])
  const Trigger = () => (
    <MenuButton id={anchorId} open={open} setAnchor={setAnchorEl}>
      {triggerElm || 'Click'}
    </MenuButton>
  )
  return (
    <Box>
      <Trigger />
      <Root
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': anchorId,
        }}
        PaperProps={{  }}
      >
        {children && children.length > 1 ? (
          children.map((c, index) => <MenuItem key={index}>{c}</MenuItem>)
        ) : (
          <MenuItem sx={{ paddingY: '0', paddingX: '0', minHeight: 0 }}>
            {children}
          </MenuItem>
        )}
      </Root>
    </Box>
  )
}

Menu.propTypes = {
  triggerElm: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  id: PropTypes.string,
  name: PropTypes.string,
}

Menu.defaultProps = {
  id: 'basic-menu',
}

export default Menu