import React from 'react'
import Link from 'gatsby-link'
import { Column, Image } from 'bloomer'

const Speaker = (props) => (
  <Column isSize="1/3" hasTextAlign="center">
    <a href={props.speaker.link} target="_blank" style={{ textDecoration: 'none' }}>
      <div>
        <img src={props.speaker.image} style={{ borderRadius: '96px', clip: 'auto', width: '160px', height: '160px' }}/>
      </div>
      <div>
        <strong>{props.speaker.name}</strong><br />
        <small>{props.speaker.title}</small>
      </div>
    </a>
  </Column>
)

export default Speaker
