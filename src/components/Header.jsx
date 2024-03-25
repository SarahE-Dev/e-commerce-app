import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component='div' sx={{flexGrow: 1}}>
                My Music Store
            </Typography>
            <Button color="inherit">Login</Button>
            <IconButton color="inherit" size='large' edge='start' aria-label='menu'>
                <ShoppingCart  />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header