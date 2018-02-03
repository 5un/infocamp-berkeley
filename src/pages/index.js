import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import ScrollableAnchor from 'react-scrollable-anchor'

import sponsorsData from '../content/sponsors.json'
import speakerData from '../content/speakers.json'
import faqsData from '../content/faqs.json'
import agendaData from '../content/agenda.json'

import SponsorList from '../components/sponsor-list'
import SpeakerList from '../components/speaker-list'
import Agenda from '../components/agenda'
import FAQS from '../components/faqs'

import StickyHeader from '../layouts/sticky-header'
import ThreejsBackdrop from '../components/three-js-backdrop'
import { Container, Section, Columns, Column, Control, Image, Content, Button, Input, Title } from 'bloomer';

const linkedAnchorStyle = { position: 'absolute', marginTop: '-140px' }

class IndexPage extends React.Component {
  render() {
    return (<div>
      <div style={{ position: 'relative' }}>
        <ThreejsBackdrop style={{ position: 'absolute', left: 0, top: 0 }}/>
        <Section style={{ 
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          backgroundColor: 'rgba(51,55,69,0.60)',
          color: 'white',
          height: '100vh'
        }} isPaddingless={true} >
          <StickyHeader />
          <Container hasTextAlign="centered" style={{ marginTop: '100px' }}>
            <h2 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.5)' }}>Augmenting Society</h2>
            <h3 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.2)' }}>March 17th, 2018 at South Hall</h3>
            <h4 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.2)', marginBottom: '10px' }}>Sign up for updates</h4>
            
            <form action="https://infocamp.us2.list-manage.com/subscribe/post?u=536179e4b2849e96e841012a4&amp;id=36f8a21dd2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
              <Input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required style={{ marginBottom: '10px', width: '300px' }}/>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <Input type="text" name="b_536179e4b2849e96e841012a4_36f8a21dd2" tabIndex="-1" value=""/>
              </div>
              <div className="clear">
                <Button isColor="warning" type="submit" value="submit" style={{ width: '300px' }}>Subscribe</Button>
              </div>
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
      
      <a name="about" style={linkedAnchorStyle}></a>
      <Section style={{ backgroundColor: '#333744' }}>
        <Container hasTextAlign="centered">
          <Columns>
            <Column isSize={8} isOffset={2}>
              <Title tag="h2" hasTextColor="light">About Infocamp 2018</Title>
              
              <Content hasTextColor="light" hasTextAlign="left">
                <p>As the distinction between the digital and physical realm becomes ever thinner, the reality of an augmented society emerges. We at the UC Berkeley School of Information are eager to dive deep into the intricacies of how the two affect each other, explore the extent to which they dominate each other and appreciate how they complement each other. 
                </p>

                <p>Can the IOT connect more sensors than the number of people Facebook connects today? Will there be a time when chatbots will be penalised for breaking laws? Do we need to take special precautions when designing our boundary-pushing VR worlds? Bits and TeraBytes or Bits and Bitcoins? Will there ever be a scale to measure if emerging technology is constructive or destructive? Can artificial intelligence beat real brains? Is this dependency on machines a vicious cycle that would witness our future generations going back to primitive lives as we burst this bubble and find meaning in traditional ways.
                </p>

                <p>Here at the School of Information, we are constantly intrigued by these discussions. Through InfoCamp 2018, we aim to take a variety of approaches to find the answers to these ambiguities by engaging with industry experts, social enthusiasts and academic scholars. As data fanatics, we are also extremely keen to hear out our audience through an unconference - a series of impromptu idea sessions. Throughout the day we will have keynotes, panel discussions, technical deep dive talks, EXPOs and more.  We are thrilled to engage every student, every speaker and every expert attending InfoCamp 2018  in an intellectual rhythmic saga of bits and atoms, to this year’s theme of Augmenting Society.
                </p>
              </Content>
            </Column>
          </Columns>
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

      <a name="schedule" style={linkedAnchorStyle}></a>
      <Section style={{ backgroundColor: '#ED5E61' }}>
        <Container hasTextAlign="centered">
          <Title tag="h2" hasTextColor="light">Schedule</Title>
          <Content hasTextColor="light">
            <Agenda data={agendaData} />
          </Content>
        </Container>
      </Section>

      <a name="register" style={linkedAnchorStyle}></a>
      <Section style={{ backgroundColor: '#EFAD3B' }}>
        <Container hasTextAlign="centered">
          <Title tag="h2" hasTextColor="light">Register</Title>
          <Columns>
            <Column isSize="1/3" hasTextAlign="center">
              <img src="/images/icon-unconference.png" width="150"/>
              <Title tag="h4" isSize={6} hasTextColor="light">
                Unconference<br/>
                (To be announced)
              </Title>
            </Column>
            <Column isSize="1/3" hasTextAlign="center">
              <a href="https://www.eventbrite.com/e/infocamp-2018-tickets-42729120951?utm_source=eb_email&utm_medium=email&utm_campaign=new_event_email&utm_term=viewmyevent_button">
                <img src="/images/icon-tickets.png" width="150"/>
                <Title tag="h4" isSize={6} hasTextColor="light">
                  Tickets
                </Title>
              </a>
            </Column>
            <Column isSize="1/3" hasTextAlign="center">
              <img src="/images/icon-expo.png" width="150"/>
              <Title tag="h4" isSize={6} hasTextColor="light">
                Expo<br />
                (To be announced)
              </Title>
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
      
      <a name="faqs" style={linkedAnchorStyle}></a>
      <Section style={{ backgroundColor: '#333744' }}>
        <Container hasTextColor="light" hasTextAlign="left">
          <Columns>
            <Column isSize={8} isOffset={2}>
              <Title tag="h2" hasTextColor="light" hasTextAlign="centered" >FAQS</Title>
              <FAQS data={faqsData}/>
            </Column>
          </Columns>
        </Container>
      </Section>
        
    </div>)
  }

}

export default IndexPage
