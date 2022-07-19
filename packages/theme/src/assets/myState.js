export default (closeDrawer, drawerOpen, drawerAnchor, drawerContent, links) => {
  return {
    name: 'Theme Context - GLOBAL',
    navLinks: links,
    drawerData: {
      open: drawerOpen,
      anchor: drawerAnchor,
      closeDrawer: closeDrawer,
      variant: 'temporary',
      content: drawerContent,
    },
  }
}
