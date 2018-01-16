import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import sponsorsData from '../content/sponsors.json'
import SponsorList from '../components/sponsor-list'
import { Container, Section, Columns, Column, Content, Button } from 'bloomer';

const IndexPage = () => (
  <div>
    <div style={{
        backgroundImage: `url(${withPrefix('/images/pawel-nolbert-291146.jpg')})`,
        backgroundSize: 'cover' 
    }}>
      <Section style={{ backgroundColor: 'rgba(35,47,79,0.75)', color: 'white'}}>
        <Container hasTextAlign="centered">
          <h1>Augmented Societies</h1>
          <p>Saturday March 17, 2018<br /> South Hall, Berkeley</p>
          <Button isSize="large" isColor="info">Get Tickets</Button><br />
          <br />
          <Link to="/page-2/">Learn More</Link>
        </Container>
      </Section>
    </div>

    <Section>
      {/* Speakers goes here */}
    </Section>

    <Section>
      {/* Agenda goes here */}
    </Section>

    <Section>
      <Container hasTextAlign="centered">
        <h2>Sponsors</h2>
        <SponsorList sponsors={sponsorsData}/>
      </Container>
    </Section>
      
  </div>
)

export default IndexPage
