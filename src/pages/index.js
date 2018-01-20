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
        padding: '200px 0'
      }}>
        <Container hasTextAlign="centered">
          <img src="/images/infocamp-2018-logo.png" style={{ maxWidth: '90%', width: '600px' }} />
          <h1 style={{ textShadow: '0px 2px 10px rgba(51,55,69,0.8)' }}>Augmenting Society</h1>
          <h2 style={{ textShadow: '0px 2px 10px rgba(51,55,69,0.8)' }}>March 17th, 2018 at South Hall</h2>
          <h3 style={{ textShadow: '0px 2px 10px rgba(51,55,69,0.8)' }}>More Information Coming Soon...</h3>
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
