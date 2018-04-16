import React from 'react'
import { rgba } from 'polished'
import Text from './Text'

const RichText = Text.extend`
  p {
    margin-top: ${props => props.theme.space[3]}px;
    margin-bottom: 0;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    &:first-child {
      margin-top: 0;
    }
  }
  p + p {
    margin-top: 0;
    text-indent: ${props => props.theme.space[3]}px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${props => props.theme.space[3]}px;
    margin-bottom: 0;
    font-weight: normal;
  }
  h1 {
    font-size: ${props => props.theme.fontSizes[2]}px;
    @media only screen and (max-width: 40em) {
      font-size: 24px;
    }
  }
  h2 {
    font-size: 24px;
    @media only screen and (max-width: 40em) {
      font-size: 21px;
    }
  }
  h3 {
    font-size: 21px;
    @media only screen and (max-width: 40em) {
      font-size: 19px;
    }
  }

  blockquote {
    margin-top: ${props => props.theme.space[3]}px;
    margin-right: 0;
    margin-bottom: ${props => props.theme.space[3]}px;
    margin-left: ${props => props.theme.space[3]}px;
    padding-left: ${props => props.theme.space[3]}px;
    font-size: ${props => props.theme.fontSizes[2]}px;
    @media only screen and (max-width: 40em) {
      margin-left: ${props => props.theme.space[0]}px;
      font-size: 24px;
    }
    line-height: ${4 / 3};
    border-left: 1px solid ${props => rgba(props.theme.colors.text, 1 / 4)};
  }

  ol,
  ul {
    margin-top: ${props => props.theme.space[3]}px;
    margin-right: 0;
    margin-bottom: ${props => props.theme.space[3]}px;
    margin-left: ${props => props.theme.space[3]}px;
    padding-left: ${props => props.theme.space[3]}px;
    @media only screen and (max-width: 40em) {
      margin-left: ${props => props.theme.space[0]}px;
    }
  }

  .gatsby-resp-image-link {
    margin-top: ${props => props.theme.space[3]}px;
    margin-bottom: ${props => props.theme.space[3]}px;
    @media only screen and (max-width: 40em) {
      /* margin-top: ${props => props.theme.space[2]}px; */
      margin-right: -${props => props.theme.space[3]}px;
      /* margin-bottom: ${props => props.theme.space[2]}px; */
      margin-left: -${props => props.theme.space[3]}px;
    }
  }
`

export default RichText

RichText.defaultProps = {}
