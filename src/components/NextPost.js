import React from 'react'
import styled from 'styled-components'
import { ellipsis, rgba } from 'polished'
import Link from 'gatsby-link'
import { Box, Flex } from 'rebass'
import Text from './Text'

const indentAmount = 1.5

const Container = Box.extend`
  flex: 1;
  display: block;
  text-decoration: none;

  @media not all and (hover: none) {
    &:hover {
      .next-post__title {
        transform: translateX(0);

        &:before {
          opacity: 1;
        }
      }
    }
  }
`

Container.defaultProps = {
  is: Link,
  pt: 3,
  pb: 3,
}

const Title = Text.extend`
  @media only screen and (min-width: 60rem) {
    ${ellipsis()};
    width: ${'calc(100% + ' + indentAmount + 'em)'};
    max-width: ${'calc(100% + ' + indentAmount + 'em)'};
    transform: ${'translateX(-' + indentAmount + 'em)'};
    transition: transform 500ms ${props => props.theme.easing};

    &:before {
      content: '→';
      display: inline-block;
      width: ${indentAmount}em;
      opacity: 0;
      transition: opacity 500ms ${props => props.theme.easing},
        transform 500ms ${props => props.theme.easing};
    }
  }
`

Title.defaultProps = {
  is: 'span',
}

const Meta = Text.extend`
  ${ellipsis()};
  font-style: italic;
  color: ${props => rgba(props.theme.colors.text, 1 / 2)};
`

Meta.defaultProps = {
  is: 'span',
}

const NextPost = ({ children, path, next, previous }) => (
  <Container to={path}>
    <Meta
      children={
        next === true
          ? 'Older post'
          : previous === true
            ? 'Newer post'
            : undefined
      }
    />
    <Title className="next-post__title" children={children} />
  </Container>
)

export default NextPost
