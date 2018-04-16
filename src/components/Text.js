import React from 'react'
import { css } from 'styled-components'
import { rgba } from 'polished'
import { maxWidth } from 'styled-system'
import { Text as RebassText } from 'rebass'

const Text = RebassText.extend`
  display: block;
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: ${1 / 0.6};
  color: ${props => props.theme.colors.text};
  hyphens: auto;

  a {
    text-decoration: none;
    color: inherit;
    box-shadow: inset 0 -1px 0 0 ${props => rgba(props.theme.colors.text, 1 / 4)};
    transition: color 500ms ${props => props.theme.easing},
      box-shadow 500ms ${props => props.theme.easing};

    &:hover {
      color: ${props => rgba(props.theme.colors.text, 1 / 2)};
      box-shadow: inset 0 -1px 0 0 ${props => rgba(props.theme.colors.text, 1 / 1)};
    }
  }

  ${maxWidth};

  ${props =>
    props.fadeColor &&
    css`
      color: ${props => rgba(props.theme.colors.text, 1 / 2)};
    `};

  ${props =>
    props.smallSize &&
    css`
      font-size: ${props => props.theme.fontSizes[0]}px;
    `};
`

export default Text

Text.defaultProps = {
  is: 'p',
  m: 0,
}
