import React, { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import {
  Author,
  Column,
  PostsForCategory,
  PostSliderHorizontal,
  Section,
} from './components'

function Home() {
  const c = useContext(ThemeContext())
  console.log(c)
  return (
    <>
      <Section>
        <Column>
          <PostSliderHorizontal />
        </Column>
      </Section>
      <Section>
        <Column>
          <PostsForCategory categoryName={'Science'} />
        </Column>
      </Section>
      <Section>
        <Column>
          <PostsForCategory categoryName={'Nature'} flipDirection />
        </Column>
      </Section>
      <Section>
        <Column xs={4}>
          <Author />
        </Column>
        <Column xs={4}>
          <Author />
        </Column>
        <Column xs={4}>
          <Author />
        </Column>
      </Section>
    </>
  )
}

export default Home
