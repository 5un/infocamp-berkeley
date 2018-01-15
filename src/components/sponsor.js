import React from 'react'
import Link from 'gatsby-link'
import { Column } from 'bloomer'

const Sponsor = (props) => (
  <Column isSize="1/3" hasTextAlign="center">
    <div>
      <img src={props.sponsor.image} />
    </div>
    {props.sponsor.name}
  </Column>
)

export default Sponsor
