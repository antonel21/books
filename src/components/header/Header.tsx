import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import React, { Component } from 'react'
import Caption from '../caption/Caption'

interface HeaderProps {
  class: string
}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption class="book-title" title="test title" />
        <FavoriteBorderOutlinedIcon className="fav-icon1" />
      </div>
    )
  }
}

export default Header
