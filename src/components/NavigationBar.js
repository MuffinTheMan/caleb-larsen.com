import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// activeClassName will not properly update if this is a PureComponent
class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.sharedProps = {
      activeClassName: 'active',
      exact: true
    };
  }
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <NavLink to='/' {...this.sharedProps}><li>Home</li></NavLink>
          <NavLink to='/about' {...this.sharedProps}><li>About</li></NavLink>
          <NavLink to='/samples' {...this.sharedProps}><li>Samples</li></NavLink>
          <a href='https://github.com/MuffinTheMan/caleb-larsen.com' target='_blank' rel='noopener noreferrer'><li>Source Code</li></a>
        </ul>
      </nav>
    );
  }
}

export default styled(NavigationBar)`
  position: relative;
  z-index: 2;

  ul {
    padding: 0;
    list-style-type: none;

    a {
      &:first-child {
        border-radius: ${props => props.theme.roundedBorders ? '5px 0 0 5px' : '0'};
      }
      &:last-child {
        border-radius: ${props => props.theme.roundedBorders ? '0 5px 5px 0' : '0'};
      }
      &:not(:first-child) {
        border-left: none;
      }

      display: inline-block;
      padding: 10px 30px;
      transition: background-color 300ms;
      border: solid ${props => props.theme.alternatePrimary} 1px;

      &.active, &:hover {
          color: ${props => props.theme.backgroundColor};
          background-color: ${props => props.theme.alternatePrimary};
      }
    }
  }
`;