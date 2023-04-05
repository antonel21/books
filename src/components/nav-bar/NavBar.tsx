import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '../search/Search';
import Logo from '../logo/Logo';
import NavLinks from '../links/NavLinks';
import './NavBar.scss';
import BasicModal from '../modal/BasicModal';
import Button from '@mui/material/Button';
import { RootState } from '../..';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { removeUserData } from '../../store/actions/bookActions';
import { iUser } from '../../utils/iUser';

interface NavBarProps {
  user: iUser;
  removeUserData: () => void;
}

class NavBar extends Component<NavBarProps> {
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
                <Badge
                  badgeContent={
                    this.props.user?.cart ? this.props.user?.cart?.length : 0
                  }
                  color="info"
                >
                  <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
                </Badge>
              </IconButton>
              <IconButton size="large" color="inherit">
                <Badge
                  badgeContent={
                    this.props.user?.favorites
                      ? this.props.user?.favorites?.length
                      : 0
                  }
                  color="info"
                >
                  <FavoriteBorderOutlinedIcon style={{ color: 'black' }} />
                </Badge>
              </IconButton>
              {this.props.user ? (
                <Button
                  sx={{ mt: '4px' }}
                  size="large"
                  color="error"
                  onClick={() => {
                    this.props.removeUserData();
                    localStorage.clear();
                  }}
                >
                  LOGOUT
                </Button>
              ) : (
                <BasicModal />
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.auth?.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeUserData: () => dispatch(removeUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
