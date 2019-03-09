import React from 'react'
import Helmet from 'react-helmet'
import { StickyContainer } from 'react-sticky';
import './index.scss'

import favicon from '../images/favicon.png';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="INFOCAMP Berkeley 2019"
      meta={[
        { name: 'description', content: 'InfoCamp Berkeley 2019 will be held on March 17, 2018 at South Hall, University of California, Berkeley' },
        { name: 'keywords', content: 'InfoCamp, uconference, event, information science, datascience, design, society' },
        { name: 'og:url', content: 'https://berkeley-infocamp.org' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'INFOCAMP Berkeley 2018' },
        { name: 'og:description', content: 'InfoCamp Berkeley 2018 will be held on March 17, 2018 at South Hall, University of California, Berkeley' },
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
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
