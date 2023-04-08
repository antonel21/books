import React, { Component } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setSearchValue } from '../../store/actions/bookActions';
import { RootState } from '../..';

interface SearchProps {
  setSearchValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  search: string;
}

export class Search extends Component<SearchProps> {
  render() {
    return (
      <SearchInput
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: '1px black solid',
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={this.props.setSearchValue}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchInput>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    search: state.searchReducer.search,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setSearchValue: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(setSearchValue(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const SearchInput = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
