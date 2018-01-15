import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { slide as Menu } from 'react-burger-menu'
import { Footer, Columns, Column, Content, Container  } from 'bloomer';

import './index.scss'

const Header = () => (
  <div
    style={{
      background: 'rgb(35,47,79)',
      color: 'white',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '18px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          InfoCamp Berkeley 2018
        </Link>
      </h1>
    </div>
  </div>
)

const SideMenu = () => (
  <Menu right>
    <Link id="home" className="menu-item" to="/">Home</Link>
    <Link id="about" className="menu-item" to="/about">About</Link>
    <Link id="contact" className="menu-item" to="/tickets">Tickets</Link>
    <Link className="menu-item--small" to="/faq">FAQ</Link>
  </Menu>
)

const SiteFooter = () => (
  <Footer id="footer">
    <Container hasTextAlign="centered">
      <Content>
        <Columns>
          <Column isFull>
            <p>
                Made with ❤️
                by <a href="https://ischool.berkeley.edu">I-School</a>
            </p>
          </Column>
        </Columns>
        <Content isSize='small'>
          <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
          <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
        </Content>
      </Content>
    </Container>
  </Footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <SideMenu />
    <Header />
    <div>
      {children()}
    </div>
    <SiteFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
