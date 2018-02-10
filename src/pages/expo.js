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
            <Columns>
              <Column isSize={8} isOffset={2}>
                <img src="/images/icon-expo.png" width="150"/>
                <h2 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.5)' }}>Call for Project Exhibitions</h2>
                <Content hasTextColor="light" hasTextAlign="left">
                  We welcome you to submit projects for the EXPO showcase at this year’s InfoCamp! 
                  We invite student-led projects that are based on our theme of Augmented Society.  Examples of project areas are Virtual Reality, Augmented Reality, Internet of Things, Blockchain and cryptocurrencies, Biosensing, Bot technology, Machine Learning and more.
                </Content>
                <a href="#submit"><Button isColor="warning" type="submit" value="submit" style={{ width: '300px' }}>Submit Project</Button></a>
              </Column>
            </Columns>
          </Container>
        </Section>
      </div>
      
      <a name="about" style={linkedAnchorStyle}></a>
      <Section style={{ backgroundColor: '#333744' }}>
        <Container hasTextAlign="centered">
          <Columns>
            <Column isSize={8} isOffset={2}>
              <Title tag="h2" hasTextColor="light">What is InfoCamp?</Title>
              <Content hasTextColor="light" hasTextAlign="left">
                Infocamp is an annual conference held at the School of Information, UC Berkeley. This year’s theme is Augmenting Society, when bits and atoms come together. As the distinction between the digital and physical realm becomes ever thinner, the reality of an augmented society emerges. We at the School of Information of UC Berkeley are eager to dive deep into the intricacies of how the two affect each other, explore the extent to which they dominate each other and appreciate how they complement each other. Through a day of keynotes, panel discussions, EXPOs, technical deep dive talks and more, we are pumped to engage every student, every speaker and every expert attending the conference in an intellectual rhythmic saga of Bits and Atoms. Learn more about infocamp <a href="/#about">Here</a>
                
              </Content>

              <Title tag="h2" hasTextColor="light">Why participate in the EXPO?</Title>
              <Content hasTextColor="light" hasTextAlign="left">
                InfoCamp usually draws over 150 professionals, students, and entrepreneurs across a wide range of sectors who work in roles in data science, UX design, product management, policy, security, and software engineering.
                You and one other member of your team get free tickets to InfoCamp 2018. (We are unable to cover travel costs for attendees this year)
                Your work gets to be seen by our distinguished guests and conference attendees. 
                You get an opportunity to network with potential collaborators.
              </Content>

              <a name="submit" style={linkedAnchorStyle}></a>
              <Title tag="h2" hasTextColor="light">Submission Guidelines</Title>
              <Content hasTextColor="light" hasTextAlign="left">
              We welcome written proposals(~200 words), digital images, or web links that explain or demonstrate your project concept. It should cover:<br />
                {/*
                <ul>
                  <li>Project overview</li>
                  <li>Affiliations</li>
                  <li>Contributors</li>
                  <li>At what stage is the project e.g. concept stage or test or live stage.</li>
                </ul>
                */}
              </Content>

              <Content hasTextColor="light" hasTextAlign="left">
              Please submit your proposal through this <a href="https://goo.gl/forms/Wl32H3hd8O5mz6Tc2">form</a>.
              </Content>

              <Title tag="h2" hasTextColor="light">Important Dates</Title>
              <Content hasTextColor="light" hasTextAlign="left">
                Call for Projects Announced&nbsp;&nbsp;&nbsp;&nbsp;Feb 5th 2018<br />
                Submission Deadline&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feb 25th 2018<br />
                Exhibitors Announced&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Early Mar 2018<br />
                Infocamp 2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mar 17th 2018<br />
              </Content>

              <Title tag="h2" hasTextColor="light">Facilities</Title>
              <Content hasTextColor="light" hasTextAlign="left">
              Demonstrators will be provided with a table, poster board, power outlet and wireless (shared) Internet. Demo presenters are expected to bring with themselves everything else needed for their demo, such as hardware, laptops, sensors, PCs, etc. However if you have special requests such as a larger space, special lighting conditions and so on, we will do our best to arrange them. 
              </Content>

              <Title tag="h2" hasTextColor="light">
              Contact
              </Title>
              <Content hasTextColor="light" hasTextAlign="centered">
                Eve Mwangi, evelyn_mwangi@berkeley.edu<br />
              </Content>

            </Column>
          </Columns>
        </Container>
      </Section>    
    </div>)
  }

}

export default IndexPage
