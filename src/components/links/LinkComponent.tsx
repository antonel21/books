import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LinkComponent.scss';

interface LinkComponentProps {
  navTo: string;
  text: string;
  class?: string;
}

class LinkComponent extends Component<LinkComponentProps> {
  render() {
    return (
      <li style={{ listStyle: 'none' }}>
        <NavLink
          style={{ textDecoration: 'none' }}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : 'pending'
          }
          to={this.props.navTo}
        >
          {this.props.text}
        </NavLink>
      </li>
    );
  }
}

export default LinkComponent;
