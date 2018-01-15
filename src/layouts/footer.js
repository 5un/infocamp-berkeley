import React from 'react'
import Link from 'gatsby-link'
import { Footer, Columns, Column, Content, Container  } from 'bloomer';

const SiteFooter = () => (
  <Footer id="footer">
    <Container hasTextAlign="centered">
      <Content>
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
      </Content>
    </Container>
  </Footer>
)

export default SiteFooter