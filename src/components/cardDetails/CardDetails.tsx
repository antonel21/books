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
        <Thumbnail class="card-img1" src={''} alt="" />
        <SecondaryDescription />
        <CartInteract class="card-interact" />
      </div>
    )
  }
}

export default CardDetails
