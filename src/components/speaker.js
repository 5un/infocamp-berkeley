import React from 'react'
import Link from 'gatsby-link'
import { Column, Image, Modal, ModalBackground, ModalContent, 
          ModalClose, ModalCard, ModalCardBody, Title, Delete } from 'bloomer'

class Speaker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleOnClick() {
    const { speaker } = this.props
    if (speaker.bio) {
      this.setState({ showModal: true })
    }
  }

  handleOnModalCloseClicked() {
    this.setState({ showModal: false })
  }

  renderBioContent(speaker) {
    return (
      <div>
        <div>
          <img src={speaker.image} style={{ borderRadius: '96px', clip: 'auto', width: '160px', height: '160px' }}/>
        </div>
        <div>
          <strong>{speaker.name}</strong><br />
          <small>{speaker.title}</small>
        </div>
      </div>
    )
  }

  render() {
    const { speaker } = this.props
    const { showModal } = this.state

    return <Column isSize="1/3" hasTextAlign="center">
      {!speaker.bio &&
        <a href={speaker.link} target="_blank" style={{ textDecoration: 'none' }}>
        {this.renderBioContent(speaker)}
        </a>
      }
      {speaker.bio && 
        <div onClick={this.handleOnClick.bind(this)}>
          {this.renderBioContent(speaker)}
        </div>
      }
      <Modal isActive={showModal} >
        <ModalBackground />
        <ModalCard>
          <ModalCardBody>
            
            <img src={speaker.image} style={{ borderRadius: '96px', clip: 'auto', width: '160px', height: '160px' }}/>
            <Delete onClick={this.handleOnModalCloseClicked.bind(this)} isPulled="right"/>
            <Title tag="h4" isSize={5}>
              {speaker.name}
            </Title>
            <div>
              {speaker.title}
            </div>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: speaker.bio }} ></div>
            
          </ModalCardBody>
        </ModalCard>
      </Modal>
    </Column>
  }

}

export default Speaker
