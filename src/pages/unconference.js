import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import ScrollableAnchor from 'react-scrollable-anchor'
import StickyHeader from '../layouts/sticky-header'
import ThreejsBackdrop from '../components/three-js-backdrop'
import { Container, Section, Columns, Column, Control, Image, Content, Button, Input, Title } from 'bloomer';

import links from '../content/links.json'

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
          backgroundColor: 'rgba(51,55,69,0.90)',
          color: 'white',
          height: '100vh'
        }} isPaddingless={true} >
          <StickyHeader />
          <Container hasTextAlign="left" style={{ marginTop: '100px' }}>
            <Columns>
              <Column isSize={8} isOffset={2}>
                <h2 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.5)' }}>un·con·fer·ence</h2>
                <p>ˈənkänf(ə)rəns/<br/>noun</p>
                <Content hasTextColor="light" hasTextAlign="left" style={{ paddingLeft: '20px' }}>
                  <ol>
                    <li>A loosely structured conference emphasizing the informal exchange of information and ideas between participants, rather than following a conventionally structured program of events.
                    </li>
                  </ol>
                </Content>

                <Content hasTextColor="light" hasTextAlign="left">
                  <p>
                    The Information School at UC Berkeley is a place for the exchange of ideas between industry, scholars, and the public. <a href={links.unconference}>Join us</a> by suggesting a conference session to be included at Infocamp 2018! 
                  </p>
                  <p>
                    Selection of session to be included will be decided by the votes of participants at the conference. With the digital and the technical augmenting the fabric of our society, we believe that every perspective and voice is important in the conversation towards deciding the world to come.
                  </p>
                </Content>
                <a href={links.unconference} style={{ textDecoration: 'none' }}>
                  <Button isColor="warning" style={{ width: '300px' }}>Suggest a Session</Button>
                </a>
              </Column>
            </Columns>
          </Container>
        </Section>
      </div>  
    </div>)
  }

}

export default IndexPage
