import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Link,
  Stack,
  useTheme,
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import ButtonBase from 'components/Button/ButtonBase'

import { slugString, dateString } from 'assets/utils'

function Post({ title, slug, date, authors, categories }) {
  const navigate = useNavigate()
  const theme = useTheme()

  const CategoryButton = ({ name, href }) => (
    <ButtonBase sx={{ textAlign: 'center' }}>
      <Link onClick={() => navigate(`/category/${href}`)}>{name}</Link>
    </ButtonBase>
  )
  return (
    <Card>
      <ButtonBase
      //  onClick={() => navigate(`/entry/${slugString(slug)}`)}
       >
        <Stack px={'1em'} pt={'.95em'} pb={'.25em'}>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='subtitle2'>{dateString(date)}</Typography>
        </Stack>
      </ButtonBase>
      <Stack direction={'row'} width={'50%'}>
        {['Science', 'Nature', 'Space'].map((i, index) => (
          <React.Fragment key={index}>
            <CategoryButton name={i} href={i.toLowerCase()} />
            <Typography variant='body2' color={theme.palette.primary.light}>
              |
            </Typography>
          </React.Fragment>
        ))}
      </Stack>
      <CardActionArea onClick={() => navigate(`/entry/${slug}`)}>
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            commodi odit quasi placeat nihil enim maxime porro aperiam, et
            dignissimos, nostrum possimus laboriosam vel magnam illum harum
            doloremque obcaecati consectetur facere sapiente.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Post
