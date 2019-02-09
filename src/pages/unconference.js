import React from 'react'
import Helmet from 'react-helmet'
import Link, { withPrefix } from 'gatsby-link'
// import StickyHeader from '../layouts/sticky-header'
import { Container, Section, Columns, Column, Control, Image, Content, Button, Input, Title } from 'bloomer';

import links from '../content/links.json'

const linkedAnchorStyle = { position: 'absolute', marginTop: '-140px' }

class IndexPage extends React.Component {
  render() {
    return (<div>
      <Helmet
        title="Unconference, INFOCAMP Berkeley 2018"
        meta={[
          { name: 'description', content: 'Further the discussion of our augmented society at InfoCamp Berkeley on Saturday March 17, 2018 at South Hall, University of California, Berkeley.' },
          { name: 'keywords', content: 'InfoCamp, uconference, event, information science, datascience, design, society' },
          { name: 'og:url', content: 'https://berkeley-infocamp.org/unconference' },
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: 'Call for Unconference Sessions' },
          { name: 'og:description', content: 'Further the discussion of our augmented society at InfoCamp Berkeley on Saturday March 17, 2018 at South Hall, University of California, Berkeley.' },
          { name: 'og:image', content: 'https://berkeley-infocamp.org/images/infocamp_unconf_og_fb.png' },
        ]}
      />
      <div style={{ position: 'relative' }}>
        <Section style={{ 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("/images/bg-pattern-01.jpg")',
          color: 'white',
          minHeight: '100vh'
        }} isPaddingless={true} >
          {/* <StickyHeader /> */}
          <Container hasTextAlign="left" style={{ padding: '100px 20px' }}>
            <Columns>
              <Column isSize={10} isOffset={1}>
                <h2 style={{ textShadow: '0px 2px 10px rgba(43,255,255,0.5)', marginBottom: '0' }}>un·con·fer·ence</h2>
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
                  <p>Unconferences like InfoCamp feature a community-driven format, so we ask attendees to create, pitch and lead their own sessions. To host a session, you simply choose the topic and the format, pitch your idea to the group. The schedule gets created on the fly, and you get to vote on sessions – and if yours is chosen, you pick a time slot and present.
                  </p>
                  <p>
                    Submitted session topics will be voted upon on the day of the conference.
                  </p>
                </Content>
                {/*
                <a href={links.unconference} style={{ textDecoration: 'none' }}>
                  <Button isColor="warning" style={{ width: '300px' }}>Suggest a Session</Button>
                </a>
                */}
                <div>
                  Unconference submission is now closed.
                </div>
              </Column>
            </Columns>
          </Container>
        </Section>
      </div>  
    </div>)
  }

}

export default IndexPage
