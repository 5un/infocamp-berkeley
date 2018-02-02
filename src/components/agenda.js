import React from 'react'
import Link from 'gatsby-link'
import Sponsor from './sponsor'
import { Columns, Column, Content, Title } from 'bloomer'

const Agenda = (props) => (
  <div>
    {props.data &&
      <div>
        {props.data.map(slot => (
          <div key={slot.start}>
            <Title tag="h3" isSize={6} hasTextColor="light" isMarginless={true}>{slot.start}</Title>
            {slot.items.length === 1 &&
              <Columns isMarginless={true} isPaddingless={true}>
                <Column hasTextAlign="center" isMarginless={true} isPaddingless={true}>
                  {slot.items[0]}
                </Column>
              </Columns>
            }
            {slot.items.length === 2 &&
              <Columns isMarginless={true} isPaddingless={true}>
                {slot.items.map(item => (
                  <Column key={item} isSize="1/2" hasTextAlign="center" isMarginless={true} isPaddingless={true}>
                    {item}
                  </Column>
                ))}
              </Columns>

            }
            {slot.items.length === 3 &&
              <Columns isMarginless={true} isPaddingless={true}>
                {slot.items.map(item => (
                  <Column key={item} isSize="1/3" hasTextAlign="center" isMarginless={true} isPaddingless={true}>
                    {item}
                  </Column>
                ))}
              </Columns>

            }
            {slot.items.length === 4 &&
              <Columns isMarginless={true} isPaddingless={true}>
                {slot.items.map(item => (
                  <Column key={item} isSize="1/4" hasTextAlign="center" isMarginless={true} isPaddingless={true}>
                    {item}
                  </Column>
                ))}
              </Columns>

            }
          <div style={{ textAlign: 'center' }}>
            <div style={{ display:'inline-block', width: '50px', borderBottom: '1px solid white', margin: '10px 0 30px 0' }}>
            </div>
          </div>
          </div>
        ))}
      </div>
    }
  </div>
)

export default Agenda
