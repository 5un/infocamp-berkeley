import React from 'react'
import Link from 'gatsby-link'
import { Title } from 'bloomer'

const navMenuStyle = {
  textTransform: 'uppercase',
  fontWeight: '300',
  color: 'white',
  textDecoration: 'underline',
  marginBottom: '10px'
}

const navSubMenuStyle = {
  textTransform: 'uppercase',
  fontWeight: '300',
  color: '#cccccc',
  textDecoration: 'none',
  marginBottom: '10px'
}

const dropDownContainerStyle = {
  position: 'fixed',
  backgroundColor: 'rgba(51,55,68,0.8)',
  padding: '20px'
}

export default class DropdownMenu extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
  }

  handleMenuClicked() {
    this.setState({ opened: !this.state.opened }) 
  }

  handleSubMenuClicked() {
    this.setState({ opened: false }) 
  }

  render() {
    const { linkTo, title, children } = this.props
    const { opened } = this.state

    return (
      <div>
        <a onClick={this.handleMenuClicked.bind(this)}>
          <Title tag="h5" isSize={6} style={navMenuStyle}>{title}</Title>
        </a>
        {opened && 
          <div style={dropDownContainerStyle}>
            {children.map(item => (
              <div>
                <a href={item.linkTo} onClick={this.handleSubMenuClicked.bind(this)}>
                  <Title tag="h5" isSize={6} style={navSubMenuStyle}>{item.title}</Title>
                </a>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

