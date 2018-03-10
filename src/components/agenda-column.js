import React from 'react'
import Link from 'gatsby-link'
import Sponsor from './sponsor'
import AgendaItem from './agenda-item'
import { Columns, Column, Content, Title } from 'bloomer'

const AgendaColumn = (props) => (
  <div>
    {props.data &&
      <div>
        {props.data.map(slot => (
          <div key={slot.start}>
            <Title tag="h3" isSize={6} hasTextColor="light" isMarginless={true}>{slot.start}</Title>
            {slot.items.map(item => (
              <AgendaItem item={item}/>
            ))}
          <div style={{ textAlign: 'center' }}>
            <div style={{ display:'inline-block', width: '50px', borderBottom: '1px solid white', margin: '10px 0 30px 0' }}>
            </div>
          </div>
          </div>
        ))}
      </div>
    }
  </div>
)

export default AgendaColumn
