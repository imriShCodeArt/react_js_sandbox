import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu as Root, MenuItem, Box } from '@mui/material'
import MenuButton from '../Button/MenuButton'

function Menu({ id, name, rootEl, children, ...rest }) {
  const anchorId = name ? `${name}_button` : 'basic-button'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [menuWidth, setMenuWidth] = React.useState(0)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {
    anchorEl && setMenuWidth(anchorEl.clientWidth)
  }, [anchorEl])
  const Trigger = () => (
    <MenuButton open={open} setAnchor={setAnchorEl}>
      {rootEl || 'Click'}
    </MenuButton>
  )

  const ChildElm = () => (
    <>
      {children && children.length > 1 ? (
        children.map((c, index) => <MenuItem key={index}>{c}</MenuItem>)
      ) : (
        <MenuItem
          sx={{
            paddingY: '0',
            paddingX: '0',
          }}
        >
          {children}
        </MenuItem>
      )}
    </>
  )

  return (
    <Box display={'inline-block'} {...rest}>
      <Trigger />
      <Root
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': anchorId,
        }}
        PaperProps={{ sx: { marginLeft: '-16px', minWidth: menuWidth } }}
      >
        <ChildElm />
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
