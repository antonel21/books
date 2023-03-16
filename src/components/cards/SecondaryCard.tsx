import React, { Component } from 'react'
import CardDetails from '../cardDetails/CardDetails'
import Header from '../header/Header'
import './SecondaryCard.scss'

interface SecondaryCardProps {
  class: string
}

export class SecondaryCard extends Component<SecondaryCardProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Header class="card-header" />
        <CardDetails class="card-details" />
      </div>
    )
  }
}

export default SecondaryCard
