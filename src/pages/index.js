import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import sponsorsData from '../content/sponsors.json'
import SponsorList from '../components/sponsor-list'
import ThreejsBackdrop from '../components/three-js-backdrop'
import { Container, Section, Columns, Column, Content, Button } from 'bloomer';

const IndexPage = () => (
  <div>
    <div style={{ position: 'relative', marginTop: '-52px' }}>
      <ThreejsBackdrop style={{ position: 'absolute', left: 0, top: 0 }}/>
      <Section style={{ 
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        backgroundColor: 'rgba(51,55,69,0.60)',
        color: 'white',
        height: '100vh',
        padding: '20vh 20px'
      }}>
        <Container hasTextAlign="centered">
          <img src="/images/infocamp-2018-logo.png" style={{ maxWidth: '100%', width: '600px' }} />
          <h1 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.5)' }}>Augmenting Society</h1>
          <h2 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.2)' }}>March 17th, 2018 at South Hall</h2>
          <span style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.2)' }}>More Information Coming Soon...</span>
          {/*
          <Button isSize="large" isColor="info">Get Tickets</Button><br />
          <br />
          <Link to="/page-2/">Learn More</Link>
          */}
        </Container>
      </Section>
    </div>
    
    {/*
    <Section>
    </Section>

    <Section>
    </Section>

    <Section>
      <Container hasTextAlign="centered">
        <h2>Sponsors</h2>
        <SponsorList sponsors={sponsorsData}/>
      </Container>
    </Section>
    */}
    
      
  </div>
)

export default IndexPage
