import React from 'react'
import Link from 'gatsby-link'
import Sponsor from './sponsor'
import AgendaColumn from './agenda-column'
import { Columns, Column, Content, Title } from 'bloomer'

class Agenda extends React.Component {
  render() {
    let amItems = [],
        pmItems = []

    const numItems = this.props.data.length

    this.props.data.forEach((item, index) => {
      if(index < numItems / 2) {
        amItems.push(item)
      } else {
        pmItems.push(item)
      }
    })

    return (<div>
      {this.props.data &&
        <Columns>
          <Column isOffset={2} isSize={4}>
            <AgendaColumn data={amItems} />
          </Column>
          <Column isSize={4}>
            <AgendaColumn data={pmItems} />
          </Column>
        </Columns>
      }
    </div>)
  }
}

export default Agenda
