import React, { Component } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import Thumbnail from '../thumbnail/Thumbnail'
import PrimaryDescription from '../descriptions/PrimaryDescription'
import './PrimaryCard.scss'
import { iBook } from '../../utils/iBook'

interface PrimaryCardProps {
  class?: string
  book: iBook
}

export class PrimaryCard extends Component<PrimaryCardProps> {
  render() {
    return (
      <div className={this.props.class}>
        <FavoriteBorderOutlinedIcon className="fav-icon" onClick={() => {}} />
        {this.props.book.cover_i ? (
          <Thumbnail
            class="fav-img"
            alt=""
            src={`https://covers.openlibrary.org/b/id/${this.props.book.cover_i}-M.jpg`}
          />
        ) : (
          <Thumbnail
            class="fav-img"
            alt=""
            src="https://www.press.uillinois.edu/books/images/no_cover.jpg"
          />
        )}
        <PrimaryDescription book={this.props.book} class="desc-card" />
      </div>
    )
  }
}

export default PrimaryCard
