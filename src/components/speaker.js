import React from 'react'
import Link from 'gatsby-link'
import { Column, Image } from 'bloomer'

const Speaker = (props) => (
  <Column isSize="1/3" hasTextAlign="center">
    <div>
      <img src={props.speaker.image} style={{ borderRadius: '96px', clip: 'auto', width: '192px', height: '192px' }}/>
    </div>
    <div>
      <strong>{props.speaker.name}</strong><br />
      {props.speaker.bio}
    </div>
  </Column>
)

export default Speaker
