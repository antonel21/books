import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

interface LinkComponentProps {
  navTo: string;
  text: string;
  class: string;
}

class LinkComponent extends Component<LinkComponentProps> {
  render() {
    return (
      <li style={{ listStyle: 'none' }}>
        <NavLink
          style={{ textDecoration: 'none' }}
          className={this.props.class}
          to={this.props.navTo}
        >
          {this.props.text}
        </NavLink>
      </li>
    );
  }
}

export default LinkComponent;
