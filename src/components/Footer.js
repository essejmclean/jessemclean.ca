import React from 'react'
import { Flex } from 'rebass'
import Wrapper from './Wrapper'
import Text from './Text'

const Container = Flex.extend`
  flex-wrap: wrap;
`

Container.defaultProps = {
  justify: 'space-between',
  align: 'center',
}

const Connect = Flex.extend`
  > *:not(:last-child) {
    margin-right: ${props => props.theme.space[2]}px;
  }
`

Connect.defaultProps = {
  justify: 'flex-start',
  align: 'center',
}

const Item = props => (
  <Text is="span" smallSize="true">
    <a href={props.link} target="_blank">
      {props.children}
    </a>
  </Text>
)

const Footer = () => (
  <Wrapper is="footer" my={0}>
    <Container>
      <Text is="span" mr={3} mb={3} fadeColor="true" smallSize="true">
        © Jesse McLean, unless otherwise noted.
      </Text>
      <Connect mb={3}>
        <Item children="Twitter" link="http://twitter.com/essejmclean" />
        <Item children="Instagram" link="http://instagram.com/essejmclean" />
        <Item
          children="Spotify"
          link="https://open.spotify.com/user/essejmclean"
        />
        <Item children="Email" link="mailto:jesse@fieldmedialab.com" />
      </Connect>
    </Container>
  </Wrapper>
)

export default Footer
