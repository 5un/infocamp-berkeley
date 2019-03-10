import React from 'react'
import '..//index.scss'
import logo from '../images/infocamp-logo-montserrat.svg'
import whatif from '../images/whatif.svg'

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
                fontSize: '60px',
                fontWeight: '900',
                textTransform: 'uppercase',
                color: '#ED203D'
                 }} >Mar 16, 2019</div>
            </div>
            <img src={whatif}/>
            <Column isOffset={2} isSize={8} >
              <div className='details'
              style={{ 
                textAlign:'justify',
                marginTop: '10px',
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
                    fontSize: '60px',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    color: '#ED203D'
                 }} >Agenda</div>
                 <Column isOffset={3} isSize={8}
                 style={{
                   textAlign: 'start'
                 }}
                 >
                  <Columns isCentered>
                    <Column isSize={3}>9:10 - 9:20</Column>
                    <Column isSize={9}>
                    <div className="sub">Intro</div></Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>9:20 - 9:45</Column>
                    <Column isSize={9}>
                    <div className="sub">Keynote</div></Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>9:45 - 11:00</Column>
                    <Column isSize={9}>
                    <div className="sub">Panel: Understanding Users</div>
                  What if we could have better frameworks to understand people’s interaction with technology? By talking with researchers, designers and product owners we’ll explore current approaches and emerging trends on how to better understand end users.
                    </Column>
                  </Columns>
                  
                  <Columns isCentered>
                    <Column isSize={3}>11:00 - 11:15</Column>
                    <Column isSize={9}>
                    <div className="sub">Break</div></Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>11:15 - 12:00</Column>
                    <Column isSize={9}>
                    <div className="sub">Unconference</div>
                    is a loosely structured conference session emphasizing the informal exchange of information and ideas between participants, rather than following a conventionally structured panel/talk. Interested in hosting a 10-minute session during the unconference?
                     <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRLsYaubLmGsoHubKzuBmOwStqOs0G7Llur7Gs_W16EKMKDw/viewform">Suggest a topic!</a>
                    </Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>12:00 - 1:00</Column>
                    <Column isSize={9}>
                    <div className="sub">Panel: Raising and Resolving Conflict in Online Communities</div>
                    What if we could have more effective social engineering that understands how people tend to act, how we want those tendencies to manifest online, and how to design rules and affordances to 'tilt' human behavior in the directions somebody wants? In this panel we'll explore different perspectives on the escalation and de-escalation of conflict, such as centralized vs. decentralized processes, from various kinds of online communities. 
                    </Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>1:00 - 2:00</Column>
                    <Column isSize={9}>
                    <div className="sub">Lunch</div></Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>2:00 - 3:00</Column>
                    <Column isSize={9}>
                    <div className="sub">In-Depth Talk: Tangible Interfaces</div>
                    What if our interfaces transcended our screens? What if we could leverage the full potential of our senses to interact with technology? We’ll explore how new perspectives in interface design are redefining our relationship with information through embodied cognition, ubiquitous computing, and the art of research by design.
                    </Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>3:00 - 4:00</Column>
                    <Column isSize={9}>
                    <div className="sub">In-Depth Talk: The Current Bounds of Data-Driven Decisions</div>
                    What if our current limitations in computing power can be overcome by better algorithms or models? What if we find ways to capture more data without compromising privacy? We’ll venture into these questions with practitioners that are stretching, to its limits, the current capabilities of our data-driven machine learning paradigm; explore their approaches and evaluate opportunities.
                    </Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>4:00 - 5:00</Column>
                    <Column isSize={9}>
                    <div className="sub">In-Depth Talk: Ethical Considerations for Scaling Companies</div>
                    What if the companies, governments and other organizations that transform information in our society reach a consensus around fairness, privacy and transparency? We’ll explore how the ethics of technological product development are being defined by the large organizations that shape our everyday lives.
                    </Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>2:00 - 5:00</Column>
                    <Column isSize={9}>
                    <div className="sub">The Idea Room (With Refreshments)</div></Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>5:00 - 5:30</Column>
                    <Column isSize={9}>
                    <div className="sub">Closing Remarks</div></Column>
                  </Columns>
                  <Columns isCentered>
                    <Column isSize={3}>5:30 - 6:00</Column>
                    <Column isSize={9}>
                    <div className="sub">Mixer</div></Column>
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
                    fontSize: '60px',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    color: '#ED203D'
                 }} >Speakers</div>
                 <Column>
                  <h2 className="sub">Keynote</h2>
                  <img src="../images/speakers/Krys-Blackwood-1.jpg"/>
                  <h3 className="name">Krys Blackwood</h3>
                  <p>Senior Lead UX Designer at NASA JPL</p>
                 </Column>
                 <Column>
                  <h2 className="sub">Panel: Understanding Users - Techniques and Considerations</h2>
                  <Columns isCentered>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Emon-Motamedi-1.jpg"/>
                    <h3 className="name">Emon Motamedi</h3>
                    <p>Senior Product Manager at Reddit</p>
                  </Column>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Jessica-Strick-1.jpg"/>
                    <h3 className="name">Jessica Strick</h3>
                    <p>Lead Exhibit Developer at The Exploratorium</p>
                  </Column>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Eric-Schlakman-1.jpg"/>
                    <h3 className="name">Eric Schlakman</h3>
                    <p>Product & Marketing Content at Stripe</p>
                  </Column>
                  <Column isSize='1/4'>
                    <img src="../images/speakers/Krys-Blackwood-1.jpg"/>
                    <h3 className="name">Krys Blackwood</h3>
                    <p>Senior Lead UX Designer at NASA JPL</p>
                  </Column>
                 </Columns>
                 </Column>
                 <Column>
                  <h2 className="sub">Panel: Raising and Resolving Conflict in Online Communities</h2>
                  <Columns isCentered>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Brandon-Harris-1.jpg"/>
                    <h3 className="name">Brandon Harris</h3>
                    <p>Programmer at Wikipedia</p>
                  </Column>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Sonya-Mann-1.jpg"/>
                    <h3 className="name">Sonya Mann</h3>
                    <p>Communications Manager at ZCash Foundation</p>
                  </Column>
                  </Columns>
                 </Column>
                 <Column>
                  <h2 className="sub">In-Depth Talk: Tangible Interfaces</h2>
                  <Columns isCentered>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Tico-Ballagas-1.jpg"/>
                    <h3 className="name">Dr. Tico Ballagas</h3>
                    <p>Senior Manager of the Immersive Experience Lab at HP Labs</p>
                  </Column>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Noura-Howell-1.jpg"/>
                    <h3 className="name">Noura Howell</h3>
                    <p>PhD Candidate  at the UC Berkeley School of Information</p>
                  </Column>
                  </Columns>
                 </Column>
                 <Column>
                  <h2 className="sub">In-Depth Talk: The Current Bounds of Data-Driven Decisions</h2>
                  <Columns isCentered>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Michelle-Carney-1.jpg"/>
                    <h3 className="name">Michelle Carney</h3>
                    <p>ML + UX at Amazon Music; Lecturer at Stanford d.school</p>
                  </Column>
                  <Column isSize='1/2'>
                    <img src="../images/speakers/Anand-Rajagopal-1.jpg"/>
                    <h3 className="name">Anand Rajagopal</h3>
                    <p>Data Scientist at Autodesk</p>
                  </Column>
                  </Columns>
                 </Column>
                 <Column>
                  <h2 className="sub">In-Depth Talk: Ethical Considerations for Scaling Companies</h2>
                  <img src="../images/speakers/Chirantan-Chatterjee-1.jpg"/>
                    <h3 className="name">Chirantan Chatterjee</h3>
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
                  fontSize: '60px',
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
                  fontSize: '60px',
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
              <div className="foot" style={{paddingBottom: '114px'}}>
              <Columns isCentered>
                <Column isSize='6'>
                  <div className='copyright-stuff'>
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
