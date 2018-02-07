import React from 'react'
import Link from 'gatsby-link'
import Speaker from './speaker'
import { Columns, Title } from 'bloomer'

const SpeakerList = (props) => (
  <div>
    {props.speakers &&
      <div>
        {
          props.speakers.map((group) => (
            <div key={group.name}>
              {/*
              <Title tag="h4" isSize={5}>{group.name}</Title>
              */}
              {group.speakers.length > 0 && 
                <Columns isCentered>
                  {
                    group.speakers.map((item) => (
                      <Speaker speaker={item} key={item.name} />
                    ))
                  }
                </Columns>
              }
              {group.speakers.length <= 0 && 
                <div>Soon to be announced.</div>
              }
              <br />
            </div>
          ))
        }
      </div>
    }
  </div>
)

export default SpeakerList
