import React from 'react';
import { StickyContainer } from 'react-sticky';
import './index.scss'

import favicon from '../images/favicon.png';


const TemplateWrapper = ({ children }) => (
  <div>
    
    <StickyContainer>
      <div>
        {children()}
      </div>
      {/* <SiteFooter /> */}
    </StickyContainer>
  </div>
)

export default TemplateWrapper
