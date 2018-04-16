// theme.js
import { readableColor } from 'polished'

// Breakpoints
const breakpoints = ['40em', '52em', '68em']

// Colors
const colors = {
  text: '#000',
}

// Typographic Scale
// numbers are converted to px values
const fontSizes = [13, 19, 28, 62]

// Spacing Scale
// used for margin and padding
const space = [0, 8, 16, 32, 64]

// Max-widths
const maxWidths = ['40rem', '60rem']

// Easing function
const easing = 'cubic-bezier(0.23, 1, 0.32, 1)'

const theme = {
  breakpoints,
  colors,
  fontSizes,
  space,
  maxWidths,
  easing,
}

export default theme
