import React from 'react'
import Link from 'gatsby-link'
import { Footer, Columns, Column, Content, Container  } from 'bloomer';

const contactEmail = 'imsa@ischool.berkeley.edu'

const anchorStyle = {  
  border: '1px solid black', borderRadius: '50px', 
  width: '70px', height: '70px', 
  padding: '20px',
  display: 'inline-block'
}

const SiteFooter = () => (
  <Footer id="footer" style={{ background: '#003262'}}>
    <Container hasTextAlign="centered">
      <Content>
        More questions? <a href={`mailto:${contactEmail}`}>Contact us at {contactEmail}</a>
        <div>
          <div style={{ display: 'inline-block', margin: '30px' }}>
            <a href="https://www.facebook.com/InfoCampBerkeley/" style={anchorStyle}>
              <img src="/images/icons8-facebook-f-96.png" style={{ maxWidth: '24px', maxHeight: '24px' }}/>
            </a>
          </div>
          <div style={{ display: 'inline-block', margin: '30px' }}>
            <a href="https://twitter.com/infoberkeley/" style={anchorStyle }>
              <img src="/images/icons8-twitter-96.png" style={{ maxWidth: '24px', maxHeight: '24px' }}/>
            </a>
          </div>
          <div style={{ display: 'inline-block', margin: '30px' }}>
            <a href="https://www.instagram.com/imsa_berkeley/" style={anchorStyle}>
              <img src="/images/icons8-instagram-96.png" style={{ maxWidth: '24px', maxHeight: '24px' }}/>
            </a>
          </div>
        </div>
        {/*
        <Columns>
          <Column isFull>
            <p>
                Made with ❤️
                by <a href="https://ischool.berkeley.edu">I-School</a>
            </p>
          </Column>
        </Columns>
        <Content isSize='small'>
          <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
          <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
        </Content>
        */}
      </Content>
    </Container>
  </Footer>
)

export default SiteFooter
