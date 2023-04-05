import React, { Component } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Thumbnail from '../thumbnail/Thumbnail';
import PrimaryDescription from '../descriptions/PrimaryDescription';
import './PrimaryCard.scss';
import { iBook } from '../../utils/iBook';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setToFavorite } from '../../store/actions/bookActions';
import { RootState } from '../..';
import { iUser } from '../../utils/iUser';

interface PrimaryCardProps {
  class?: string;
  book: iBook;
  setToFavorite: (data: string) => void;
  user: iUser;
}

export class PrimaryCard extends Component<PrimaryCardProps> {
  render() {
    return (
      <div className={this.props.class}>
        <FavoriteBorderOutlinedIcon
          className="fav-icon"
          onClick={() => {
            this.props.setToFavorite(this.props.book.key);
            localStorage.setItem(
              'books.user-data',
              JSON.stringify({
                ...this.props.user,
                favorites: [
                  ...(this.props.user.favorites as string[]),
                  this.props.book.key,
                ],
              }),
            );
          }}
        />
        {this.props.book.cover_i ? (
          <Thumbnail
            class="fav-img"
            alt=""
            src={`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-L.jpg`}
          />
        ) : (
          <Thumbnail
            class="fav-img"
            alt=""
            src="https://www.hachette.co.nz/graphics/CoverNotAvailable.jpg"
          />
        )}
        <PrimaryDescription book={this.props.book} class="desc-card" />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setToFavorite: (data: string) => dispatch(setToFavorite(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryCard);
