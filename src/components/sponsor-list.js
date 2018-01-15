import React from 'react'
import Link from 'gatsby-link'
import Sponsor from './sponsor'
import { Columns } from 'bloomer'

const SponsorList = (props) => (
  <div>
    {props.sponsors &&
      <Columns isCentered>
        {
          props.sponsors.map((item) => (<Sponsor sponsor={item} />))
        }
      </Columns>
    }
  </div>
)

export default SponsorList
