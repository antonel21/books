import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React, { Component } from 'react';
import { iBook } from '../../utils/iBook';
import Caption from '../caption/Caption';
import './Header.scss';

interface HeaderProps {
  class: string;
  book: iBook;
}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption
          class="book-title"
          title={
            this.props.book.title.length <= 70
              ? this.props.book.title.slice(0, 70)
              : this.props.book.title.slice(0, 70) + '...'
          }
        />
        <FavoriteBorderOutlinedIcon className="fav-icon1" />
      </div>
    );
  }
}

export default Header;
