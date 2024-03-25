import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
    <CssBaseline />
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header />
        <Box p={4} sx={{flexGrow: 1, overflow: 'auto'}}>
            {children}
        </Box>
        <Footer />
    </Box>
    </>
  )
}

export default Layout