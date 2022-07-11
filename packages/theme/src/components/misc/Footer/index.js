import { Box, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'

const MyFooterHeading = React.lazy(() => import('components/FooterHeading'))
const FooterHeading = ({ text }) => (
  <React.Suspense fallback={<div />}>
    <MyFooterHeading>{text}</MyFooterHeading>
  </React.Suspense>
)

function Footer({ posts }) {
  const theme = useTheme()
  const Column = ({ title, empty }) => {
    return (
      <Grid item xs={3} py={theme.spacing(2)} px={theme.spacing(6)}>
        <React.Suspense fallback={<div />}>
          <FooterHeading text={title} />
        </React.Suspense>
        <List dense>
          {!empty && (
            <>
              <ListItem dense>
                <ListItemText>Item Example</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Item Example</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Item Example</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Item Example</ListItemText>
              </ListItem>
            </>
          )}
        </List>
      </Grid>
    )
  }

  return (
    <Grid
      component={'footer'}
      container
      color={theme.palette.grey[300]}
      bgcolor={theme.palette.grey[700]}
    >
      <Column title={'Recent posts:'} />
      <Column title={'Categories:'} />
      <Column empty title={''} />
      <Column title={'Contact'} />
    </Grid>
  )
}

export default Footer
