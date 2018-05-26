import React from 'react'
import Link from 'gatsby-link'
import { Flex } from 'rebass'
import Wrapper from './Wrapper'
import Text from './Text'

const Header = props => (
  <Wrapper is="header" my={4}>
    <Flex align="center">
      <Text is="span" fade={props.location === '/' ? true : undefined} mr={2}>
        <Link to="/">Writing</Link>
      </Text>
      <Text is="span" fade={props.location === '/about' ? true : undefined}>
        <Link to="/about">About</Link>
      </Text>
    </Flex>
  </Wrapper>
)

export default Header
