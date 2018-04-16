import React from 'react'
import Link from 'gatsby-link'
import Wrapper from './Wrapper'
import Text from './Text'

const Header = ({ siteTitle }) => (
  <Wrapper is="header" my={4}>
    <Text is="span">
      <Link to="/">JM</Link>
    </Text>
  </Wrapper>
)

export default Header
