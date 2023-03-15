import React, { Component } from 'react'
import LinkComponent from './LinkComponent'
import { links } from '../../constants/constants'
import './NavLink.scss'

interface NavLinksProps {
  class: string
}

class NavLinks extends Component<NavLinksProps> {
  render() {
    return (
      <ul className={this.props.class}>
        {links.map((link, index) => {
          return (
            <LinkComponent
              key={index}
              navTo={link.url}
              text={link.text}
              class="nav-link"
            />
          )
        })}
      </ul>
    )
  }
}

export default NavLinks
