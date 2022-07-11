
import React from 'react'

const MyPostSliderHorizontal = React.lazy(() =>
  import('cards/PostSliderHorizontal')
)
const PostSliderHorizontal = () => (
  <React.Suspense fallback={<div />}>
    <MyPostSliderHorizontal />
  </React.Suspense>
)
const MyPostsForCategory = React.lazy(() => import('cards/PostsForCategory'))
const PostsForCategory = ({ ...props }) => (
  <React.Suspense fallback={<div />}>
    <MyPostsForCategory
      posts={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
      {...props}
    />
  </React.Suspense>
)

const MyAuthor = React.lazy(() => import('cards/Author'))
const Author = ({}) => (
  <React.Suspense fallback={<div />}>
    <MyAuthor />
  </React.Suspense>
)

const MySection = React.lazy(() => import('theme/Section'))
const Section = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MySection {...rest}>{children}</MySection>
  </React.Suspense>
)
const MyColumn = React.lazy(() => import('theme/Column'))
const Column = ({ children, ...rest }) => (
  <React.Suspense fallback={<div />}>
    <MyColumn {...rest}>{children}</MyColumn>
  </React.Suspense>
)

function Home() {
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
