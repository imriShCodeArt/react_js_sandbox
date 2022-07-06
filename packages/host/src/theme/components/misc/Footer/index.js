import { Grid, List, ListItem, ListItemText, useTheme } from '@mui/material'
import React from 'react'

const Heading5 = React.lazy(()=> import('components/Heading5'))
import { useSelector } from 'react-redux'

function Footer({}) {
  const posts = useSelector((state) => state.posts)
  const theme = useTheme()
  const Column = ({ title, empty }) => {
    return (
      <Grid item xs={3} py={theme.spacing(2)} px={theme.spacing(6)}>
        <React.Suspense fallback={<div />}><Heading5 text={title} /></React.Suspense>
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
