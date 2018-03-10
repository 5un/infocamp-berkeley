import React from 'react'
import Link from 'gatsby-link'
import { Column, Modal, ModalBackground, ModalContent, 
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
          <div className="hover-link"><strong>{speaker.name}</strong></div>
          <small>{speaker.title}</small>
        </div>
      </div>
    )
  }

  render() {
    const { speaker } = this.props
    const { showModal } = this.state

    return <Column isSize="1/5" hasTextAlign="center">
      {!speaker.bio &&
        <a href={speaker.link} target="_blank" style={{ textDecoration: 'none' }}>
          {this.renderBioContent(speaker)}
        </a>
      }
      {speaker.bio && 
        <a onClick={this.handleOnClick.bind(this)} target="_blank" style={{ textDecoration: 'none' }}>
          {this.renderBioContent(speaker)}
        </a>
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
