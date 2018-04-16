import React from 'react'
import styled from 'styled-components'
import { ellipsis, rgba } from 'polished'
import Link from 'gatsby-link'
import { Box, Flex } from 'rebass'
import Text from './Text'

const indentAmount = 1.5

const Container = Box.extend`
  display: block;
  text-decoration: none;
  border-top: 1px solid ${props => rgba(props.theme.colors.text, 1 / 4)};

  &:last-child {
    border-bottom: 1px solid ${props => rgba(props.theme.colors.text, 1 / 4)};
  }

  &:hover {
    .post-item__title {
      transform: translateX(0);

      &:before {
        opacity: 1;
      }
    }
  }
`

Container.defaultProps = {
  is: Link,
  px: [3, null, 4, 0],
  py: 2,
  mx: [-3, null, -4, 0],
}

const Title = Text.extend`
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
`

Title.defaultProps = {
  is: 'span',
}

const Inline = Flex.extend`
  justify-content: space-between;
  align-items: center;

  > *:first-child {
    margin-right: ${props => props.theme.space[2]}px;
  }
`

const Date = Text.extend`
  text-align: right;
  white-space: nowrap;
  color: ${props => rgba(props.theme.colors.text, 1 / 2)};
`

Date.defaultProps = {
  is: 'span',
}

const Excerpt = Text.extend`
  ${ellipsis()};
  font-style: italic;
  color: ${props => rgba(props.theme.colors.text, 1 / 2)};
`

Excerpt.defaultProps = {
  is: 'span',
}

const PostItem = ({ post }) => (
  <Container to={post.frontmatter.path}>
    <Title className="post-item__title">{post.frontmatter.title}</Title>
    <Inline>
      <Excerpt>{post.excerpt}</Excerpt>
      <Date>{post.frontmatter.date}</Date>
    </Inline>
  </Container>
)

export default PostItem
