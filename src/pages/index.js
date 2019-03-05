import React from 'react'
import Link, { withPrefix } from 'gatsby-link'

import sponsorsData from '../content/sponsors.json'
import speakerData from '../content/speakers.js'
import faqsData from '../content/faqs.json'
import agendaData from '../content/agenda.js'
import links from '../content/links.json'

import SponsorList from '../components/sponsor-list'
import SpeakerList from '../components/speaker-list'
import Agenda from '../components/agenda'
import FAQS from '../components/faqs'
import '..//index.scss'
import logo from '../images/infocamp-logo-montserrat.svg'

import StickyHeader from '../layouts/sticky-header'
import { Container, Section, Columns, Column, Control, Image, Content, Button, Input, Title } from 'bloomer';

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
        <Column isSize={10}isOffset={1}>
        <Column className='main' style={{
            flex: '1', 
            marginTop: '119px',
             }}>
            <img src={logo}/>
            <div className='details-container'>
            <div className='save-the-date'
            style={{ 
              marginTop: '76px'}} >
              <div className='date'
              style={{ 
                lineHeight: '125px',
                fontSize: '96px',
                fontWeight: '900',
                textTransform: 'uppercase',
                color: '#ED203D'
                 }} >Mar 16, 2019</div>
              <div className='sub-date'
              style={{ 
                lineHeight: '62px',
                fontSize: '48px',
                fontWeight: '900',
                textTransform: 'uppercase',
                color: '#ED203D'
                 }}>Save the date</div>
            </div>
            <Column isSize='1/2'>
              <div className='details'
              style={{ 
                marginTop: '80px',
                lineHeight: '28px',
                fontSize: '16px',
                }}>InfoCamp, in its 9th year, is the premier student-run conference for the information community. Held on the UC Berkeley campus at the School of Information, InfoCamp is a day-long event that aims to educate, inform, and inspire new ways of thinking among the information community.</div>
                <Column style={{
                  textAlign: 'center'
                }}>
                <Button style={{ 
                textDecoration: 'none'
                }} isColor='info' href="https://tinyurl.com/infocamp2019tickets">Get Your Ticket.</Button>
                </Column>
            </Column>
            </div>

            
              <div className="foot" style={{marginTop: '76px', paddingBottom: '114px'}}>
              <Column>
                <Column isSize='6'>
                  <div className='email-location' style={{ float: 'left'}}>
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
              </Column>
              </div>
                                  
            {/* <form action="https://infocamp.us2.list-manage.com/subscribe/post?u=536179e4b2849e96e841012a4&amp;id=36f8a21dd2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
              <Input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required style={{ marginBottom: '10px', width: '300px' }}/>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <Input type="text" name="b_536179e4b2849e96e841012a4_36f8a21dd2" tabIndex="-1" value=""/>
              </div>
              <div className="clear">
                <Button isColor="warning" type="submit" value="submit" style={{ width: '300px' }}>Subscribe</Button>
              </div>
              </div>
            </form> */}


            {/*
            <a href={links.tickets} style={{ textDecoration: 'none' }}>
              <Button isColor="warning" isSize="large">Get Tickets</Button>
            </a>
            */}
          </Column>

        </Column>
        </Section>
      </div>

    
        
    </div>)
  }

}

export default IndexPage
