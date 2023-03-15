import React, { Component } from 'react'

interface CardProps {
  class: string
  children: any
}

export class Card extends Component<CardProps> {
  render() {
    return <div className={this.props.class}>{this.props.children}</div>
  }
}

export default Card
