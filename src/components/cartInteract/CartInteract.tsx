import React, { Component } from 'react';
import Button from '../buttons/Button';
import Caption from '../caption/Caption';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './CartInteract.scss';

interface CartInteractProps {
  class: string;
}

export class CartInteract extends Component<CartInteractProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption class="desc-price1" title="9.99 $" />
        <Button
          class="card-btn1"
          handleClick={() => {}}
          type="button"
          label={<>Add To Cart {<ShoppingCartOutlinedIcon />}</>}
        />
      </div>
    );
  }
}

export default CartInteract;
