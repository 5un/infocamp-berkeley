import React from 'react'
import Link from 'gatsby-link'
import { Column, Image } from 'bloomer'

const Speaker = (props) => (
  <Column isSize="1/3" hasTextAlign="center">
    <div>
      <Image isSize="96x96" src={props.speaker.image} style={{ borderRadius: '48px', clip: 'auto' }}/>
    </div>
    <div>
      {props.speaker.name}
    </div>
  </Column>
)

export default Speaker
