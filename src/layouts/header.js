import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarBurger, NavbarMenu, NavbarStart, NavbarLink, 
  NavbarDropdown, NavbarEnd, NavbarDivider, Button, Field, Control } from 'bloomer';

export default class Header extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  onClickNav() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (<Navbar style={{ backgroundColor: 'transparent', margin: '0' }}>
      <NavbarBrand>
          <NavbarItem style={{ fontWeight: 'bold' }}>
            <img src="" style={{ marginRight: 5 }} /> InfoCamp Berkeley 2018
          </NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav.bind(this)} />
      </NavbarBrand>
      <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav.bind(this)}>
        <NavbarEnd>
            <NavbarItem href='#/'>Tickets</NavbarItem>
            <NavbarItem href='#/'>Unconference</NavbarItem>
            <NavbarItem href='#/'>FAQ</NavbarItem>
            {/*
            <NavbarItem hasDropdown isHoverable>
                <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                <NavbarDropdown>
                    <NavbarItem href='#/'>One A</NavbarItem>
                    <NavbarItem href='#/'>Two B</NavbarItem>
                    <NavbarDivider />
                    <NavbarItem href='#/'>Two A</NavbarItem>
                </NavbarDropdown>
            </NavbarItem>
            */}
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>)
  }
}