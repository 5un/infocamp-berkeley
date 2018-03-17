import React from 'react'
import Link from 'gatsby-link'
import { Column, Content, Image, Modal, ModalBackground, ModalContent, 
          ModalClose, ModalCard, ModalCardBody, Title, Delete } from 'bloomer'

class AgendaItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleOnClick() {
    const { showDetails } = this.props.item
    if (showDetails) {
      this.setState({ showModal: true })
    }
  }

  handleOnModalCloseClicked() {
    this.setState({ showModal: false })
  }

  render() {
    const { item } = this.props
    const { showModal } = this.state
    const isObject = typeof item === 'object'

    return <div>
      {!isObject &&
        <div dangerouslySetInnerHTML={{ __html: item }} ></div>
      }
      {isObject && 
        <div onClick={this.handleOnClick.bind(this)} style={{ cursor: 'pointer', marginBottom: '5px' }}>
          {item.speaker &&
            <div className="hover-link"><b>{item.speaker}</b></div>
          }
          <div>{item.name}</div>
          <div style={{ opacity: 0.5 }}>{item.room}</div>
        </div>
      }
      <Modal isActive={showModal} >
        <ModalBackground />
        <ModalCard>
          <ModalCardBody>
            <Delete onClick={this.handleOnModalCloseClicked.bind(this)} isPulled="right"/>
            <Title tag="h4" isSize={4}>
              {item.name}
            </Title>

            <Content hasTextColor="dark">
              {item.speakerImage &&
                <img src={item.speakerImage} style={{ borderRadius: '96px', clip: 'auto', width: '100px', height: '100px' }}/>
              }
              {item.speaker &&
                <div><b>{item.speaker}</b></div>
              }
            </Content>
            <Content hasTextColor="dark" hasTextAlign="left">
              <div>
                <div dangerouslySetInnerHTML={{ __html: item.details }} ></div>
              </div>
            </Content>
            <br/>
          </ModalCardBody>
        </ModalCard>
      </Modal>
    </div>
  }

}

export default AgendaItem
