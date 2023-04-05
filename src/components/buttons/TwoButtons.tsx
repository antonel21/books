import React, { Component } from 'react';
import Button from './Button';
import './TwoButtons.scss';
import { iBook } from '../../utils/iBook';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setToCart, setToFavorite } from '../../store/actions/bookActions';

interface TwoButtonsProps {
  class: string;
  book: iBook;
  setToCart: (data: string) => void;
  setToFavorite: (data: string) => void;
}

export class TwoButtons extends Component<TwoButtonsProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Button class="btn-add" handleClick={() => {}} label="Add To Cart" />
        <Button
          class="btn-fav1"
          handleClick={() => {}}
          label="Add To Favorite"
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setToFavorite: (data: string) => dispatch(setToFavorite(data)),
    setToCart: (data: string) => dispatch(setToCart(data)),
  };
};

export default connect(null, mapDispatchToProps)(TwoButtons);
