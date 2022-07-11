import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Post from 'cards/Post'
import ArrowLeft from './components/ArrowLeft'
import ArrowRight from './components/ArrowRight'

import Root from './components/Root'

function PostSliderHorizontal({
  posts = [{}, {}, {}, {}, {}, {}, {}, {}],
  globalElementHeight = '300px',
  step = 750,
}) {
  const [moveHoriz, setMoveHoriz] = useState(0)

  function moveRight() {
    setMoveHoriz(moveHoriz - step)
  }
  function moveLeft() {
    setMoveHoriz(moveHoriz + step)
  }
  const CategoryPosts = () =>
    posts.map((p, index) => (
      <Box
        display={'inline-block'}
        minWidth={'280px'}
        key={index}
        sx={{ p: '1em' }}
      >
        <Post short {...p} />
      </Box>
    ))

  return (
    <Root height={globalElementHeight} index={moveHoriz}>
      <ArrowLeft
        action={moveLeft}
        disabled={moveHoriz >= 0 ? true : false}
        moveHoriz={moveHoriz}
        height={globalElementHeight}
      />
      <CategoryPosts />
      <ArrowRight
        action={moveRight}
        disabled={moveHoriz <= (posts.length / 2 + 2) * -180 ? true : false}
        moveHoriz={moveHoriz}
        height={globalElementHeight}
      />
    </Root>
  )
}

export default PostSliderHorizontal
