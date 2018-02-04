import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StickyContainer } from 'react-sticky';
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
        { name: 'keywords', content: 'InfoCamp, uconference, event, information science, datascience, design, society' },
        { name: 'og:url', content: 'https://berkeley-infocamp.org' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'INFOCAMP Berkeley 2018' },
        { name: 'og:description', content: 'Join us at Infocamp 2018 on March 17, 2018 for a lively exploration into the impact of emerging technologies on society.' },
        { name: 'og:image', content: 'https://berkeley-infocamp.org/images/fbog-infocamp-2018.png' },
      ]}
    />
    <StickyContainer>
      <div>
        {children()}
      </div>
      <SiteFooter />
    </StickyContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
