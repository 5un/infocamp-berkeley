import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import faqsData from '../content/faqs.json'
import FAQS from '../components/faqs'
import StickyHeader from '../layouts/sticky-header'
import { Container, Section, Columns, Column, Control, Image, Content, Button, Input, Title } from 'bloomer';

class FAQSPage extends React.Component {

  render() {
    return (<div>
      <div style={{ position: 'relative' }}>
        <Section style={{ 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("/images/bg-pattern-01.jpg")',
          color: 'white',
          minHeight: '100vh',
        }} isPaddingless={true} >
          <StickyHeader />
          <Container hasTextColor="light" hasTextAlign="left" style={{ paddingTop: '50px' }}>
            <Columns>
              <Column isSize={8} isOffset={2}>
                <Title tag="h2" hasTextColor="light" hasTextAlign="centered" >FAQS</Title>
                <FAQS data={faqsData}/>
              </Column>
            </Columns>
          </Container>
        </Section>
      </div>
      
    </div>)
  }

}

export default FAQSPage
