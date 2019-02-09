import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StickyContainer } from 'react-sticky';
import BurgerMenu from './burger-menu'
import { Breakpoint } from 'react-responsive-grid'
import { Footer, Columns, Column, Content, Container } from 'bloomer';
import './index.scss'
import Header from './header'
import SiteFooter from './footer'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="INFOCAMP Berkeley 2018"
      meta={[
        { name: 'description', content: 'InfoCamp Berkeley 2018 will be held on March 17, 2018 at South Hall, University of California, Berkeley' },
        { name: 'keywords', content: 'InfoCamp, uconference, event, information science, datascience, design, society' },
        { name: 'og:url', content: 'https://berkeley-infocamp.org' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'INFOCAMP Berkeley 2018' },
        { name: 'og:description', content: 'InfoCamp Berkeley 2018 will be held on March 17, 2018 at South Hall, University of California, Berkeley' },
        { name: 'og:image', content: 'https://berkeley-infocamp.org/images/fbog-infocamp-2018.png' },
      ]}
    />
    <StickyContainer>
      <div>
        {children()}
      </div>
      {/* <SiteFooter /> */}
    </StickyContainer>
  </div>
)

export default TemplateWrapper
