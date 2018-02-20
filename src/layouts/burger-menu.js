import React from 'react'
import links from '../content/links.json'
import { elastic as Menu } from 'react-burger-menu'

const BurgerMenu = (props) => (
  <Menu>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/#about">About</a>
        <ul>
          <li>
            <a href="/#about" style={{ color: '#cccccc' }}>About Infocamp</a>
          </li>
          <li>
            <a href="/#sponsors" style={{ color: '#cccccc' }}>Sponsors</a>
          </li>
          <li>
            <a href="/#faqs" style={{ color: '#cccccc' }}>FAQs</a>
          </li>
        </ul>
      </li>
      <li><a href="/#schedule">Schedule</a></li>
      <li><a href="/#speakers">Speakers</a></li>
      <li><a href={links.tickets}>Tickets</a></li>
      <li><a href="/expo">Expo</a></li>
      <li><a href="/unconference">Unconference</a></li>
    </ul>
  </Menu>
)

export default BurgerMenu