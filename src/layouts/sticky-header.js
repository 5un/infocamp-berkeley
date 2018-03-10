import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Sticky } from 'react-sticky'
import { Container, Columns, Column, Title } from 'bloomer'
import { Breakpoint } from 'react-responsive-grid'
import DropdownMenu from '../components/dropdown-menu'

export default class StickyHeader extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  render() {

    return (
      <Sticky>
        {
          ({
            style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => {
            const logoHeight = distanceFromTop < -100 ? 100 : 150
            const headerStyle = {...style, zIndex:'10' }
            const barBackground = distanceFromTop < -100 ? '#333744' : 'linear-gradient(to bottom, #333744 0%, rgba(51,55,68,0) 100%)'
            const navMenuStyle = {
              textTransform: 'uppercase',
              fontWeight: '300',
              color: 'white',
              textDecoration: 'underline'
            }

            const aboutSubMenus = [
              { title: 'About InfoCamp', linkTo: '/#about' },
              { title: 'Sponsors', linkTo: '/#sponsors' },
              { title: 'FAQ', linkTo: '/faqs' }
            ]

            return (
              <header style={headerStyle}>
                <div style={{ background: barBackground, transition: 'background 0.5s' }}>
                  <Container hasTextAlign="centered">
                    <a href="/">
                      <img src="/images/infocamp-2018-logo.png" style={{ height: logoHeight + 'px', transition: 'height 0.5s', marginBottom: '0', maxHeight: '20vw' }} /><br />
                    </a>
                    <Breakpoint minWidth={720} widthMethod="componentWidth">
                      <div style={{ display: 'inline-block', width: '16%' }}>
                        <DropdownMenu title="About" children={aboutSubMenus}>
                        </DropdownMenu>
                      </div>
                      <div style={{ display: 'inline-block', width: '16%' }}>
                        <a href="/#schedule">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>Schedule</Title>
                        </a>
                      </div>
                      <div style={{ display: 'inline-block', width: '16%' }}>
                        <a href="/#speakers">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>Speakers</Title>
                        </a>
                      </div>
                      <div style={{ display: 'inline-block', width: '16%' }}>
                        <a href="/#register">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>Tickets</Title>
                        </a>
                      </div>
                      <div style={{ display: 'inline-block', width: '16%' }}>
                        <a href="/expo">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>Expo</Title>
                        </a>
                      </div>
                      <div style={{ display: 'inline-block', width: '16%' }}>
                        <a href="/unconference">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>Unconference</Title>
                        </a>
                      </div>
                    </Breakpoint>
                  </Container>
                  
                </div>
              </header>
            )
          }
        }
      </Sticky>
    )
  }
}