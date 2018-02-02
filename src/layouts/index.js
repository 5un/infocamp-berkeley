import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { slide as Menu } from 'react-burger-menu'
import { Footer, Columns, Column, Content, Container  } from 'bloomer';
import './index.scss'
import Header from './header'
import SiteFooter from './footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="INFOCAMP Berkeley 2018"
      meta={[
        { name: 'description', content: 'InfoCamp Berkeley 2018 will be held on March 17, 2018 at South Hall, University of California, Berkeley' },
        { name: 'keywords', content: 'InfoCamp, unconference, event, information science, datascience, design, society' },
      ]}
    />
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
