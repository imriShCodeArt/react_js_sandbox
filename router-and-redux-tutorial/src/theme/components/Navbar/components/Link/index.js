import { ListItemButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextButton from '../../../../../components/Button/TextButton'

function Link({ to, text, children }) {
  const navigate = useNavigate()
  return (
    <TextButton onClick={navigate(to)}>{children || text}</TextButton>
  )
}

export default Link
