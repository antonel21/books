import React, { Component } from 'react'

interface DescriptionProps {
  class: string
  children: any
}

export class Description extends Component<DescriptionProps> {
  render() {
    return <div className={this.props.class}>{this.props.children}</div>
  }
}

export default Description
