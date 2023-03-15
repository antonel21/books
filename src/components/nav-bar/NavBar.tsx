import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import MoreIcon from '@mui/icons-material/MoreVert'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Search from '../search/Search'
import Logo from '../logo/Logo'
import NavLinks from '../links/NavLinks'
import './NavBar.scss'

class NavBar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: '#F6F1F1' }}>
            <Logo />
            <Search />
            <NavLinks class="nav-links" />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" color="inherit">
                <Badge badgeContent={14} color="info">
                  <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
                </Badge>
              </IconButton>
              <IconButton size="large" color="inherit">
                <Badge badgeContent={17} color="info">
                  <FavoriteBorderOutlinedIcon style={{ color: 'black' }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                onClick={() => {}}
                color="inherit"
              >
                <PermIdentityOutlinedIcon
                  style={{ fontSize: '30px', color: 'black' }}
                />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={() => {}} color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}

export default NavBar
