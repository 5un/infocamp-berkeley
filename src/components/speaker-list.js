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
            <div>
              <h3>{group.name}</h3>
              <Columns isCentered>
                {
                  group.speakers.map((item) => (
                    <Speaker speaker={item} />
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
