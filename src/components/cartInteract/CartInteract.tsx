import React, { Component } from 'react'
import Button from '../button/Button'
import Caption from '../caption/Caption'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import './CartInteract.scss'

interface CartInteractProps {
  class: string
}

export class CartInteract extends Component<CartInteractProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption class="desc-price" title="Price: $9.99" />
        <Button
          class="card-btn"
          handleClick={() => {}}
          type="button"
          label={<>Add To Cart: {<ShoppingCartOutlinedIcon />}</>}
        />
      </div>
    )
  }
}

export default CartInteract
