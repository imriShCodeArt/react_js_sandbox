import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function Wrapper({ children }) {
  const updateChildElm = ({ key, value }) => {
    setChildElm((childElm) => ({
      ...childElm,
      props: {
        ...childElm.props,
        [key]: value,
      },
    }))
  }

  const location = useLocation()
    .pathname.split('/')
    .filter((i) => i !== '')

  const [pageTitle, setPageTitle] = useState('')
  const updatePageTitle = () =>
    setPageTitle(location.length === 1 && location[0])

  const { categories, posts } = useSelector((state) => state)

  // POST META:
  const currentPost = posts.filter(
    (p) => p.slug === location[location.length - 1]
  )

  // HEADER PROPS:
  const [highHeader, setHighHeader] = useState(location.length === 0 && true)
  const updateHeader = () => setHighHeader(location.length === 0 ? true : false)

  // LOCATION EFFECTS:
  useEffect(() => {
    updatePageTitle()
    updateHeader()
  }, [location])

  const ChildElm = () => ({
    ...children,
    'props': { ...children.props },
  })

  console.log(<ChildElm />)

  return <ChildElm />
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Wrapper
