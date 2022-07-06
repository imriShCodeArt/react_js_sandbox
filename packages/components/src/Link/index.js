import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextButton from 'components/Button/TextButton'

function Link({ to, text, color, children, nav }) {
  const navigate = nav || useNavigate()

  return (
    <TextButton color={color} action={() => navigate(`${to}`)}>
      {children || text}
    </TextButton>
  )
}
Link.defaultProps = {
  color: 'inherit',
}
export default Link
