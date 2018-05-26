import React from 'react'
import { css } from 'styled-components'
import { rgba } from 'polished'
import { maxWidth } from 'styled-system'
import { Text as RebassText } from 'rebass'

const Text = RebassText.extend`
  display: block;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, SF UI,
    Helvetica Neue, sans-serif;
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: ${1 / 0.6};
  color: ${props => props.theme.colors.text};
  hyphens: auto;
  @media only screen and (max-width: 40em) {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
    box-shadow: inset 0 -1px 0 0 ${props => rgba(props.theme.colors.text, 1 / 4)};
    transition: color 500ms ${props => props.theme.easing},
      box-shadow 500ms ${props => props.theme.easing};

    @media not all and (hover: none) {
      &:hover {
        color: ${props => rgba(props.theme.colors.text, 1 / 2)};
        box-shadow: inset 0 -1px 0 0 ${props => rgba(props.theme.colors.text, 1 / 1)};
      }
    }
  }

  ${maxWidth};

  ${props =>
    props.fade === true
      ? css`
          color: ${props => rgba(props.theme.colors.text, 1 / 2)};
        `
      : undefined};

  ${props =>
    props.size === 'small'
      ? css`
          font-size: ${props => props.theme.fontSizes[0]}px;
          @media only screen and (max-width: 40em) {
            font-size: 12px;
          }
        `
      : undefined};
  ${props =>
    props.size === 'large'
      ? css`
          font-size: ${props => props.theme.fontSizes[2]}px;
          line-height: ${4 / 3};
          @media only screen and (max-width: 40em) {
            font-size: 24px;
          }
        `
      : undefined};
`

export default Text

Text.defaultProps = {
  is: 'p',
  m: 0,
}
