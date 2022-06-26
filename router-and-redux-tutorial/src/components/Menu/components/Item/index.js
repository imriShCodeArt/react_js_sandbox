import { MenuItem } from '@mui/material'
import React from 'react'

function Item({ dense, children }) {
  return <MenuItem dense={dense}>{children}</MenuItem>
}

export default Item
