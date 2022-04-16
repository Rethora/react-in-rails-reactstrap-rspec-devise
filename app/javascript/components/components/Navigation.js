import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                to='/'
                className='nav-link'
              >
                Home
              </NavLink>
            </NavItem>
            {!logged_in &&
              < NavItem >
                <a
                  className='nav-link'
                  href={sign_in_route}
                >
                  Sign In
                </a>
              </NavItem>}
            {!logged_in &&
              <NavItem>
                <a
                  className='nav-link'
                  href={new_user_route}
                >
                  Sign Up
                </a>
              </NavItem>}
            {logged_in &&
              <NavItem>
                <a
                  className='nav-link'
                  href={sign_out_route}
                >
                  Sign Out
                </a>
              </NavItem>
            }
            {logged_in &&
              <NavItem
                className='nav-link'
              >
                <span>logged in as: {current_user.email}</span>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar >
    )
  }
}

export default Navigation
