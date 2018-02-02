import React from 'react'
import Link, { withPrefix } from 'gatsby-link'

import sponsorsData from '../content/sponsors.json'
import speakerData from '../content/speakers.json'
import faqsData from '../content/faqs.json'
import agendaData from '../content/agenda.json'

import SponsorList from '../components/sponsor-list'
import SpeakerList from '../components/speaker-list'
import Agenda from '../components/agenda'
import FAQS from '../components/faqs'

import ThreejsBackdrop from '../components/three-js-backdrop'
import { Container, Section, Columns, Column, Image, Content, Button, Title } from 'bloomer';

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
          
          <form action="https://infocamp.us2.list-manage.com/subscribe/post?u=536179e4b2849e96e841012a4&amp;id=36f8a21dd2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
            <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_536179e4b2849e96e841012a4_36f8a21dd2" tabindex="-1" value=""/>
            </div>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>


          {/*
          <Button isSize="large" isColor="info">Get Tickets</Button><br />
          <br />
          <Link to="/page-2/">Learn More</Link>
          */}
        </Container>
      </Section>
    </div>
    
    <Section style={{ backgroundColor: '#333744' }}>
      <Container hasTextAlign="centered">
        <Title tag="h2" hasTextColor="light">About Infocamp 2018</Title>
        
        <Content hasTextColor="light" hasTextAlign="left">
          <p>As the distinction between the digital and physical realm becomes ever thinner, the reality of an augmented society emerges. We at the UC Berkeley School of Information are eager to dive deep into the intricacies of how the two affect each other, explore the extent to which they dominate each other and appreciate how they complement each other. 
          </p>

          <p>Can the IOT connect more sensors than the number of people Facebook connects today? Will there be a time when chatbots will be penalised for breaking laws? Do we need to take special precautions when designing our boundary-pushing VR worlds? Bits and TeraBytes or Bits and Bitcoins? Will there ever be a scale to measure if emerging technology is constructive or destructive? Can artificial intelligence beat real brains? Is this dependency on machines a vicious cycle that would witness our future generations going back to primitive lives as we burst this bubble and find meaning in traditional ways.
          </p>

          <p>Here at the School of Information, we are constantly intrigued by these discussions. Through InfoCamp 2018, we aim to take a variety of approaches to find the answers to these ambiguities by engaging with industry experts, social enthusiasts and academic scholars. As data fanatics, we are also extremely keen to hear out our audience through an unconference - a series of impromptu idea sessions. Throughout the day we will have keynotes, panel discussions, technical deep dive talks, EXPOs and more.  We are thrilled to engage every student, every speaker and every expert attending InfoCamp 2018  in an intellectual rhythmic saga of bits and atoms, to this year’s theme of Augmenting Society.
          </p>
        </Content>

      </Container>
    </Section>

    <Section>
      <Container hasTextAlign="centered">
         <Title tag="h2" hasTextColor="dark">Speakers</Title>
        <p>Coming Soon.</p>
        {/*
        <SpeakerList speakers={speakerData}/>
        */}
      </Container>
    </Section>

    <Section style={{ backgroundColor: '#ED5E61' }}>
      <Container hasTextAlign="centered">
        <Title tag="h2" hasTextColor="light">Schedule</Title>
        <Content hasTextColor="light">
          <Agenda data={agendaData} />
        </Content>
      </Container>
    </Section>

    <Section style={{ backgroundColor: '#EFAD3B' }}>
      <Container hasTextAlign="centered">
        <Title tag="h2" hasTextColor="light">Register</Title>
        <Columns>
          <Column isSize="1/3" hasTextAlign="center">
            <img src="/images/icon-unconference.png" />
            <div>
              Unconference
            </div>
          </Column>
          <Column isSize="1/3" hasTextAlign="center">
            <img src="/images/icon-tickets.png" />
            <div>
              Tickets
            </div>
          </Column>
          <Column isSize="1/3" hasTextAlign="center">
            <img src="/images/icon-expo.png"/>
            <div>
              Expo
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container hasTextAlign="centered">
        <Title tag="h2" hasTextColor="dark">Sponsors</Title>
        <p>Coming Soon.</p>
        {/*
        <SponsorList sponsors={sponsorsData}/>
        */}
      </Container>
    </Section>
    
    <Section style={{ backgroundColor: '#333744' }}>
      <Container hasTextAlign="centered">
        <Title tag="h2" hasTextColor="light">FAQS</Title>
        <Content hasTextColor="light" hasTextAlign="left">
          <FAQS data={faqsData}/>
        </Content>
      </Container>
    </Section>
      
  </div>
)

export default IndexPage
