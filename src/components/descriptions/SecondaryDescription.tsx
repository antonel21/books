import React, { Component } from 'react'
import { iBook } from '../../utils/iBook'
import Caption from '../caption/Caption'
import './SecondaryDescription.scss'

interface SecondaryDescriptionProps {
  class: string
  book: iBook
}

export class SecondaryDescription extends Component<SecondaryDescriptionProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption class="author" title={`by: ${this.props.book.author_name}`} />
        <Caption
          class="desc2"
          title={`First published in ${this.props.book.first_publish_year}`}
        />
        <Caption
          class="desc3"
          title={`${this.props.book.edition_count} editions`}
        />
      </div>
    )
  }
}

export default SecondaryDescription
