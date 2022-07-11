import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const MyButton = React.lazy(() => import('components/ButtonBase'))
const Button = ({ children, text, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyButton {...rest}>{children || text}</MyButton>
  </React.Suspense>
)

function Thumbnile({ content, children, bgImg, ...rest }) {
  const size = '14em'

  return (
    <Button
      sx={{
        borderRadius: '50%',
        width: size,
        height: size,
        m: 'auto',
      }}
    >
      <Paper
        sx={{
          borderRadius: '50%',
          width: size,
          height: size,
          m: 'auto',
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: 'center',
          backgroundSize: '250px',
          backgroundRepeat: 'norepeat',
        }}
      >
        {children || content}
      </Paper>
    </Button>
  )
}

export default Thumbnile
