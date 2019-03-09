import React from 'react'
import '..//index.scss'
import logo from '../images/infocamp-logo-montserrat.svg'

import { Section, Columns, Column, Button } from 'bloomer';

const linkedAnchorStyle = { position: 'absolute', marginTop: '-140px' }

class IndexPage extends React.Component {
  
  componentDidMount() {
    if(window) {
      const hash = window.location.hash
      if(hash) {
        setTimeout(() => {
          let anchor = document.getElementById(`anchor-${hash.substring(1)}`)
          window.scrollTo(0, anchor.offsetTop)
        })
      }
    }
  }

  render() {
    return (<div>
      <div style={{ position: 'relative' }}>
        <Section style={{ 
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          height: '100vh'
        }} isPaddingless={true} >
        <Column className='main' style={{
            textAlign: 'center',
            flex: '1',
            marginTop: '130px',
             }}>
            <img src={logo}/>
            <div className='details-container'>
            <div className='save-the-date'>
              <div className='date'
              style={{ 
                lineHeight: '125px',
                fontSize: '72px',
                fontWeight: '900',
                textTransform: 'uppercase',
                color: '#ED203D'
                 }} >Mar 16, 2019</div>
            </div>
            <Column isOffset={3} isSize={6} >
              <div className='details'
              style={{ 
                textAlign:'justify',
                marginTop: '20px',
                lineHeight: '28px',
                fontSize: '16px',
                }}>InfoCamp, in its 9th year, is the premier student-run conference for the information community. Held on the UC Berkeley campus at the School of Information, InfoCamp is a day-long event that aims to educate, inform, and inspire new ways of thinking among the information community.</div>
                <Column style={{
                  textAlign: 'center'
                }}>
                <Button style={{ 
                  border: '2px solid white',
                  borderRadius: '0',
                  textDecoration: 'none'
                }} isColor='white' isOutlined href="https://tinyurl.com/infocamp2019tickets">Get Your Ticket.</Button>
                </Column>
                
            </Column>
            <Column className='agenda' 
                style={{
                  textAlign: 'center',
                  flex: '1', 
                  marginTop: '80px',
                }}>
                <div
                  style={{ 
                    lineHeight: '125px',
                    fontSize: '72px',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    color: '#ED203D'
                 }} >Agenda</div>
                 <Column isOffset={4} isSize={4}
                 style={{
                   textAlign: 'start'
                 }}
                 >
                  <Columns isCentered>
                    <Column isSize="1/3">9:10 - 9:20</Column>
                    <Column isSize="2/3">Intro</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">9:20 - 9:45</Column>
                    <Column isSize="2/3">Keynote</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">9:45 - 11:00</Column>
                    <Column isSize="2/3">Panel - Understanding Users</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">11:00 - 11:15</Column>
                    <Column isSize="2/3">Break</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">11:15 - 12:00</Column>
                    <Column isSize="2/3">Unconference</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">12:00 - 1:00</Column>
                    <Column isSize="2/3">Panel - Online Communities</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">1:00 - 2:00</Column>
                    <Column isSize="2/3">Lunch</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">2:00 - 3:00</Column>
                    <Column isSize="2/3">In-Depth Talk: HCI</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">3:00 - 4:00</Column>
                    <Column isSize="2/3">In-Depth Talk: Data</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">4:00 - 5:00</Column>
                    <Column isSize="2/3">In-Depth Talk: Ethics/Policy</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">2:00 - 5:00</Column>
                    <Column isSize="2/3">The Idea Room (With Refreshments)</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">5:00 - 5:30</Column>
                    <Column isSize="2/3">Closing Remarks</Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize="1/3">5:30 - 6:00</Column>
                    <Column isSize="2/3">Mixer</Column>
                  </Columns>
                 </Column>
                </Column>
                <Column
                isOffset={2}
                isSize={8}
                className='speakers' 
                style={{
                  textAlign: 'center',
                  flex: '1', 
                  marginTop: '80px',
                }}>
                <div
                  style={{ 
                    lineHeight: '125px',
                    fontSize: '72px',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    color: '#ED203D'
                 }} >Speakers</div>
                 <Column>
                  <h2>Keynote</h2>
                  <img src="../images/speakers/Krys-Blackwood-1.jpg"/>
                  <h3>Krys Blackwood</h3>
                  <p>Senior Lead UX Designer<br/> at JPL</p>
                 </Column>
                 <Column>
                  <h2>Panel - Understanding Users</h2>
                  <Columns isCentered>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Emon-Motamedi-1.jpg"/>
                    <h3>Emon Motamedi</h3>
                    <p>Senior Product Manager<br/> at Reddit</p>
                  </Column>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Jessica-Strick-1.jpg"/>
                    <h3>Jessica Strick</h3>
                    <p>Lead Exhibit Developer<br/> at The Exploratorium</p>
                  </Column>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Eric-Schlakman-1.jpg"/>
                    <h3>Eric Schlakman</h3>
                    <p>Product & Marketing <br/> Content at Stripe</p>
                  </Column>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Krys-Blackwood-1.jpg"/>
                    <h3>Krys Blackwood</h3>
                    <p>Senior Lead UX Designer<br/> at JPL</p>
                  </Column>
                 </Columns>
                 </Column>
                 <Column>
                  <h2>Panel - Online Communities</h2>
                  <Columns isCentered>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Brandon-Harris-1.jpg"/>
                    <h3>Brandon Harris</h3>
                    <p>Leade UI Engineer at JOINGO; <br/> Instructor at General Assembly</p>
                  </Column>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Sonya-Mann-1.jpg"/>
                    <h3>Sonya Mann</h3>
                    <p>Communications Manager<br/> at ZCash Foundation</p>
                  </Column>
                  </Columns>
                 </Column>
                 <Column>
                  <h2>In-Depth Talk: HCI</h2>
                  <Columns isCentered>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Tico-Ballagas-1.jpg"/>
                    <h3>Dr. Tico Ballagas</h3>
                    <p>Senior Manager of the Immersive Experience Lab <br/> at HP Labs</p>
                  </Column>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Noura-Howell-1.jpg"/>
                    <h3>Noura Howell</h3>
                    <p>PhD Candidate <br/> at the UC Berkeley School of Information</p>
                  </Column>
                  </Columns>
                 </Column>
                 <Column>
                  <h2>In-Depth Talk: Data</h2>
                  <Columns isCentered>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Michelle-Carney-1.jpg"/>
                    <h3>Michelle Carney</h3>
                    <p>ML + UX at Amazon Music; <br/> Lecturer at Stanford d.school</p>
                  </Column>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Anand-Rajagopal-1.jpg"/>
                    <h3>Anand Rajagopal</h3>
                    <p>Data Scientist <br/> at Autodesk</p>
                  </Column>
                  </Columns>
                 </Column>
                 <Column>
                  <h2>In-Depth Talk: Ethics/Policy</h2>
                  <img src="../images/speakers/Chirantan-Chatterjee-1.jpg"/>
                    <h3>Chirantan Chatterjee</h3>
                    <p>Fellow at Hoover Institution, Stanford</p>
                 </Column>
                </Column>
              <Column isPaddingless className='ideaRoom' 
              style={{
                textAlign: 'center',
                flex: '1', 
                marginTop: '80px',
              }}>
              <div
                style={{ 
                  lineHeight: '125px',
                  fontSize: '72px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  color: '#ED203D'
                }}>
                  The Idea Room
                </div>
                <img src="../images/idea-2.jpg"/>
                <img src="../images/idea-4.jpg"/>
                  <Column isOffset={2} isSize={8} >
                    <div className='details'
                      style={{ 
                        textAlign:'justify',
                        marginTop: '10px',
                        lineHeight: '28px',
                        fontSize: '16px',
                    }}>Ideas evolve. With each change of hands, circumstances, or requirements, a project can be completely unrecognizable from how it began. Through The Idea Room, we seek to simulate this process in a controlled environment. Over the course of 3 hours, we will explore 3 different scenarios and how each affects the development of 6 different products in 30 minute iterations.</div>
                  </Column>
                </Column>
                <Column isPaddingless className='RSVP' 
              style={{
                textAlign: 'center',
                flex: '1', 
                marginTop: '80px',
              }}>
              <div
                style={{ 
                  lineHeight: '125px',
                  fontSize: '72px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  color: '#ED203D'
                }}>
                  RSVP
                </div>
                <Columns isCentered>
                <Column isSize={2} >
                    <div className='details'
                      style={{ 
                        textAlign:'center',
                        lineHeight: '28px',
                        fontSize: '16px',
                    }}>Mar 16 2019</div>
                    <div className='details'
                      style={{ 
                        textAlign:'center',
                        lineHeight: '28px',
                        fontSize: '16px',
                    }}>9:00 AM - 6:30 PM</div>
                    <div className='details'
                      style={{ 
                        textAlign:'center',
                        lineHeight: '28px',
                        fontSize: '16px',
                    }}>South Hall, UC Berkeley</div>
                    <Button style={{ 
                  border: '2px solid white',
                  marginTop: '30px',
                  borderRadius: '0',
                  textDecoration: 'none'
                }} isColor='white' isOutlined href="https://tinyurl.com/infocamp2019tickets">Get Your Ticket.</Button>

                  </Column>
                </Columns>
                <Columns style={{
                  textDecoration: 'none',
                  marginTop: '30px',
                }} isCentered>
                <Column>
                <h3>Contact: <a style={{textDecoration: 'none'}} href="mailto:imsa@ischool.berkeley.edu">imsa@ischool.berkeley.edu</a></h3>
                </Column>
                </Columns>
                <Column>
                <h3>Sponsored by</h3>
                <Columns style={{
                  marginTop: '30px',
                }} isCentered>
                <Column>
                  <img src="../images/pwc_logo.png"/>
                </Column>
                <Column>
                <img src="../images/wells-fargo-logo.png"/>
                </Column>
                <Column>
                <img src="../images/CLTC_logo.png"/>
                </Column>
                </Columns>
                <Columns isCentered>
                <Column>
                <img src="../images/crowdstrike_logo.png"/>
                </Column>
                <Column>
                <img src="../images/Facebook_logo.png"/>
                </Column>
                </Columns>
                </Column>
              </Column>
            </div>
              <div className="foot" style={{marginTop: '76px', paddingBottom: '114px'}}>
              <Columns>
                <Column isSize='6'>
                  <div className='email-location' style={{ float: 'left', textAlign: 'left'}}>
                    <div className='email'>Email: imsa@ischool.berkeley.edu</div>
                    <div className='location'>Location: South Hall Berkeley, CA 94704</div>
                  </div>
                </Column>
                
                <Column isSize='6'>
                  <div className='copyright-stuff' style={{ float: 'right', textAlign: 'right'}}>
                    <div className='copyright'>© 2019 by Information Management Student Association (IMSA)</div>
                    <div className='stuff'>All Rights Reserved</div>
                  </div>
                </Column>
              </Columns>
              </div>
          </Column>

        </Section>
      </div>

    
        
    </div>)
  }

}

export default IndexPage
