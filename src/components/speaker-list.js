import React from 'react'
import Link from 'gatsby-link'
import Speaker from './speaker'
import { Columns } from 'bloomer'

const SpeakerList = (props) => (
  <div>
    {props.speakers &&
      <div>
        {
          props.speakers.map((group) => (
            <div key={group.name}>
              <h3>{group.name}</h3>
              <Columns isCentered>
                {
                  group.speakers.map((item) => (
                    <Speaker speaker={item} key={item.name} />
                  ))
                }
              </Columns>
            </div>
          ))
        }
      </div>
    }
  </div>
)

export default SpeakerList
