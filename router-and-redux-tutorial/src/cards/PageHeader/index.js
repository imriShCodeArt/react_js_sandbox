import { Box, ButtonGroup, Divider, Grid, Paper, useTheme } from '@mui/material'
import React from 'react'
import Heading1 from 'components/Typography/Heading/Heading1'
import Heading2 from 'components/Typography/Heading/Heading2'
import Button from 'components/Button'

function PageHeader({ high }) {
  const theme = useTheme()
  const imgSrc =
    'https://cdn-fejkh.nitrocdn.com/ochaFXJXqnwMdUBGRtfUupHssXmvcbUS/assets/static/optimized/rev-cf1d6ab/wp-content/uploads/2022/05/ux-ui-1024x816.png'
  const Content = () => (
    <>
      <Box
        justifyContent={'space-between'}
        display={'flex'}
        flexDirection={'column'}
        px={{ xs: 0, md: theme.spacing(8) }}
        py={{ xs: 0, md: theme.spacing(16) }}
        sx={{
          height: { xs: high ? '85vh' : '22em', md: high ? '80vh' : '18em' },
        }}
      >
        <Box>
          <Heading1>Material UI Kit</Heading1>
          <Heading2 variant={'h5'} textTransform={'uppercase'}>
            ready-to-use functional components and enzyms
          </Heading2>
        </Box>
        <Divider
          sx={{
            borderBottom: '1px solid transparent',
            transition: '.3s ease-in-out all',
          }}
        />
        {high && (
          <Box>
            <ButtonGroup>
              <Button text={'Get Started'} />
              <Button text={'Read Docs'} contrast />
            </ButtonGroup>
          </Box>
        )}
      </Box>
    </>
  )
  const BGImage = () => (
    <Box
      id={'my-box'}
      zIndex={9}
      sx={{
        height: { xs: high ? '85vh' : '24em', md: high ? '91vh' : '18em' },
        width: '100%',
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: 'cover', md: 'contain', lg: '50%' },
        backgroundPosition: { xs: 'center', md: 'right' },
        filter: 'grayscale(90%) blur(8px)',
        position: 'absolute',
        top: '6em',
        left: '0',
      }}
    ></Box>
  )
  return (
    <Grid
      container
      display={'flex'}
      flexDirection={'column'}
      sx={{
        height: { xs: high ? '85vh' : '24em', md: high ? '91vh' : '18em' },
      }}
      px={theme.spacing(8)}
      py={theme.spacing(2)}
    >
      <Grid zIndex={999} item xs={12}>
        <Content />
      </Grid>
      <BGImage />
    </Grid>
  )
}

export default PageHeader
