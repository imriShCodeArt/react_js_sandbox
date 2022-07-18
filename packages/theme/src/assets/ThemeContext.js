import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ThemeContext = () => {
  const location = useLocation().pathname
  const [drawer, setDrawer] = useState({
    open: false,
    anchor: 'left',
    content: '',
    variant: 'temporary',
  })

  function updateParam({ name, value }) {
    return setDrawer((drawer) => ({ ...drawer, [name]: value }))
  }

  function openDrawer() {
    updateParam({ name: 'open', value: true })
  }
  function closeDrawer() {
    updateParam({ name: 'open', value: false })
  }

  const context = {
    name: 'Theme Context - GLOBAL',
    location,
    navLinks: [
      {
        text: 'Home',
        href: '',
      },
      {
        text: 'About',
        href: 'about',
      },
      {
        text: 'Blog',
        subLinks: [
          {
            text: 'Nature',
            href: 'category/nature',
          },
          {
            text: 'Space',
            href: 'category/space',
          },
          {
            text: 'Science',
            href: 'category/science',
          },
        ],
      },
    ],
    drawer: drawer,
  }
  return createContext({
    ...context,
    drawer: { ...drawer, openDrawer, closeDrawer },
  })
}

export default ThemeContext
