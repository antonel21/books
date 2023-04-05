import React, { Component } from 'react';
import Button from '../buttons/Button';
import Caption from '../caption/Caption';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './PrimaryDescription.scss';
import { iBook } from '../../utils/iBook';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setToCart } from '../../store/actions/bookActions';
import { RootState } from '../..';
import { iUser } from '../../utils/iUser';

interface PrimaryDescriptionProps {
  class?: string;
  book: iBook;
  setToCart: (data: string) => void;
  user: iUser;
}

export class PrimaryDescription extends Component<PrimaryDescriptionProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption
          class="desc-title"
          title={this.props.book.title.slice(0, 26)}
        />
        <Caption
          class="desc-author"
          title={`by: ${this.props.book.author_name[0]}`}
        />
        <Caption class="desc-price" title="Price: $9.99" />
        <Button
          class="card-btn"
          handleClick={() => {
            this.props.setToCart(this.props.book.key);
            localStorage.setItem(
              'books.user-data',
              JSON.stringify({
                ...this.props.user,
                cart: [
                  ...(this.props.user.cart as string[]),
                  this.props.book.key,
                ],
              }),
            );
          }}
          type="button"
          label={<>Add To Cart {<ShoppingCartOutlinedIcon />}</>}
        />
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
    setToCart: (data: string) => dispatch(setToCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryDescription);
