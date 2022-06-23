import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextButton from '../../../../../components/Button/TextButton'

function Link({ to, text, color, children }) {
  const navigate = useNavigate()
  
  return (
    <TextButton color={color} action={() => navigate(`${to}`)}>
      {children || text}
    </TextButton>
  )
}
Link.defaultProps = {
  color: 'primary',
}
export default Link
