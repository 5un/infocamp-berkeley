import React from 'react'
import Helmet from 'react-helmet'
import Iframe from 'react-iframe'
import Link, { withPrefix } from 'gatsby-link'
import StickyHeader from '../layouts/sticky-header'
import { Container, Section, Columns, Column, Control, Image, Content, Button, Input, Title } from 'bloomer';

import links from '../content/links.json'

const linkedAnchorStyle = { position: 'absolute', marginTop: '-140px' }

class IndexPage extends React.Component {
  render() {
    return (<div>
      <Section style={{ 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("/images/bg-pattern-01.jpg")',
          color: 'white',
          minHeight: '100vh'
        }} isPaddingless={true} >
        <StickyHeader />
        <Container hasTextAlign="center" style={{ padding: '100px 20px' }}>
          <h4 style={{ textAlign: 'center' }} >Voting is not yet opened. Stay tuned.</h4>
          {/*
          <Columns>
            <Column isSize={10} isOffset={1}>
              <div style={{ textAlign: 'center' }}>
                <a href="https://docs.google.com/spreadsheets/d/13f4vOnU7JBZnKRBf21u4vlicl2ZgEdFHWkviUy7v-HE/edit?usp=sharing">
                  <h3>Link to the description of all pitches</h3>
                </a>
              </div>
              <br />
              <br />
              <Iframe url="https://www.opinionstage.com/polls/2492937/poll"
                width="100%"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen/>
            </Column>
          </Columns>
          */}
        </Container>
      </Section>
    </div>)
  }

}

export default IndexPage
