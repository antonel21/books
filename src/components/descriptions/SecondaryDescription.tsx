import React, { Component } from 'react'
import Caption from '../caption/Caption'
import './SecondaryDescription.scss'

interface SecondaryDescriptionProps {
  class: string
}

export class SecondaryDescription extends Component<SecondaryDescriptionProps> {
  render() {
    return (
      <div className={this.props.class}>
        <Caption class="desc1" title="Harry Potter" />
        <Caption class="desc2" title="Test test" />
        <Caption class="desc3" title="test" />
        <Caption class="desc4" title="test" />
      </div>
    )
  }
}

export default SecondaryDescription
