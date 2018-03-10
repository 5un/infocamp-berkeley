import React from 'react'
import Link from 'gatsby-link'
import { Column } from 'bloomer'

const Sponsor = (props) => (
  <Column isSize="1/3" hasTextAlign="center">
    <div style={{ verticalAlign: 'middle' }}>
      <img src={props.sponsor.image} style={{ maxWidth: '280px', maxHeight: '120px' }}/>
    </div>
  </Column>
)

export default Sponsor
