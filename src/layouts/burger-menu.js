import React from 'react'
import links from '../content/links.json'
import { elastic as Menu } from 'react-burger-menu'

export default class BurgerMenu extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleMenuClicked() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <Menu isOpen={this.state.isOpen}>
        <ul>
          <li><a href="/" onClick={this.handleMenuClicked.bind(this)}>Home</a></li>
          <li><a href="/#about">About</a>
            <ul>
              <li>
                <a href="/#about" style={{ color: '#cccccc' }} onClick={this.handleMenuClicked.bind(this)}>About Infocamp</a>
              </li>
              <li>
                <a href="/#sponsors" style={{ color: '#cccccc' }} onClick={this.handleMenuClicked.bind(this)}>Sponsors</a>
              </li>
              <li>
                <a href="/faqs" style={{ color: '#cccccc' }} onClick={this.handleMenuClicked.bind(this)}>FAQs</a>
              </li>
            </ul>
          </li>
          <li><a href="/#schedule" onClick={this.handleMenuClicked.bind(this)}>Schedule</a></li>
          <li><a href="/#speakers" onClick={this.handleMenuClicked.bind(this)}>Speakers</a></li>
          <li><a href={links.tickets} onClick={this.handleMenuClicked.bind(this)}>Tickets</a></li>
          <li><a href="/expo" onClick={this.handleMenuClicked.bind(this)}>Expo</a></li>
          <li><a href="/unconference" onClick={this.handleMenuClicked.bind(this)}>Unconference</a></li>
        </ul>
      </Menu>
    )
  }
}
