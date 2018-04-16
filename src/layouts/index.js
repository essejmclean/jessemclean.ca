import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { normalize, readableColor, shade, parseToRgb } from 'polished'
import theme from '../theme'
import { Box } from 'rebass'
import Header from '../components/Header'
import Footer from '../components/Footer'

injectGlobal`
  ${normalize()};
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-feature-settings: "kern" 1;
    -ms-font-feature-settings: "kern" 1;
    -o-font-feature-settings: "kern" 1;
    -webkit-font-feature-settings: "kern" 1;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
  }
  html { font: 100%/1.5 system-ui,-apple-system,BlinkMacSystemFont,SF UI,Helvetica Neue,sans-serif; }
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: theme,
    }
  }
  setColor = () => {
    let newTheme = theme
    let time = new Date().getHours()
    let color = '#fff'
    if (time < 12) {
      color = shade(1 - (12 - time) / 12, color)
    }
    if (time >= 12) {
      color = shade(1 - (time - 12) / 12, color)
    }
    document.body.style.background = color
    newTheme.colors.text = readableColor(color)
    this.setState({ theme: newTheme })
  }
  componentDidMount() {
    this.setColor()
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <Helmet
            title={this.props.data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: this.props.data.site.siteMetadata.description,
              },
              {
                name: 'keywords',
                content: this.props.data.site.siteMetadata.keywords,
              },
              { name: 'author', content: 'Jesse McLean' },
              {
                property: 'og:title',
                content: this.props.data.site.siteMetadata.title,
              },
              { property: 'og:site_name', content: 'Jesse McLean' },
              { property: 'og:type', content: 'website' },
              {
                property: 'og:url',
                content: 'https://jessemclean.ca/',
              },
              {
                property: 'og:description',
                content: this.props.data.site.siteMetadata.description,
              },
            ]}
            link={[{ rel: 'canonical', href: 'https://jessemclean.ca/' }]}
          />
          <Header siteTitle={this.props.data.site.siteMetadata.title} />
          {this.props.children()}
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
