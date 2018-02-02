import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Sticky } from 'react-sticky';
import { Container, Columns, Column, Title } from 'bloomer';

export default class StickyHeader extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  onClickNav() {
    this.setState({ isActive: !this.state.isActive })
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
            const headerStyle = {...style, zIndex:'1000000' }
            const barBackground = distanceFromTop < -100 ? '#333744' : 'linear-gradient(to bottom, #333744 0%, rgba(51,55,68,0) 100%)'
            const navMenuStyle = {
              textTransform: 'uppercase',
              fontWeight: '300',
              color: 'white',
              textDecoration: 'underline'
            }
            return (
              <header style={headerStyle}>
                <div style={{ background: barBackground, transition: 'background 0.5s' }}>
                  <Container hasTextAlign="centered">
                    <img src="/images/infocamp-2018-logo.png" style={{ height: logoHeight + 'px', transition: 'height 0.5s', marginBottom: '0', maxHeight: '20vw' }} /><br />
                    <div>
                      <div style={{ display: 'inline-block', width: '25%' }}>
                        <a href="#about">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>About</Title>
                        </a>
                      </div>
                      <div style={{ display: 'inline-block', width: '25%' }}>
                        <a href="#schedule">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>Schedule</Title>
                        </a>
                      </div>
                      <div style={{ display: 'inline-block', width: '25%' }}>
                        <a href="#register">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>Register</Title>
                        </a>
                      </div>
                      <div style={{ display: 'inline-block', width: '25%' }}>
                        <a href="#faqs">
                          <Title tag="h5" isSize={6} style={navMenuStyle}>FAQS</Title>
                        </a>
                      </div>
                    </div>
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