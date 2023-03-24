import React, { Component } from 'react';
import Button from '../button/Button';
import Caption from '../caption/Caption';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './PrimaryDescription.scss';
import { iBook } from '../../utils/iBook';

interface PrimaryDescriptionProps {
  class?: string;
  book: iBook;
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
          handleClick={() => {}}
          type="button"
          label={<>Add To Cart {<ShoppingCartOutlinedIcon />}</>}
        />
      </div>
    );
  }
}

export default PrimaryDescription;
