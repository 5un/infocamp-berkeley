import React from 'react'
import Link from 'gatsby-link'
import Sponsor from './sponsor'
import Collapsible from 'react-collapsible';
import { Columns, Content, Title } from 'bloomer'

const FAQs = (props) => (
  <div>
    {props.data &&
      <div>
        {props.data.map(item => (
          <div key={item.q}>
            <Collapsible trigger={<Title tag="h4" hasTextColor="light">{item.q}</Title>} open={true}>
              <p>{item.a}</p>
            </Collapsible>
          </div>
        ))}
      </div>
    }
  </div>
)

export default FAQs
