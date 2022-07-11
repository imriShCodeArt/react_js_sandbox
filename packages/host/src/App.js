import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'

import Theme from './theme'
import { store } from './store'

import { BrowserRouter, Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Wrapper from './Wrapper'

const PostsSidebar = React.lazy(() => import('cards/PostsSidebar'))
const SidebarElm = () => (
  <React.Suspense fallback={<div />}>
    <PostsSidebar />
  </React.Suspense>
)

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Wrapper>
          <Theme
            // posts={posts}
            // highHeader={highHeader}
            // categories={categories}
            // location={location}
            // pageTitle={pageTitle}
            sidebarElm={<SidebarElm />}
          >
            <Route path=':pages' element={<Page404 />} />
            <Route index element={<Home />} />
            <Route path={'about'} element={<About />} />
            <Route path={'contact'} element={<Contact />} />
          </Theme>
        </Wrapper>
      </Provider>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
