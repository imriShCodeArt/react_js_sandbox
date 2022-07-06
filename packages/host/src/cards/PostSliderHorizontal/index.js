import React, { useState } from 'react'
import { Box, Fab } from '@mui/material'
import Post from 'cards/Post'

import {
  ChevronLeft as LeftIcon,
  ChevronRight as RightIcon,
} from '@mui/icons-material'

function PostSliderHorizontal({ posts }) {
  const globalElementHeight = '300px'
  const [moveHoriz, setMoveHoriz] = useState(0)

  function moveLeft() {
    setMoveHoriz(moveHoriz - 180)
  }
  function moveRight() {
    setMoveHoriz(moveHoriz + 180)
  }

  const Root = ({ children }) => (
    <Box
      height={globalElementHeight}
      px={'4em'}
      display={'flex'}
      flexWrap='nowrap'
      position={'relative'}
      left={`${0 + moveHoriz}px`}
      verticalAlign={'center'}
      sx={{
        transition: 'all .3s ease-in-out',
      }}
    >
      {children}
    </Box>
  )
  const category = posts || [{}, {}, {}, {}, {}, {}, {}, {}]
  const CategoryPosts = () =>
    category.map((p, index) => (
      <Box
        display={'inline-block'}
        minWidth={'280px'}
        key={index}
        sx={{ p: '1em' }}
      >
        <Post short {...p} />
      </Box>
    ))

  const Arrow = ({ right }) => {
    const disableRight =
      right && moveHoriz <= (category.length / 2 + 2) * -180 ? true : false
    const disableLeft = !right && moveHoriz >= 0 ? true : false
    return (
      <Box
        position={!right ? 'relative' : 'absolute'}
        right={right && '3em'}
        display={'flex'}
        alignItems={'center'}
        minHeight={globalElementHeight}
      >
        {' '}
        <Box position={'absolute'}>
          <Fab
            disabled={!right ? disableLeft : disableRight}
            onClick={right ? moveLeft : moveRight}
            sx={{
              position: 'absolute',
              left: !right && `${moveHoriz * -1}px`,
              right: right && `${12 - moveHoriz * -1}px`,
            }}
          >
            {!right && <LeftIcon />}
            {right && <RightIcon />}
          </Fab>
        </Box>
      </Box>
    )
  }
  return (
    <Root>
      <Arrow />
      <CategoryPosts />
      <Arrow right />
    </Root>
  )
}

export default PostSliderHorizontal
