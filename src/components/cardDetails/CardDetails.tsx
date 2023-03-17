import React, { Component } from 'react'
import CartInteract from '../cartInteract/CartInteract'
import SecondaryDescription from '../descriptions/SecondaryDescription'
import Thumbnail from '../thumbnail/Thumbnail'
import './CardDetails.scss'

interface CardDetailsProps {
  class: string
}

export class CardDetails extends Component<CardDetailsProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Thumbnail
          class="card-img1"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <SecondaryDescription class="description" />
        <CartInteract class="card-interact" />
      </div>
    )
  }
}

export default CardDetails