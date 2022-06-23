import React from 'react'
import { Button as Root } from '@mui/material'
import PropTypes from 'prop-types'

function MenuButton({
  id,
  controls,
  hasPop,
  setAnchor,
  open,
  color,
  children,
  ...rest
}) {
  const handleClick = (event) => {
    return setAnchor && setAnchor(event.currentTarget.parentNode)
  }
  return (
    <Root
      id={id}
      aria-controls={open ? controls : undefined}
      aria-haspopup={hasPop}
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      color={color}
      {...rest}
    >
      {children}
    </Root>
  )
}

MenuButton.propTypes = {
  id: PropTypes.string,
  hasPop: PropTypes.oneOf([
    'true','menu','listbox','tree','grid','dialog',
  ]), // describes the popup's type
  controls: PropTypes.string,   // the id of the element which is controlled by this button 
  open: PropTypes.bool,
  color: PropTypes.oneOf([
    'inherit','primary','secondary','info','warning','success',
  ]),
}

MenuButton.defaultProps = {
  id: 'basic-button',
  controls: 'basic-menu',
  hasPop: 'menu',
  open: false,
  color: 'inherit',
}
export default MenuButton
