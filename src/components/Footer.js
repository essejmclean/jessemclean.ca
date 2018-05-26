import React from 'react'
import { Flex } from 'rebass'
import Wrapper from './Wrapper'
import Text from './Text'
import ScrollToTop from './ScrollToTop'

const Container = Flex.extend`
  flex-wrap: wrap;
`

Container.defaultProps = {
  flex: 1,
  justify: 'space-between',
  align: 'center',
  mr: [-2, 2],
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
  <Text is="span" size="small">
    <a href={props.link} target="_blank">
      {props.children}
    </a>
  </Text>
)

const Footer = () => (
  <Wrapper is="footer" my={0}>
    <Flex align="flex-start" justify="space-between">
      <Container pb={3}>
        <Connect mr={3} mb={3}>
          <Item children="Twitter" link="http://twitter.com/essejmclean" />
          <Item children="Instagram" link="http://instagram.com/essejmclean" />
          <Item
            children="Spotify"
            link="https://open.spotify.com/user/essejmclean"
          />
          <Item children="Email" link="mailto:jesse@fieldmedialab.com" />
        </Connect>
        <Text is="span" mb={3} fade={true} size="small">
          © Jesse McLean. Code and design by yours truly. This site changes
          colour based on the time of day.
        </Text>
      </Container>
      <ScrollToTop />
    </Flex>
  </Wrapper>
)

export default Footer
