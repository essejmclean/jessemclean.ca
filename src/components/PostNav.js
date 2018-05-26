import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Box, Flex } from 'rebass'
import NextPost from './NextPost'

const Wrapper = styled(Box)`
  display: block;
  border-top: 1px solid ${props => rgba(props.theme.colors.text, 1 / 4)};
  border-bottom: 1px solid ${props => rgba(props.theme.colors.text, 1 / 4)};
`

Wrapper.defaultProps = {
  mt: 4,
  mx: [-3, null, -4, 0],
  px: [3, null, 4, 0],
}

const Container = styled(Flex)`
  *:first-child {
    margin-right: ${props => props.theme.space[3]}px;
  }
`

Container.defaultProps = {}

const PostNav = ({ nextTitle, nextPath, previousTitle, previousPath }) => (
  <Wrapper>
    <Container>
      {nextTitle && (
        <NextPost next={true} children={nextTitle} path={nextPath} />
      )}
      {previousTitle && (
        <NextPost
          previous={true}
          children={previousTitle}
          path={previousPath}
        />
      )}
    </Container>
  </Wrapper>
)

export default PostNav
