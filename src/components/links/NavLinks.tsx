import React, { Component } from 'react';
import LinkComponent from './LinkComponent';
import { links } from '../../constants/constants';

interface NavLinksProps {
  class: string;
}

class NavLinks extends Component<NavLinksProps> {
  render() {
    return (
      <ul className={this.props.class}>
        {links.map((link, index) => {
          return (
            <LinkComponent key={index} navTo={link.url} text={link.text} />
          );
        })}
      </ul>
    );
  }
}

export default NavLinks;
